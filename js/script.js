// THIS IS MY SHOPPING LIST
var groceryList = [
    //OBJECT MODEL

    {
        name: " Blade of Woe: ", // THIS IS THE ITEM WITHIN THE ARRAY
        price: 250.
        , weight: 1
    , }


    , {
        name: " Cultist Robes: "
        , price: 795.
        , weight: 5
    , }



    , {
        name: "Daedric Sword of the Vampire: "
        , price: 499.
        , weight: 12
    , }

    , {
        name: "  Elven Mace: "
        , price: 299.
        , weight: 6
    , }

    , {
        name: " Dwarven Armor: "
        , price: 856.
        , weight: 2.5
    }

    , {
        name: " Ebony Sword: "
        , price: 536.
        , weight: 24
    }
//
//    , {
//        name: " Ebony Boots: "
//        , price: 236.
//        , weight: 5
//    }
//
//    , {
//        name: " Daedric Boots: "
//        , price: 136.
//        , weight: 30
//    }


];
// THIS FOR LOOP CYCLES THROUGH THE GROCERY LIST 
for (var i = 0; i < groceryList.length; i++) {
    // THIS FOR LOOP CYCLES THROUGH groceryList GRABBING THE LENGTH AND WRITING THE TOTAL
    var newElement = document.createElement("div"); // creates new element 
    var box = document.getElementById('box'); //ALWAYS MAKE SURE VARIABLE IS ABOVE WHAT YOU ARE DECLARING. 
    //THIS SECTION CREATES A INNERHTML WHICH PRINTS THE PRICE NAME AND GROCERY LIST TO THE PAGE. THIS ALSO PRINTS GOLD TO THE PAGE.
    newElement.innerHTML = "<div>" + groceryList[i].name + groceryList[i].price.toFixed(2) + " <b> " + " gold " + "</b>" + " Weight: " + groceryList[i].weight.toFixed(2) + " lbs" + "</div>";
    box.appendChild(newElement);
}
groceryList.totalAmount = function () {
    var total = 0; 
    var totalWeight = 0; 
    // THIS IS A SET VARIABLE FOR THE TOTAL- TOTAL START AT ZERO
    for (var i = 0; i < groceryList.length; i++) {
        total = total + groceryList[i].price;
        totalWeight = totalWeight + groceryList[i].weight;
    }
    return total.toFixed(2);
    return totalWeight.toFixed(2);
};

var newElement = document.createElement("ul");
newElement.innerHTML = " Total " + groceryList.totalAmount() + " <b> " + " gold" + " </b>";
box.appendChild(newElement);




//CREATES A VARIABLE CALLED GOLD. THIS VARIABLE WILL HOLD MY TOTAL AMOUNT OF GOLD. THIS AMOUNT OF GOLD WILL SUBTRACT WHEN I BUY ITEM.
//var gold;
//var totalGold = 50000;
//
//function totalCount() {
//    for (var i = 0; i < gold.length; i++) {
//        totalGold += gold.toFixed(2);
//    }
//}


//THIS FUNCTION WILL ADD ITEM TO LIST
//var newItem;
//
//function buyItem() {
//    // THIS FOR LOOP CYCLES THROUGH groceryList GRABBING THE LENGTH AND WRITING THE TOTAL
//    for (var i = 0; i < groceryList.length; i++) {
//        var box = document.getElementById('box');
//        var itemList = document.getElementById("item-list");
//        //THIS SECTION CREATES A INNERHTML WHICH PRINTS THE PRICE NAME AND GROCERY LIST TO THE PAGE. THIS ALSO PRINTS GOLD TO THE PAGE.
//        newElement.innerHTML = "<div>" + groceryList[i].name + groceryList[i].price.toFixed(2) + " <b> " + " gold " + "</b>" + " Weight: " + groceryList[i].weight.toFixed(2) + " lbs" + "</div>";
//    }
//};


function buyItem() {
    // THIS FOR LOOP CYCLES THROUGH groceryList GRABBING THE LENGTH AND WRITING THE TOTAL
    for (var i = 0; i < groceryList.length; i++) {
        var box = document.getElementById('box');
        var itemList = document.getElementById("item-list");
        //THIS SECTION CREATES A INNERHTML WHICH PRINTS THE PRICE NAME AND GROCERY LIST TO THE PAGE. THIS ALSO PRINTS GOLD TO THE PAGE.
        
        if( buyItem === data-name){
        newElement.innerHTML = "<div>" + groceryList[i].name + groceryList[i].price.toFixed(2) + " <b> " + " gold " + "</b>" + " Weight: " + groceryList[i].weight.toFixed(2) + " lbs" + "</div>";
    };
        }
};


//function myFunction() {
//    var x = document.getElementById("item-container");
//    var option = document.createElement("newItem");
//    option.text = "Sword of destiny";
//    x.add(newItem);
//}