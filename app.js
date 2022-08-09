
function GenerateID(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let form = document.getElementById("form")
form.addEventListener("submit",CreateData)

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
let props = ['foodID' , 'foodName' , 'foodType' , 'foodPrice'];

Food.prototype.ListFood = function()
{
    this.getID();
    SaveData(this);

}
 
function CreateData(e)
{

    e.preventDefault();

    let foodName = document.getElementById('foodName');
    let foodType = document.getElementById('selector');
    let price = document.getElementById('price');
    if(  foodName.value == "" || foodType.value == "" || price.value == "" )
    {
        alert("Please Fill All Data");
        return;
    }    

    let food = new Food(
        foodName.value,
        foodType.options[foodType.selectedIndex].text,
   '$ ' + price.value);

    food.ListFood(); 
    alert("Your " + foodName.value + " Has Been Added To the Table")

}

function SaveData(foodObj)
{
    let data = localStorage.getItem('foodData');
    if (data != null)
    {
        let foodArray = JSON.parse(data);
        console.log(foodArray);
        foodArray.push(foodObj);
        localStorage.setItem('foodData' , JSON.stringify(foodArray));        
    }
    else
    {
        let foodArray = [foodObj];
        localStorage.setItem('foodData' , JSON.stringify(foodArray));
    }
}



