"use strict";

var main = {
    
    openImageWindow: document.getElementById("imagewindow"),
    count: 0,
    
    url: "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/",
    xhr: new XMLHttpRequest(),
    imageArray: [],
    thumbWidth: 0,
    thumbHeight: 0,
    
    
    init: function () {
        
        main.openImageWindow.addEventListener("click", function (e) {
            e.preventDefault();
            main.count += 1;
            
            if (main.count === 1) {
                imagewindow.createwindow();  
                main.getImages();
                
            }
            else {
                return;
            }
            
            
        });
        
    },
    
    getImages: function () {
        
        main.xhr.onreadystatechange = function(){
            
           if (main.xhr.readyState === 4) {
               if (main.xhr.status == 200 || main.xhr.status == 304) {
                   
                    main.imageArray = JSON.parse(main.xhr.responseText);
                    console.log(main.imageArray);
                    
                    for (var i = 0; i < main.imageArray.length; i++) {
                        if (main.imageArray[i].thumbWidth > main.thumbWidth) {
                            main.thumbWidth = main.imageArray[i].thumbWidth;
                        }
                        if (main.imageArray[i].thumbHeight > main.thumbHeight) {
                            main.thumbHeight = main.imageArray[i].thumbHeight;
                        }
                    }
                   
               }
               
                main.showImages();
                
                var wiewFooter = document.getElementById("wiewFooter");
                var footerDiv = document.getElementById("footerDiv");
                wiewFooter.removeChild(footerDiv);
           }
           
        
           
           
       };
       
        main.xhr.open("GET", main.url, true);
        main.xhr.send(null);
        

    },
    
    showImages: function () {
        console.log("height" + main.thumbHeight);
        console.log("Width" + main.thumbWidth);
        
        var wiewContent = document.getElementById("wiewContent");
        var desktopImage = document.getElementById("window");
        
        
         main.imageArray.forEach(function (theImage) {
            var image = document.createElement("img");
            image.src = theImage.thumbURL;
            
            var imageA = document.createElement("a");
            imageA.setAttribute("href", "#");
            imageA.classList.add("images");
            imageA.style.width = main.thumbWidth + "px";
            imageA.style.height = main.thumbHeight + "px";
            
            wiewContent.appendChild(imageA);
            imageA.appendChild(image);
            
            imageA.addEventListener("click", function (e) {
            e.preventDefault();
            desktopImage.style.background = "url(" + theImage.URL + ")";
            console.log("HEjhej");
            });
        });
        
    }
    
     
};

window.onload = main.init;

