"use strict";
    
    var quiz = {
    
    url: "http://vhost3.lnu.se:20080/question/1",
    xhr: new XMLHttpRequest(),
    div: document.getElementById("content"),
    answer: document.getElementById("answer"),
    submit: document.getElementById("button"),
    wrongAnswer: document.getElementById("wrongAnswer"),
    pers: null,
    numberOfTries: 0,
    array: [],
    
    init: function () {
        
        quiz.submit.addEventListener("click", function (e) {
            e.preventDefault();
            quiz.sendQuestion(quiz.answer.value, quiz.pers.nextURL);
        });
    
        
        quiz.displayQuestion(quiz.url);
    },
    
    displayQuestion: function (url) {
        quiz.wrongAnswer.innerHTML = "";
        quiz.xhr.onreadystatechange = function(){
            
           if (quiz.xhr.readyState === 4) {
               if (quiz.xhr.status == 200 || quiz.xhr.status == 304) {
                   
                    quiz.pers = JSON.parse(quiz.xhr.responseText);
                    console.log(quiz.pers.question);
                    var p = document.getElementById("Question");
                    p.innerHTML = quiz.pers.question;
                   
               }
               
               
           }
       }; 
       
        quiz.xhr.open("GET", url, true);
        quiz.xhr.send(null);
    },
    
    sendQuestion: function (answer, url) {
        
        var xhr2 = new XMLHttpRequest();
        
        
        xhr2.onreadystatechange = function(){
            
           if (xhr2.readyState === 4) {
               var pers = JSON.parse(xhr2.responseText);
               console.log(pers);
               
               if (pers.message === "Correct answer!") {
                    quiz.displayQuestion(pers.nextURL);
                    quiz.array.push(quiz.numberOfTries);
                    quiz.numberOfTries = 0;
                   
                   if (pers.nextURL === undefined) {
                       quiz.wrongAnswer.innerHTML = "Quizen avklarad";
                       quiz.showResult();
                   }
               }
               
               else {
                   quiz.wrongAnswer.innerHTML = "Fel Svar, försök igen";
                   quiz.numberOfTries += 1;
                   quiz.array.push(quiz.numberOfTries);
               }
               
           }
       }; 
       
        xhr2.open('POST', url, true);
        xhr2.setRequestHeader('Content-Type', 'application/json');
       
        var theAnswer = {answer: answer};
        console.log(theAnswer);

        xhr2.send(JSON.stringify(theAnswer));
        
    },
    
    showResult: function () {
        
        
        for (var i = 1; i < quiz.array.length + 1; i++) {
            var result = document.createElement("p");
            quiz.div.appendChild(result);
            result.innerHTML = "Fråga " + i + " behövde du " + quiz.array[i - 1] + " försök att klara.";
        }
    }
    
};

window.onload = quiz.init;
