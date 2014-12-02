"use strict";

var memoryapp = {
   init: function(){
      var mem1 = new memory(3,4);
     // var mem2 = new memory(4,4,"game2");
      //mem1.createMemoryBoard();
      //mem2.createMemoryBoard();
   }
};

window.onload = memoryapp.init;