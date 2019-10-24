const express = require('express')
const app = express()

    app.post('/', (req, res) => {
         res.send('index page') 
    })

app.listen(3000, () => {
  console.log(`3000번 port에 http server를 띄웠습니다.`)
})