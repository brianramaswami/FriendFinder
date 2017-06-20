var data = require('./../data/friends.js');

module.exports = (app,path)=>{
    app.get("/api/friends", function(req, res){
        res.json(data.people);
    });

    app.post("/api/friends", function(req, res){
        
     //create variables that will store the data requested, keep track of closest score, and store the index of the closest match
        var userData = req.body;
        console.log(userData);
        var MAXSCORE = 50;
        var matchIndex;
        //iterate through friendsArray and start a 0 variable for the diffrence total
        for(var i = 0; i < friendsArray.length; i++){
            var totalDiff = 0;
            //iterate through the answers comparing each one to the user answers and getting the absolute value of the two diffrences.
            for(var x = 0; x < friendsArray[i].scores.length; x++){
                totalDiff += Math.abs(parseInt(friendsArray[i].scores[x] - userData.scores[x]));
            }
            //If the current user has a dif less than the previous one store the new closests match
            if(totalDiff < MAXSCORE){
                MAXSCORE = totalDiff;
                matchIndex = i;
            }
        }
        //when finished push the new user data to the friendsArray
        friendsArray.push(userData);
        //return the user that was matched based on the identified index
        res.json(friendsArray[matchIndex]);
    });            
};