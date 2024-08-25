const express = require('express');
const app = express();

const minecraftUrl = 'minecraft://?addExternalServer=loyfrieya.aternos.me|loyfrieya.aternos.me:18409';

app.get('/', (req, res) => {
    res.redirect(minecraftUrl);
});

app.get('/afk', (req, res) => {
    const htmlContent = `
        <!DOCTYPE html>
        <html>
            <head>
                <title>AFK Page</title>
            </head>
            <body>
                <h1>You are now AFK</h1>
                <p>This is a simple AFK page.</p>
            </body>
        </html>
    `;

    res.send(htmlContent);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Redirecting to ${minecraftUrl}`);
});
