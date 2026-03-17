import express from "express";
import pg from "pg";
import dotenv from "dotenv"

dotenv.config();

const app = express();

const { Pool } = pg;

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  });

app.get("/", (req, res) => {
    res.json({message: "Game API running..."});
})

  app.get('/players-scores', async (req, res) => {
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


  app.get('/top-players', async (req, res) => {
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

  app.get('/popular-genres', async (req, res) => {
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

  app.get('/recent-players', async (req, res) => {
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

  app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
  });
