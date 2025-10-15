const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));

app.post('/', (req, res) => {
  console.log('hit / voice webhook, req.body');
  res.set('Content-Type', 'application/xml').status(200).send(responseXml);
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log('app listening on port:', port));