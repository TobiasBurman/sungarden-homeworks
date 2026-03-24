import express from 'express';
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const app = express();
app.use(express.json());

app.get("/userlanguages", async (req, res) => {
    try {
        const users = await prisma.userLanguage.findMany();
        res.json(users);
    } catch (error) {
        if(error instanceof Error){
            res.status(500).send(error.message)
        }
        res.status(500).send("unknown error")
    }
} );

app.get("/userlanguages/:language", async (req, res) => {
    try {
      const { language } = req.params;
      const users = await prisma.userLanguage.findMany({
        where: {
          languages: {
            has: language,
          },
        },
      });
      res.json(users);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).send(error.message);
      } else {
        res.status(500).send("unknown error");
      }
    }
  });

  app.post("/userlanguages", async (req, res) => {
    try {
      const { name, email, languages, age } = req.body;
      const user = await prisma.userLanguage.create({
        data: {
          name,
          email,
          languages,
          age,
        },
      });
      res.status(201).json(user);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).send(error.message);
      } else {
        res.status(500).send("unknown error");
      }
    }
  });

  app.put("/userlanguages", async (req, res) => {
    try {
      const updatedUser = await prisma.userLanguage.update({
        where: { email: "alice@mail.com" },
        data: {
          languages: ["English", "Spanish", "Swedish"],
        },
      });
      res.json(updatedUser);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).send(error.message);
      } else {
        res.status(500).send("unknown error");
      }
    }
  });

  app.delete("/userlanguages", async (req, res) => {
    try {
      const deleted = await prisma.userLanguage.deleteMany({
        where: {
          age: {
            lt: 18,
          },
        },
      });
      res.json({ message: `${deleted.count} users deleted` });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).send(error.message);
      } else {
        res.status(500).send("unknown error");
      }
    }
  });

app.listen(3000, () => {
    console.log("Server is running on PORT 3000")
});