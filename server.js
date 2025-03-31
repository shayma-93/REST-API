import app from "./app.js"
const PORT = process.env.PORT || 5000;
app.get('/',(req,res)=>{
    res.send('response')
})
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
