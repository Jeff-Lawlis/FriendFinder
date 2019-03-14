var express = require('express');
var api = express.Router();
var input = require("../data/friends");

module.exports = function(app) {
    api.get("/api/friends", function(req, res){
        res.json(input);
    });

api.post("/api/friends", function(req, res){
    var userInput = req.body;
    userInput.submissions.forEach(function(submissions){
        if (submissions.submission == "1 Strongly Disagree"){
            submissions.submission = 1;
        }
        else if (submission.submission == "2 Disagree") {
            submissions.submission = 2;
        }
        else if (submission.submission == "3 Neither agree nor disagree") {
            submissions.submission = 3;
        }
        else if (submission.submission == "4 Agree") {
            submissions.submission = 4;
        }
        else if (submission.submission == "5 Strongly Agree") {
            submissions.submission = 5;
        }
        else {
            submissions.submission = parseInt(submissions.submission);
        }
    })
    })
}
    var closestMatch = {};
    var matchedFriend = 0;
    
    var bestSubmission = 40;
    
    for (var friends = 0; friends < input.length; friends++) {
      var totalDifference = 0;
   
      for (var submissions = 0; submissions < input[friends].submission.length; submissions++) {
        var diff = Math.abs(input[friends].submission[submissions] - userInput.submission[submissions]);
        totalDifference += diff;
      }
      console.log(totalDifference, input[friends].name);
      
      if (totalDifference < bestSubmission) {
        matchedFriend = friends;
        bestSubmission = totalDifference;
      }
    }
    closestMatch = input[matchedFriend];
    input.push(userInput);
    res.json(closestMatch);

 module.exports = api;