require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

const OPENAI_KEY = process.env.OPENAI_API_KEY;
if (!OPENAI_KEY) {
  console.warn('Warning: OPENAI_API_KEY not set in environment.');
}

app.post('/api/chat', async (req, res) => {
  const { messages, model = 'gpt-3.5-turbo', max_tokens } = req.body;
  if (!messages) return res.status(400).json({ error: 'messages required' });

  try {
    const resp = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      { model, messages, max_tokens },
      {
        headers: {
          Authorization: `Bearer ${OPENAI_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    res.json(resp.data);
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: 'proxy_error', details: err.response?.data || err.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Proxy server listening on port ${PORT}`));
