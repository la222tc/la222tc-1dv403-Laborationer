"use strict";


function Message(message, date) {
    
 
    this.getText = function(){
        return message;
    };
    
    this.setText = function(_text) {
        message = _text;
    };
    
    
    this.getDate = function() {
    
    // Tar ut timmar, minuter och sekunder ur date och sätter ihop dom i en variabel och returnerar det    
   // var _date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var seconds = date.getSeconds();
    
    var theDate = hour + ":" + minute + ":" + seconds;
    
    return theDate;
    };
    
    this.setDate = function(_date) {
        date = _date;
    };
    
    Message.prototype.toString = function() {
        return this.getText()+" ("+this.getDate()+")";
    };
    
    Message.prototype.getHTMLText = function() {
        alert("ej klar");
    };
    
    Message.prototype.getDateText = function() {
        alert("ej klar");
    };
    
}