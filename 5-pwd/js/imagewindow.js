"use strict";


var imagewindow = {
    
    createwindow: function () {
        var content = document.getElementById("window");
        
        var imageWiewer = document.createElement("div");
        imageWiewer.className = "imageWiewer";
        
        var wiewHeader = document.createElement("header");
        wiewHeader.className = "wiewHeader";
        
        var wiewContent = document.createElement("div");
        wiewContent.className = "wiewContent";
        
        var wiewFooter = document.createElement("footer");
        wiewFooter.className = "wiewFooter";
        
        content.appendChild(imageWiewer);
        imageWiewer.appendChild(wiewHeader);
        imageWiewer.appendChild(wiewContent);
        imageWiewer.appendChild(wiewFooter);
    }
};