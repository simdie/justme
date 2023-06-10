const express = require('express');
const emailProvider = require('email-provider');
const path = require('path'); // Add this line

const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/:address', async (req, res) => {
    const { address } = req.params;

    try {
        const service = await emailProvider.get(address);

        res.json(service);
    } catch (error) {
        res.status(500).json({ error: 'Email provider was not reached' });
    }
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
