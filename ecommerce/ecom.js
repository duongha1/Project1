//function renders products
function render(){
    for(var i=0; i<products.length; i++){
        let productName = document.createTextNode(products[i].name);
        let productType = document.createTextNode(products[i].category);
        let nameInfo = document.createElement('p');
        let typeInfo = document.createElement('p');
        nameInfo.appendChild(productName);
        typeInfo.appendChild(productType);
        div1[i].appendChild(nameInfo);
        div1[i].appendChild(typeInfo);
    }
}

function filter1(){
    let checkBox = document.getElementsByClassName('checkBox'); //get input element
    let category = []; //contain texts removed space
    for(var i=0; i<checkBox.length; i++){
        if(checkBox[i].checked == true){ //check if input is checked
            let textLabel = checkBox[i].nextElementSibling.innerText; //get text in label
            let categoryName = textLabel.split(" ").join(""); //remove space in text
            category.push(categoryName); //push in category array
        }
    }
    // console.log(category);
    filter2(category); 
}
function filter2(category){
    if(category.length > 0){ //check if array exists value
        for(var i = 0; i<div1.length; i++){ //change all div to display none
            div1[i].style.display = 'none';
        }

        
        for(var i = 0; i<div1.length; i++){
            for(var j = 0; j<category.length;j++){
                //check if div in position i equals with value in position j of the array
                if(div1[i].children[2].innerText == category[j]){
                    div1[i].style.display = 'block';
                }
            }
        }
    }else{
        //if there is no input checked, display all div
        for(var i = 0; i<div1.length; i++){
            div1[i].style.display = 'block';
        }
    }
}

let sec1Right = document.getElementsByClassName('right');
let div1 = sec1Right[0].children; //collection of div in class .sec1Right
let products = [
    {
        image: 'l5.jpg',
        name: 'Mrinstore Clothing',
        price: 500,
        category: 'T-shirt',
    },
    {
        image: 'l5.jpg',
        name: 'Mrinstore Clothing',
        price: 500,
        category: 'T-shirt',
    },
    {
        image: 'l5.jpg',
        name: 'Mrinstore Clothing',
        price: 500,
        category: 'Shirt',
    },
    {
        image: 'l5.jpg',
        name: 'Mrinstore Clothing',
        price: 500,
        category: 'Shirt',
    },
    {
        image: 'l5.jpg',
        name: 'Mrinstore Clothing',
        price: 500,
        category: 'Pant',
    },
    {
        image: 'l5.jpg',
        name: 'Mrinstore Clothing',
        price: 500,
        category: 'Pant',
    }
]
render();
