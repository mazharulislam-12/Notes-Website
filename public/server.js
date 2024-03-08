// server.js

const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const filePath = path.join(__dirname, 'data.txt');

// প্রথম পেজ প্রদর্শন
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ডেটা সংরক্ষণ
app.post('/save', (req, res) => {
    const name = req.body.name;

    // নাম ডেটা লেখা
    fs.writeFile(filePath, name, (err) => {
        if (err) {
            console.error('ত্রুটি:', err);
            res.status(500).send('কিছু এইচটিটিপি ত্রুটি হয়েছে');
            return;
        }
        console.log('নাম সংরক্ষিত হয়েছে:', name);
        res.send('নামটি সংরক্ষিত হয়েছে');
    });
});

// পূর্বের নাম প্রদর্শন
app.get('/data', (req, res) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('ত্রুটি:', err);
            res.status(500).send('কিছু এইচটিটিপি ত্রুটি হয়েছে');
            return;
        }
        console.log('পূর্বের নাম:', data);
        res.send(`পূর্বের নাম: ${data}`);
    });
});

app.listen(PORT, () => {
    console.log(`সার্ভার চালু হয়েছে http://localhost:${PORT}`);
});
