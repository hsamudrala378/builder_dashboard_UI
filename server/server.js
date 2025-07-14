const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 4000;

// Dummy login endpoint
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (email === 'admin@example.com' && password === 'admin123') {
    return res.json({ success: true, message: 'Login successful!' });
  } else {
    return res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// Serve builder data
app.get('/data', (req, res) => {
  const rawData = fs.readFileSync('./newhomes.json', 'utf-8');
  const data = JSON.parse(rawData);
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});
