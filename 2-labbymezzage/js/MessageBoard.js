"use strict";


var MessageBoard = {
    
    messages: [],
    
    
    init: function(){
        
        var mess = new Message("Testmeddelande", new Date());
        
        var total = messages.push(mess);
    //  alert(mess);
    //  alert(mess.getText());
    //  mess.setText("En annan text");
    //  alert(mess);
        alert(messages)
    }
    
};

window.onload = MessageBoard.init;