const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Learn Table</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f0f8ff;
            color: #333;
            text-align: center;
            padding-top: 50px;
          }
          h1 {
            color: #2c3e50;
          }
          a {
            display: inline-block;
            margin-top: 20px;
            padding: 10px 20px;
            background-color: #3498db;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
          }
          a:hover {
            background-color: #2980b9;
          }
        </style>
      </head>
      <body>
        <h1>Want to generate tables?</h1>
        <p>Click the button below to go to the about page!</p>
        <a href="/about">Go to Tables Page</a>
      </body>
    </html>
  `);
});


app.get('/about', (req, res) => {
  const message = 'Table';
  const number = parseInt(req.query.number) || 2;
  res.render('about', { message, number });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
