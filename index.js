const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req,res)=>{
    res.send("Hii")
  })


app.listen(port, () => {
    console.log(`server running at http://localhost:3001`);
  });


  module.exports = app;