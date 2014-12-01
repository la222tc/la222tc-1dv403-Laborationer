"use strict";

function memory(rows, cols) {
        
        //var that = this;
        var firstGuess;
        var secondGuess;
        var newMem = [];
        var maxNumberOfClicks = 2;
        var flippedBrick = 0;
        var numberOfBricksFlipped = 0;
        
        createMemoryBoard();
        
        function createMemoryBoard() {
            newMem = RandomGenerator.getPictureArray(rows, cols);
            
            createTable(rows, cols);
            
        }
          //  console.log(newMem);
        
        
        
        function createTable(rows, cols) {
            var div = document.getElementById("content");
            var table = document.createElement("table");
            var number = 0;
            
            div.appendChild(table);
            
            for (var i = 0; i < rows; i++) {
                var row = document.createElement("tr");
                table.appendChild(row);
                
                for (var j = 0; j < cols; j++) {
                    var col = document.createElement("td");
                     
                    var img = document.createElement("img");
                    img.setAttribute("src", "pics/0.png");
                    
                    
                    var a = document.createElement("a");
                    a.setAttribute("href", "#");
                    
                    row.appendChild(col);
                    col.appendChild(a);
                    a.appendChild(img);
                    img.className = newMem[number];
                    number++;
                    
                    a.onclick = function (e) {
                        
                        var target = e.target;
                        turnBrick(target);
                    };
                   
                }
            }
            
        }
        
        function turnBrick(target) {
            
            for (var i = 0; i < newMem.length; i++) {
           
            
            if(target.className == newMem[i]){
                
                target.src = "pics/" + newMem[i] + ".png";
            }
            
            }
            
           flippedBrick += 1;
        
        if (flippedBrick === 1) {
            firstGuess = target;
            console.log(firstGuess);
        }

        if (flippedBrick == 2) {
            secondGuess = target;
            console.log(secondGuess);
        }

        if (flippedBrick === 2 && firstGuess.className === secondGuess.className) {
            flippedBrick = 0;
            
        } else if (flippedBrick === 2 && firstGuess.className != secondGuess.className) {
            
            window.setTimeout(function () {
                firstGuess.src = "pics/0.png";
                secondGuess.src = "pics/0.png";
                flippedBrick = 0;
            }, 800);
        }

    }
}




