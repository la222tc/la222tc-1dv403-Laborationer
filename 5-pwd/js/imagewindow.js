"use strict";


var imagewindow = {
    
    theWindow: document.getElementById("window"),
    
    createwindow: function () {
        var content = document.getElementById("window");
        
        var imageWiewer = document.createElement("div");
        imageWiewer.id = "imageWiewer";
        
        var wiewHeader = document.createElement("header");
        wiewHeader.className = "wiewHeader";
        
        var wiewContent = document.createElement("div");
        wiewContent.id = "wiewContent";
        
        var wiewFooter = document.createElement("footer");
        wiewFooter.id = "wiewFooter";
        
        var headerImage = document.createElement("img");
        headerImage.className = "headerImage";
        headerImage.src = "img/iconen.png";
        headerImage.alt = "Header Image";
        
        var headerText = document.createElement("p");
        headerText.className = "headerText";
        headerText.innerHTML = "Image Viewer";
        
        var headerCloseImage = document.createElement("img");
        headerCloseImage.id = "headerCloseImage";
        headerCloseImage.src = "img/closeimage.png";
        headerCloseImage.alt = "Close button";
        
        var headerCloseTag = document.createElement("a");
        headerCloseTag.id = "closeWindow";
        headerCloseTag.setAttribute("href", "#");
        
        var footerDiv = document.createElement("div");
        footerDiv.id = "footerDiv";
        
        var footerImage = document.createElement("img");
        footerImage.id = "footerImage";
        footerImage.src = "img/ajax-loader.gif";
        
        var footerText = document.createElement("p");
        footerText.id = "footerText";
        footerText.innerHTML = "...Loading";
        
        content.appendChild(imageWiewer);
        imageWiewer.appendChild(wiewHeader);
        imageWiewer.appendChild(wiewContent);
        imageWiewer.appendChild(wiewFooter);
        wiewHeader.appendChild(headerImage);
        wiewHeader.appendChild(headerText);
        wiewHeader.appendChild(headerCloseTag);
        headerCloseTag.appendChild(headerCloseImage);
        wiewFooter.appendChild(footerDiv);
        footerDiv.appendChild(footerImage);
        footerDiv.appendChild(footerText);
        
        
        headerCloseTag.onclick = function(){
            console.log("testing");
            imagewindow.theWindow.removeChild(imageWiewer);
            
            main.count = 0;
        };
    }
};