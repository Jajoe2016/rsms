const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/', (req, res) => {
    const req_body = req.body;
    response = { "code": 200, "req-body": req_body, "message": "API-POST-OK" }
    res.end(JSON.stringify(response));
});
app.post('/login', function (req, res) {
    response = { "code": 200, "token": "tokenkey" }
    res.end(JSON.stringify(response));
})
app.get('/file', function (req, res) {
    res.sendFile(__dirname + "/" + "file.html");
})
app.get('/', function (req, res) {
    response = { "code": 200, "message": "API-GET-OK" }
    res.end(JSON.stringify(response));
})
app.listen(port, () => console.log(`API listening on port ${port}!`));