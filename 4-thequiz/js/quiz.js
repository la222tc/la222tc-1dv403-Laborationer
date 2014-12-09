"use strict";
window.onload = function () {
    
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
var url = "https://vhost3.lnu.se:20080/question/1";
    document.getElementById("button").addEventListener("click", function(){
        var xhr = new XMLHttpRequest();
       
       xhr.onreadystatechanged = function(){
           if (xhr.readyState === 4 && xhr.status === 200) {
               console.log(xhr.responseText);
           }
       }; 
       
       xhr.open("GET", url, true);
       xhr.send(null);
    });
    
    
};


//window.onload = quiz.init;