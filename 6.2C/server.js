const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
// Middleware to parse JSON bodies (for POST requests)
app.use(express.json());
// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/add', (req, res) => {
    const { num1, num2 } = req.query;

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    const result = number1 + number2;

    res.json({
        result: result,
        number1: number1,
        number2: number2
    });
});
app.listen(PORT, () => {
    console.log("App listening to: " + PORT)
});
