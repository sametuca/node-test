const express = require('express');
const app = express();
const port = 3000;

// JSON verilerini işlemek için gerekli middleware
app.use(express.json());

app.get('/api/users', (req, res) => {
    // Kullanıcı listesi döndürülür
    const users = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' }
    ];
    res.json(users);
});

// Kullanıcı oluşturma rotası

app.post('/api/users', (req, res) => {
    // Yeni bir kullanıcı oluşturulur
    const user = req.body;
    // Kullanıcı oluşturulduktan sonra yapılacak işlemler...
    res.sendStatus(201);
});

app.listen(port, () => {
    console.log(`Express.js uygulaması http://localhost:${port} adresinde çalışıyor.`);
});

// Public klasörünü statik dosya klasörü olarak ayarla
app.use(express.static('public'));