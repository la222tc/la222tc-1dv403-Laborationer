"use strict";


var MessageBoard = {
    
    messages: [],
    
   
    init: function(){
        
        var submit = document.getElementById("submit");
        submit.addEventListener("click", function(e){
            e.preventDefault();
            
            createMessage();
            displayMessages();
            numberOfMessages();
        });
      
       
        function numberOfMessages(){
            var nr = document.getElementById('numberOfMessages');
            
            var total = MessageBoard.messages.length;
            nr.innerHTML = "Antal meddelanden: " + total;
        }
        
        function displayMessages(){
            document.getElementById("messageMain").innerHTML = "";
            
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
            var delTimeAndTime = document.createElement("div");
            
            newDiv.id = "message" + messageID;
            newP.className = "theMessage";
            aDelete.className = "timeAndDelete";
            aTime.className = "timeAndDelete";
            imgDelete.className = "delete";
            imgTime.className = "time";
            timeStampP.className = "timeStamp";
            delTimeAndTime.className = "delTimeAndTime";
            
            imgDelete.setAttribute("src", "deletepic.ico");
            aDelete.setAttribute("href", "#");
            imgTime.setAttribute("src", "timestamppic.ico");
            aTime.setAttribute("href", "#");
            
            newDiv.style.overflow = "hidden";
            newDiv.style.backgroundColor = "#7897AB";
            newDiv.style.textAlign = "left";
            newDiv.style.width = "98%";
            newDiv.style.cssFloat = "left";
            newDiv.style.marginTop = "10px";
            newDiv.style.marginLeft = "5px";
            newDiv.style.borderRadius = "5px";
            newDiv.style.border ="1px solid black";
            
   
            
            msg.appendChild(newDiv);
            newDiv.appendChild(newP);
            newDiv.appendChild(aDelete);
            newDiv.appendChild(aTime);
            newDiv.appendChild(imgDelete);
            newDiv.appendChild(imgTime);
            newDiv.appendChild(timeStampP);
            aDelete.appendChild(imgDelete);
            aTime.appendChild(imgTime);
            delTimeAndTime.appendChild(aDelete);
            delTimeAndTime.appendChild(aTime);
            newDiv.appendChild(delTimeAndTime);
            delTimeAndTime.appendChild(timeStampP);
            
            newP.innerHTML = MessageBoard.messages[messageID].getHTMLText();
            timeStampP.innerHTML = MessageBoard.messages[messageID].getDate();
            
    
        }
        
        function createMessage(){
            
            var mess = new Message(document.getElementById("messageTextArea").value, new Date());
            MessageBoard.messages.push(mess);
        }
        
        var del = document.getElementById("")
        
        function removeMessage(messageID){
            
        }
       
    }
    
};

window.onload = MessageBoard.init;