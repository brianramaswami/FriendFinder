module.exports = (app,path)=>{
    app.get('/',(req,res)=>{
        res.sendFile(path.join(__dirname,'../public/home.html'));
    });

    app.get('/friends',(req,res)=>{
        res.sendFile(path.join(__dirname,'../public/survey.html'));
    });
};