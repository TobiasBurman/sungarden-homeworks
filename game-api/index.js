import express from "express";
import pg from "pg";
import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
  DB_USER: z.string(),
  DB_HOST: z.string(),
  DB_DATABASE: z.string(),
  DB_PASSWORD: z.string(),
  DB_PORT: z.string().optional(),
});

const validatedEnv = envSchema.safeParse(process.env);
if (!validatedEnv.success) {
  console.error("Invalid environment variables:", validatedEnv.error.errors);
  process.exit(1);
}


const app = express();

app.use(express.json());


const { Pool } = pg;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const playerSchema = z.object({
  name: z.string().min(2).max(50),
  join_date: z.string(),
});

app.get("/", (req, res) => {
  res.json({ message: "Game API running..." });
});

app.get("/players-scores", async (req, res) => {
  try {
    const result = await pool.query(`
        SELECT players.name, games.title, scores.score
        FROM scores
        INNER JOIN players ON scores.player_id = players.id
        INNER JOIN games ON scores.game_id = games.id
      `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});


app.get("/top-players", async (req, res) => {
  try {
    const result = await pool.query(`
        SELECT players.name, SUM(scores.score) AS total_score
        FROM scores
        INNER JOIN players ON scores.player_id = players.id
        GROUP BY players.name
        ORDER BY total_score DESC
        LIMIT 3
      `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get("/inactive-players", async (req, res) => {
  try {
    const result = await pool.query(`
        SELECT players.name
        FROM players
        LEFT JOIN scores ON players.id = scores.player_id
        WHERE scores.player_id IS NULL
      `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get("/popular-genres", async (req, res) => {
  try {
    const result = await pool.query(`
        SELECT games.genre, COUNT(scores.id) AS times_played
        FROM scores
        INNER JOIN games ON scores.game_id = games.id
        GROUP BY games.genre
        ORDER BY times_played DESC
      `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get("/recent-players", async (req, res) => {
  try {
    const result = await pool.query(`
        SELECT name, join_date
        FROM players
        WHERE join_date >= CURRENT_DATE - INTERVAL '30 days'
      `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.post("/players", async (req, res) => {
  const result = playerSchema.safeParse(req.body);
  
  if (!result.success) {
    return res.status(400).json({ error: result.error.errors });
  }

  try {
    const { name, join_date } = result.data;
    await pool.query(
      "INSERT INTO players (name, join_date) VALUES ($1, $2)",
      [name, join_date]
    );
    res.status(201).json({ message: "Player created :)" });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
