"use strict";


var MessageBoard = {
    
    messages: [],
    
   
    init: function(){
        
        var submit = document.getElementById("submit");
        
        submit.onclick = function(){
            createMessage();
            //alert(MessageBoard.messages[0]);
            displayMessages();
            
            return false;
        };
        
        function displayMessages(){
            document.getElementById("messageTextArea").innerHTML = "";
            
            for (var i = 0; i < MessageBoard.messages.length; ++i) {
                displayMessage(i);
            }
        }
        
        function displayMessage(messageID){
            var msg = document.getElementById("messageMain");
            var newDiv = document.createElement("div");
            var newP = document.createElement("p");
            var aDelete = document.createElement("a");
            var aTime = document.createElement("a");
            var imgDelete = document.createElement("img");
            var imgTime = document.createElement("img");
            var timeStampP = document.createElement("p");
            
            newDiv.className = "message";
            newP.className = "theMessage";
            aDelete.className = "timeAndDelete";
            aTime.className = "timeAndDelete";
            imgDelete.className = "delete";
            newDiv.className = "time";
            timeStampP.className = "timeStamp";
            
            
            msg.appendChild(newDiv);
            newDiv.appendChild(newP);
            newDiv.appendChild(aDelete);
            newDiv.appendChild(aTime);
            newDiv.appendChild(imgDelete);
            newDiv.appendChild(imgTime);
            newDiv.appendChild(timeStampP);
            
            newP.innerHTML = MessageBoard.messages[messageID];
            
            
            //var hej = document.querySelector(".message");
            //hej.appendChild(newDiv);
           // document.msg.appendChild(newDiv);
           // newDiv.setAttribute("class", "message");
            //newP.setAttribute("class", "theMess,age");
            //aDelete.setAttribute("class", "timeAndDelete");
            //aTime.setAttribute("class", "timeAndDelete");
            //imgDelete.setAttribute("class", "timeAndDelete");
            //imgTime.setAttribute("class", "timeAndDelete");
            
            //var myImage = images.namedItem("myImage");
        };
        
        function createMessage(){
            
            var mess = new Message(document.getElementById("messageTextArea").value, new Date());
            MessageBoard.messages.push(mess);
        }
         //submit.onclick = function(){
        //    var article = document.createElement("article");
        //    var p = document.createElement("p");
        //    var a = document.createElement("a");
        //    var aa = document.createElement("a");
        //    var footer = document.createElement("footer");
        //    article.appendChild(p);
        //    article.appendChild(a);
        //    article.appendChild(aa);
        //    article.appendChild(footer);
            
        //    document.getElementsByClass("theMessage").innerHTML = createMessage();
            
        //    var newArticle = document.querySelector("#mainMessage .message");
        //    newArticle.appendChild(article);
            
        //};
    //  alert(mess);
    //  alert(mess.getText());
    //  mess.setText("En annan text");
    //  alert(mess);

   // var mess = new Message("Testmeddelande", new Date());
    //var mess2 = new Message("Testmeddelande2", new Date());
    //var mess3 = new Message("Testmeddelande3", new Date());
    //var mess4 = new Message("Testmeddelande4", new Date());
    
    
    // lägger till de skapade meddelanden till arrayen messages
    //MessageBoard.messages.push(mess);
    //MessageBoard.messages.push(mess2);
    //MessageBoard.messages.push(mess3);
    //MessageBoard.messages.push(mess4);
    
    
    // Antal Meddelande i arrayen messages
    var total = MessageBoard.messages.length;
    
   // for (var i = 0; i < MessageBoard.messages.length; i++) {
     //   alert(MessageBoard.messages[i]);
    //}
    
       //alert(MessageBoard.messages[1].getText());
       //alert(total);
    }
    
};

window.onload = MessageBoard.init;