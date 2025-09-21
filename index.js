const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('hello world')
})
app.get('/home', (req, res) => {})
 res.send(<a href='https://www.indiaculture.gov.in/knowledge-resources-heritage'>Ministry of culture website</a>)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
