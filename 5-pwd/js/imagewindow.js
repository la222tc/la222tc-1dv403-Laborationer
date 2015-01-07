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
        
        var headerImage = document.createElement("img");
        headerImage.className = "headerImage";
        headerImage.src = "img/iconen.png";
        headerImage.alt = "Header Image";
        
        var headerText = document.createElement("p");
        headerText.className = "headerText";
        headerText.innerHTML = "Image Viewer";
        
        var headerCloseImage = document.createElement("img");
        headerCloseImage.className = "headerCloseImage";
        headerCloseImage.src = "img/closeimage.png";
        headerCloseImage.alt = "Close button";
        
        var headerCloseTag = document.createElement("a");
        headerCloseTag.setAttribute("href", "#");
        
        content.appendChild(imageWiewer);
        imageWiewer.appendChild(wiewHeader);
        imageWiewer.appendChild(wiewContent);
        imageWiewer.appendChild(wiewFooter);
        wiewHeader.appendChild(headerImage);
        wiewHeader.appendChild(headerText);
        wiewHeader.appendChild(headerCloseTag);
        headerCloseTag.appendChild(headerCloseImage);
    }
};