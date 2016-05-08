import express from 'express';
const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('claudia-api-boilerplate: use the /name route to make requests');
});

app.get('/name', (req, res) => {
  if(req.query.name) {
    res.send(`Hi there ${req.query.name}!`)
  } else {
    res.send('Use /name?name=YourName to pass query')
  }
});

app.listen(port, (err) => {
  if(err) {
    console.log("ERROR: ", err);
  }
  console.log("Listening of port",port);
})
