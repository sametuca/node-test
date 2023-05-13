const express = require('express');
const { Configuration, OpenAIApi } = require("openai");

const app = express();
const port = 3000;

// Ana sayfa rotası
app.get('/', (req, res) => {
    res.send('Merhaba Dünya!');
});

// Tamamlama işlemini gerçekleştiren fonksiyon
async function runCompletion() {
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });

    const openai = new OpenAIApi(configuration);

    try {
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: "Hello world",
        });

        console.log(completion.data.choices[0].text);
    } catch (error) {
        console.error("Tamamlama isteği başarısız oldu:", error);
    }
}

// Sunucuyu başlatma
app.listen(port, () => {
    console.log(`Uygulama http://localhost:${port} adresinde çalışıyor.`);
    runCompletion();
});

async function delayOneSecondRunCompletion() {
    await runCompletion();
    await new Promise((resolve) => setTimeout(resolve, 1000));
}
