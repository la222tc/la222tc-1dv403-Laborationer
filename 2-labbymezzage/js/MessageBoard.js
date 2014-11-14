"use strict";


var MessageBoard = {
    
    messages: [],
    
    
    init: function(){
        
    // var mess = new Message("Testmeddelande", new Date());
    //  alert(mess);
    //  alert(mess.getText());
    //  mess.setText("En annan text");
    //  alert(mess);

    var mess = new Message("Testmeddelande", new Date());
    var mess2 = new Message("Testmeddelande2", new Date());
    var mess3 = new Message("Testmeddelande3", new Date());
    var mess4 = new Message("Testmeddelande4", new Date());
    
    
    // lägger till de skapade meddelanden till arrayen messages
    MessageBoard.messages.push(mess);
    MessageBoard.messages.push(mess2);
    MessageBoard.messages.push(mess3);
    MessageBoard.messages.push(mess4);
    
    
    // Antal Meddelande i arrayen messages
    var total = MessageBoard.messages.length;
    
    for (var i = 0; i < MessageBoard.messages.length; i++) {
        alert(MessageBoard.messages[i]);
    }
    
       //alert(MessageBoard.messages[1].getText());
       //alert(total);
    }
    
};

window.onload = MessageBoard.init;