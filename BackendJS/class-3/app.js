let express = require('express');
let app = express();

app.get('/', (req, res) => {
  res.send('Hello');
});

app.get('/new/:id', (req, res) => {
    // let id = req.params.id;
    let {id} = req.params;
    // console.log (req.params,"hehehe");
    res.send(id)
});

app.listen(3000, () => {
  console.log('Running');
});
