const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req,res)=>{
    res.send("Hii vercel, check")
  })


app.listen(3001, () => {
    console.log(`server running at http://localhost:3001`);
  });


  module.exports = app;