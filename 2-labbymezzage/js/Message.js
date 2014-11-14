"use strict";


function Message(message, date) {
    
 
    this.getText = function(){
        return message;
    }
    
    this.setText = function(_text) {
        message = _text;
    }
    
    this.getDate = function() {
        
    var _date = new Date();
    var hour = _date.getHours();
    var minute = _date.getMinutes();
    var seconds = _date.getSeconds();
    
    var theDate = hour + ":" + minute + ":" + seconds;
    
    return theDate;
    };
    
    this.setDate = function(_date) {
        date = _date;
    };
    
    Message.prototype.toString = function() {
        return this.getText()+" ("+this.getDate()+")";
    };
    
}