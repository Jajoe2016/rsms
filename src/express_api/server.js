const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const db_query = require('./db_query');

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
app.post('/login', function (req, res) { db_query.validateUserByUsername(req, res) })
app.post('/createuser', function (req, res) { db_query.createUser(req, res) })
app.get('/getusers', function (req, res) { db_query.getUsers(req, res) })

// app.post('/login1', function (req, res) {
//     const req_body = req.body;
//     console.log(`server: ${req_body.username}`);
//     // const query = `
//     //     SELECT * FROM sms.users WHERE username = '${req_body.username}'
//     //     ORDER BY id ASC
//     //     `;
//     const db_response = db_query.getUserByUsername(req_body.username);
//     console.log(typeof db_response); 
//     console.log(db_response);
    
//     response = { "code": 200, "token": "tokenkey" }

//     // if (db_response[0].username == req_body.username && db_response[0].password == req_body.password)
//     // response = { "code": 200, "token": "tokenkey" }
//     // else response = { "code": 400, "req-body": req_body, "token": -1 }  
//     res.send(JSON.stringify(response));
// })
app.get('/file', function (req, res) {
    res.sendFile(__dirname + "/" + "file.html");
})
app.get('/', function (req, res) {
    response = { "code": 200, "message": "API-GET-OK" }
    res.end(JSON.stringify(response));
})
app.listen(port, () => console.log(`API listening on port ${port}!`));