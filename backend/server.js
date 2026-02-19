import express from "express";
import cors from "cors";
import dotenv from "dotenv";        
dotenv.config();
const app = express();
app.use(cors());


const PORT = process.env.PORT || 5000;

const jokes = [
  {
    id: 1,
    title: "Programmer Humor",
    joke: "Why do programmers prefer dark mode? Because light attracts bugs.",
  },
  {
    id: 2,
    title: "Debugging Life",
    joke: "I told my computer I needed a break, and it said: 'No problem — I’ll go to sleep.'",
  },
  {
    id: 3,
    title: "JavaScript Reality",
    joke: "Why did JavaScript developer wear glasses? Because they couldn't C#.",
  },
  {
    id: 4,
    title: "Backend Logic",
    joke: "Why did the server break up with the database? It found too many connections.",
  },
  {
    id: 5,
    title: "Frontend Struggle",
    joke: "CSS is like a relationship — one small change and everything breaks.",
  },
  {
    id: 6,
    title: "React Developer",
    joke: "Why did the React component go to therapy? It had too many unresolved states.",
  },
];

app.get("/", (req, res) => {
    res.send("Backend working");
  });
  
app.get("/api/data", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.get("/api/html", (req, res) => {
  res.send("<h1>Heading</h1>");
});

app.get("/api/jokes", (req, res) => {
  res.send(jokes);
});
