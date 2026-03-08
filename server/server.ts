import express from "express";
import {z} from "zod";

const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, ()=>{
    console.log(`Server ruunning http://localhost:${PORT}`);
});

app.get("/ping", (req, res) => {
    res.json({message: "pong"});
});

app.get("/random-person", async (req, res) => {
    try {
        const response = await fetch ("https://randomuser.me/api/");
        const data = await response.json();

        const personSchema = z.object({
            results: z.array(
                z.object({
                    name: z.object({
                        first: z.string(),
                        last: z.string()
                    }),
                    location: z.object({
                        country: z.string()
                    })
                })
            )
        });

        const validated = personSchema.parse(data);
        const person = validated.results[0];
        const fullName = person.name.first + " " + person.name.last;
        const country = person.location.country;

        res.json({ fullName, country });

    } catch (error) {
        res.status(500).json({ error: "Failed to fetch random person :(" });
    }
})

app.post("/users", (req, res) => {
    try {
        const userSchema = z.object({
            name: z.string().min(3).max(12),
            age: z.number().min(18).max(100).optional().default(28),
            email: z.string().email().toLowerCase()
        });
        
        const validated = userSchema.parse(req.body);
        
        res.status(201).json(validated);
        
    } catch (error) {
        if (error instanceof z.ZodError) {
            res.status(400).json({ 
                error: "Validation error",
                details: error.issues 
            });
        } else {
            res.status(500).json({ error: "Server error" });
        }
    }
});


app.get("/random-login", async (req, res) => {
    try {
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        
        const loginSchema = z.object({
            results: z.array(
                z.object({
                    login: z.object({
                        username: z.string()
                    }),
                    registered: z.object({
                        date: z.string()
                    })
                })
            )
        });
        
        const validated = loginSchema.parse(data);
        const user = validated.results[0];
        
        const username = user.login.username;
        const registered = user.registered.date;
        
        res.json({
            username: username,
            registered: registered,
            summary: `${username} (registered ${registered})`
        });
        
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch logininfo" });
    }
});

