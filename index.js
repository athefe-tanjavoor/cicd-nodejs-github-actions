const express= require("express")
const app = express()
const PORT = process.env.PORT || 3000


app.get("/",(req,res)=>{
    res.send('🚀 Deployed via GitHub Actions on EC2');
})

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP' });
});

app.listen(PORT,()=>{
    console.log("Server is running on port 3000")
})