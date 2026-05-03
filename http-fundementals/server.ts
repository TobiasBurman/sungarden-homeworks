import express from 'express';

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("welcome to our api")
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.get("/users", (req, res) => {
    const users = [
        {id: 1, name: "John Doe"},
        {id: 2, name: "Jane Smith"},
    ];
    res.json(users);
});

app.use(express.json());

app.post("/users", (req, res)=>{
    const newUser = req.body;
    console.log(newUser);
    console.log(newUser);
    res.json({message: "user added successfully!", user: newUser})
})


app.get("/greet", (req, res) => {
    res.send("Hello Developer!")
}) 

app.post("/submit", (req, res) => {
    const { name, age } = req.body;
    res.json({ message: `Hello, ${name}! You are ${age} years old.` })
})