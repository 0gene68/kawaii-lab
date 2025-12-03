const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(cors());

// Mock 데이터
const users = [
  [1, "Alice"],
  [2, "Bob"],
  [3, "Charlie"],
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
