const express = require('express');
const app = express();

// Set the redirect URL
const minecraftUrl = 'minecraft://?addExternalServer=loyfrieya.aternos.me|loyfrieya.aternos.me:18409';

// Define a route that will handle the redirect
app.get('/', (req, res) => {
    res.redirect(minecraftUrl);
});

// Set the port to listen on
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Redirecting to ${minecraftUrl}`);
});
