"use strict";
    
    var quiz = {
    
    url: "http://vhost3.lnu.se:20080/question/1",
    xhr: new XMLHttpRequest(),
    answer: document.getElementById("anwser"),
    submit: document.getElementById("button"),
    
    init: function () {
        
    
        
        quiz.displayQuestion(quiz.url);
    },
    
    displayQuestion: function (url) {
        
        quiz.xhr.onreadystatechange = function(){
            
           if (quiz.xhr.readyState === 4) {
               if (quiz.xhr.status == 200 || quiz.xhr.status == 304) {
                    var pers = JSON.parse(quiz.xhr.responseText);
                    console.log(pers.question);
                    var p = document.getElementById("Question");
                    p.innerHTML = pers.question;
                   
               }
               
               
           }
       }; 
       
        quiz.xhr.open("GET", url, true);
        quiz.xhr.send(null);
    },
    
    sendQuestion: function (answer, url) {
        
    }
    
    
    
    
 //   document.getElementById("button").addEventListener("click", function(){
        
   //     xhr.onreadystatechange = function(){
     //      if (xhr.readyState === 4) {
       //             var pers = JSON.parse(xhr.responseText);
         //           console.log(pers);
           //    }
               
               
//       }; 
  //      xhr.open('POST', 'http://vhost3.lnu.se:20080/answer/1', true);
    //    xhr.setRequestHeader('Content-Type', 'application/json');
      //  var answer = document.getElementById("answer").value;
    
        //var data = {
//        "answer": answer,
  //      };
    //    console.log(data);

      //  xhr.send(JSON.stringify(data));
      
    //});
};

window.onload = quiz.init;


//window.onload = quiz.init;
  
  //  var url = "http://vhost3.lnu.se:20080/question/1";
    //var xhr = new XMLHttpRequest();
    
  //  url: "http://vhost3.lnu.se:20080/question/1",
 //var button = document.getElementById("button");
  
   // button.addEventListener("click", function () {
        
     //   getRequest();
    //});
//    init: function () {
        
//        quiz.getRequest();
//        console.log(quiz.xhr);
//    },
    
    //var getRequest = function() {
        
    //xhr.onreadystatechanged = function() {
      //  if (xhr.readyState === 4 && xhr.status === 200) {
        //        console.log(xhr.responseText);
            //    var pers = JSON.parse(xhr.responseText);
              //  console.log(pers);
         //   }
          //  else {
            //    console.log("Läsfel, status:"+xhr.status);
           // }
//        };
        
  //      xhr.open("GET", url, true);
//        xhr.send(null);
  //  };