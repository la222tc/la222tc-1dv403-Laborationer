"use strict";

var makePerson = function(persArr){

   
   //Samlar namn och sorterar dom (tvungen att använda localeCompare för svenska tecken)
    var nameArr = persArr.map(function(name){
        
        return name.name;
        
    }).sort(function (a, b) {
        
        return a.localeCompare(b);
    }).join(", ");
    
    // Samlar ålder och sorterar
    var ageArr = persArr.map(function(age) {
        
        return age.age;
    }).sort(function (a, b) {return a-b;});
    
    // Tilldelar vaiabeln minAge det minsta värdet i ageArr 
    // Tilldelar vaiabeln maxAge det största värdet i ageArr 
    var minAge = Math.min.apply(Math, ageArr);
    var maxAge = Math.max.apply(Math, ageArr);
    
    // Plussar ihop alla talen i ageArr med hjälp av .reduce och sedan 
    // dividerar det med antal nummer som finns i ageArr och till sist avrundar uppåt med .ceil
    var averageAge = ageArr.reduce(function (a, b) { return a+b;});
    averageAge = averageAge / ageArr.length;
    averageAge = Math.ceil(averageAge);
    
    // Skapar ett objekt med de olika variabler innuti.
    var result = {minAge: minAge, maxAge: maxAge, averageAge: averageAge, names: nameArr};
    
    // Returnerar resultatet
    return result;

};

     var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];

     var result = makePerson(data);

     console.log(result);