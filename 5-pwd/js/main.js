"use strict";

var main = {
    
    openImageWindow: document.getElementById("imagewindow"),
    count: 0,
    
    init: function () {
        
        main.openImageWindow.addEventListener("click", function (e) {
            e.preventDefault();
            main.count += 1;
            
            if (main.count === 1) {
                imagewindow.createwindow();   
            }
            else {
                return;
            }
            
            
        });
        
    } 
     
};

window.onload = main.init;