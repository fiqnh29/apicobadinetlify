const express = require('express')
const mysql = require('mysql');
const db = mysql.createConnection({
    host : 'db4free.net',
    user : 'fiqrynh29',
    password : 'Fiqry123',
    database : `fiqnhdb`,
    port : 3306
})
const PORT = process.env.PORT || 5000
var app = express();
app.use(express.static('public'))


app.get('/', (req, res) => {
  res.send('<h1>Salam dari Lintang & Heroku!</h1>')
})

app.get('/fitur', (req, res) => {
  let query = `select * from users u join roles r on u.role_id = r.id where role_id != 3 order by u.id desc`
  db.query(query, (err, results) => {
      if(err) return res.status(500).send(err)
      res.status(200).send(results)
  })
})

app.get('/:lintang', (req, res) => {
  res.send('<h1>Anda merequest GET /'+req.params.lintang+'</h1>')
})

app.listen(PORT, () => {
  console.log(`Listening on ${ PORT }`)
})
