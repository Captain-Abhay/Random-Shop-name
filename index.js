/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub



*/
function adjName(Adj){
    var Random = Math.random();
    if(Random <= .3){
        return Adj.slice(0,5);
    }
    else if(Random <= .6){
        return Adj.slice(6,13);
    }
    else{
        return Adj.slice(14);
    }
}
function shopName(Shop){
    var Random = Math.random();
    if(Random <= .3){
        return Shop.slice(0,6);
    }
    else if(Random <= .6){
        return Shop.slice(7,12);
    }
    else{
        return Shop.slice(13);
    }
}
function wordName(Word){
    var Random = Math.random();
    if(Random <= .3){
        return Word.slice(0,4);
    }
    else if(Random <= .6){
        return Word.slice(5, 12);
    }
    else{
        return Word.slice(13);
    }
}



let Adj ="Crazy Amazing Fire";
let Shop = "Engine Foods Garments";
let Word = "Bros Limited Hub";

console.log("The name of your shop is: ", adjName(Adj)," ", shopName(Shop)," ", wordName(Word));