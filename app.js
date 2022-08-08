
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
let props = ['foodID' , 'foodName' , 'foodType' , 'foodPrice'];

Food.prototype.ListFood = function()
{
    this.getID();

    let table = document.getElementById('foodTable');
    
    let tr = document.createElement('tr'); 
 
    for (let i = 0; i < props.length; i++) {
        let prop = document.createElement('td');
        prop.className = 'td';         
        prop.textContent = this[ props[i] ];
      //  prop.textContent = 123123;

        tr.appendChild(prop);
    } 

    table.appendChild(tr);
 

}

 
 
let form = document.getElementById("form")
form.addEventListener("submit",CreateData)
 

function CreateData(e)
{

    e.preventDefault();

    let foodName = document.getElementById('foodName');
    let foodType = document.getElementById('selector');
    let price = document.getElementById('price');
    

    let food = new Food(
        foodName.value,
        foodType.options[foodType.selectedIndex].text,
   '$ ' + price.value);

    food.ListFood();

    window.scrollTo(
        {
            behavior: 'smooth',
            top : 0
        }
    );

}

