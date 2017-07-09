const express = require('express')
const app = express()
var html = `
<form action="/form_handler" method="POST">
<input type="submit" value="Want to see Hello World" />
</form>
`
var html2 = "<p>Hello World"

app.get('/', function (req, res) {
  res.send(html)
}) 

app.post('/form_handler', function (req, res) {
  res.send(html2)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})