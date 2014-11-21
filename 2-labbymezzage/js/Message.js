"use strict";


function Message(message, date) {
    
 
    this.getText = function(){
        return message;
    };
    
    this.setText = function(_text) {
        message = _text;
    };
    
    
    this.getTime = function() {
    
    // Tar ut timmar, minuter och sekunder ur date och sätter ihop dom i en variabel och returnerar det    
   // var _date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var seconds = date.getSeconds();
    
    var theDate = hour + ":" + minute + ":" + seconds;
    
    return theDate;
    };
    
    this.getDate = function(){
        return date;
    };
    
    this.setDate = function(_date) {
        date = _date;
    };
    
    Message.prototype.toString = function() {
        return this.getText()+" ("+this.getDate()+")";
    };
    
    Message.prototype.getHTMLText = function() {
       return this.getText().replace(/\n/g, "<br />");
    };
    
    Message.prototype.getDateText = function() {
        var monthNames = [ "Januari", "Februari", "Mars", "April", "Maj", "Juni",
            "Juli", "Augusti", "September", "Oktober", "November", "December" ];
            
            var month = monthNames[date.getMonth()];
            
        return "Inlägget skapades den " + date.getDate() + " " + 
		month + " " + date.getFullYear() + " " + " klockan " +
		date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    };
    
}