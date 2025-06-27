const https = require('https');
const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.post('/growtopia/server_data.php', (req, res) => {
    res.send(`server|91.132.49.134
port|17091
type|1

beta_server|127.0.0.1
beta_port|17091
beta_type|1
meta|localhost
RTENDMARKERBS1001`);
});

const options = {
    key: fs.readFileSync('./cert/key.pem'),
    cert: fs.readFileSync('./cert/cert.pem')
};

https.createServer(options, app).listen(443, () => {
    console.log('HTTPS server running on port 443');
});
