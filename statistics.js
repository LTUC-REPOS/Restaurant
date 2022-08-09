
function GenerateID(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Food(foodName,foodType,foodPrice)
{
    this.foodID = null;
    this.foodName = foodName
    this.foodType = foodType;
    this.foodPrice = foodPrice;
    this.getID = function()
            {
                this.foodID = GenerateID(1000,9999);
            }
}
 

Food.prototype.ListFood = function()
{
    this.getID();

    let table = document.getElementById('foodTable');
    
    let tr = document.createElement('tr'); 
    let props = ['foodID' , 'foodName' , 'foodType' , 'foodPrice'];
    for (let i = 0; i < props.length; i++) {
        let prop = document.createElement('td');
        prop.className = 'td';         
        prop.textContent = this[ props[i] ];
       

        tr.appendChild(prop);
    } 

    table.appendChild(tr);
 

}

function GetFoodData()
{
    let foodData = localStorage.getItem('foodData');
    if(foodData == null)
        return;
    
    let foodArray = JSON.parse(foodData);

    for (const food of foodArray) {
        let foodObj = 
        new Food(food['foodName'] , food['foodType'] , food['foodPrice']);
        foodObj.ListFood();
        
    }
}
GetFoodData();