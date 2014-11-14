"use strict";


var MessageBoard = {
    
    messages: [],
    
    
    init: function(){
        
       // var mess = new Message("Testmeddelande", new Date());
        
        //var total = messages.push(mess);
    //  alert(mess);
    //  alert(mess.getText());
    //  mess.setText("En annan text");
    //  alert(mess);
    var mess = new Message("Testmeddelande", new Date());
    
    MessageBoard.messages.push(mess);
    
       alert(MessageBoard.messages[0].getText());
    }
    
};

window.onload = MessageBoard.init;