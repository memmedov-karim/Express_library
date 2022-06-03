const isciler = [
    { "id": 1, "name": "Sam", "age": 45 },
    { "id": 2, "name": "Tom", "age": 34 },
    { "id": 3, "name": "Bill", "age": 18 }
]

const express = require('express');
const app = express();




app.get('/', function (req, res) {
    res.send(isciler)
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });



