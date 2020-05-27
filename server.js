const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
const app = express();

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array());

app.get('/', express.static('pages'));

app.post('/submit', (req, res) => {
  console.log('body', req.body);
  res.status(201).send(`
    <html>
      <head>
        <title>Success</title>
      </head>
      <body>
        <h1>Form submitted successfully</h1>
        <h3>${req.originalUrl} does respond to '${req.method}'</h3>
        <p>
          ${JSON.stringify(req.body)}
        </p>
      </body>
    </html>
  `);
});

app.on('*', (req, res) => {
  res.status(404).send(`
    <html>
      <head>
        <title>Not Found</title>
      </head>
      <body>
        <h1>Not Found</h1>
        <h3>${req.originalUrl} does not respond to '${req.method}'</h3>
        <p>
          ${req.body}
        </p>
      </body>
    </html>
  `);
});

app.listen(8080, () => {
  console.log('listening on port 8080');
});
