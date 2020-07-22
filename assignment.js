
// feetToMile
function feetToMile(feet){
    var mile = feet * 0.0001894;
    return mile;
}
var result = feetToMile(5700);
console.log(result);




// woodCalculator
function woodCalculator(chair, table, bed){
    var chairWood = chair * 3;
    var tableWood = table * 7;
    var bedWood =  bed * 13;
    var totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}
var result2 = woodCalculator(5, 3, 2);
console.log(result2); 





// tinyFriend
function tinyFriend(name){
    var tiny = name[0];
    for(var i = 0; i < name.length; i++){
        var tinyName = name[i];
        if(tinyName > tiny){
            tiny = tinyName;
        }
    }
    return tiny;
}
var smallName = tinyFriend(['toni', 'kishor', 'joyotri', 'rakib', 'soikot', 'sawon']);
console.log(smallName);