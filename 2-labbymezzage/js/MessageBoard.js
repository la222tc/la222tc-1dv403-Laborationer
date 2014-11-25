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
        
        var text = document.getElementById("messageTextArea");
            
        text.addEventListener("keypress", function (e) {
                    
            // key code for enter
            if (e.keyCode === 13 && e.shiftKey) {
                return "\n";
            }
            
            else if (e.keyCode === 13) {
                
                createMessage();
                numberOfMessages();
                displayMessages();
                text.value = "";
            }
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
            
            newDiv.className = "message";
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
            
            imgDelete.alt = "Delete";
            imgTime.alt = "Fulltime";
   
            
            msg.appendChild(newDiv);
            newDiv.appendChild(newP);
            newDiv.appendChild(aDelete);
            newDiv.appendChild(aTime);
            newDiv.appendChild(imgDelete);
            newDiv.appendChild(imgTime);
            newDiv.appendChild(timeStampP);
            newDiv.appendChild(delTimeAndTime);
            aDelete.appendChild(imgDelete);
            aTime.appendChild(imgTime);
            delTimeAndTime.appendChild(aDelete);
            delTimeAndTime.appendChild(aTime);
            
            delTimeAndTime.appendChild(timeStampP);
            
            newP.innerHTML = MessageBoard.messages[messageID].getHTMLText();
            timeStampP.innerHTML = MessageBoard.messages[messageID].getTime();
            
            
            imgDelete.onclick = function(){
                removeMessage(messageID);
            };
            
            imgTime.onclick = function () {
            showTimeStamp(messageID);   
        };
        }   
            
        function removeMessage(messageID){
            
            var confirm = window.confirm("Vill du verkligen radera meddelandet?");
            
            if (confirm) {
                MessageBoard.messages.splice(messageID, 1);
                numberOfMessages();
                displayMessages();
            }
            
        }
        function showTimeStamp(messageID) {
            alert(MessageBoard.messages[messageID].getDateText());
        }
        
        function createMessage(){
            
            var mess = new Message(document.getElementById("messageTextArea").value, new Date());
            MessageBoard.messages.push(mess);
        }

       
    }
    
};

window.onload = MessageBoard.init;