var data = require('./../data/friends.js');

module.exports = (app,path)=>{
    app.get("/api/friends", function(req, res){
        res.json(data.people);
    });

    app.post("/api/friends", function(req, res){
        

        var userData = req.body;
        console.log(userData);
        var MAXSCORE = 50;
        var matchIndex;

        for(var i = 0; i < data.people.length; i++){
            var totalDiff = 0;

            for(var x = 0; x < data.people[i].scores.length; x++){
                totalDiff += Math.abs(parseInt(data.people[i].scores[x] - userData.scores[x]));
            }

            if(totalDiff < MAXSCORE){
                MAXSCORE = totalDiff;
                matchIndex = i;
            }
        }
        data.people.push(userData);

        res.json(data.people[matchIndex]);
        res.end();
    });            
};