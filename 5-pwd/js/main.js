"use strict";

var main = {
    
    openImageWindow: document.getElementById("imagewindow"),
    count: 0,
    
    url: "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/",
    xhr: new XMLHttpRequest(),
    imageArray: [],
    
    
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
                   
               }
               
               
           }
           
        main.showImages();
           
           
       };
       
        main.xhr.open("GET", main.url, true);
        main.xhr.send(null);
        
//        var hej = document.getElementById("wiewFooter");
  //      var jeh = document.getElementById("footerDiv");
    //    hej.removeChild(jeh);
    },
    
    showImages: function () {

        
        var wiewContent = document.getElementById("wiewContent");
        
        for (var i = 0; i < main.imageArray.length; i++) {
            //console.log(main.imageArray[i].URL);
            
            var image = document.createElement("img");
            image.src = main.imageArray[i].thumbURL;
            
            wiewContent.appendChild(image);
        }
        
    }
     
};

window.onload = main.init;