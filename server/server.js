const express = require('express');
const server = express();
const cors = require('cors');

server.use(cors());
// server.use(express.json());

server.get('/a', (req, res) => {
  res.send([{todo:"eat dinner"},{todo:"exercise"}]);
});

server.get('/b', (req, res) => {
  res.send(['a','b','c','d']);
});

server.get('/c', (req, res) => {
  res.send(['a1','b1', 'c1']);
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`\n=== API running on http://localhost:${PORT} ===\n`);
});
