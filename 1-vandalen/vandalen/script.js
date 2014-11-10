"use strict";

var makePerson = function(persArr){

   // var names = [];
    //var ages = [];
    
    var nameArr = persArr.map(function(name){
        
        return name.name;
        
    }).sort(function (a, b) {
        
        return a.localeCompare(b);
    }).join(", ");
    
    
    var ageArr = persArr.map(function(age) {
        
        return age.age;
    }).sort(function (a, b) {return a-b;});
    
    var minAge = Math.min.apply(Math, ageArr);
    var maxAge = Math.max.apply(Math, ageArr);
    
    var averageAge = ageArr.reduce(function (a, b) { return a+b;})
    averageAge = averageAge / ageArr.length;
    averageAge = Math.ceil(averageAge);
    
    var result = {minAge: minAge, maxAge: maxAge, averageAge: averageAge, names: nameArr};
    
    return result;

}

     var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];

     var result = makePerson(data);

     console.log(result)