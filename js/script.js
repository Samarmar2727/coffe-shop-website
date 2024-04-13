
let searchForm = document.querySelector('.search-form');
 
document.querySelector("#search-btn").onclick = () =>{
    //  Add class active to appear search form
    searchForm.classList.toggle("active");
    
  //  remove class active from other buttons
  navbar.classList.remove("active");
  cartItem.classList.remove("active");
}


let navbar = document.querySelector('.navbar');
 
document.querySelector("#menu-btn").onclick = () =>{
//  Add class active to appear navigation bar 
    navbar.classList.toggle("active");

   //  remove class active from other buttons
    searchForm.classList.remove("active");
    cartItem.classList.remove("active");
}




let cartItem = document.querySelector('.cart-items-container');
 
document.querySelector("#shopping-btn").onclick = () =>{
    //  Add class active to appear shopping list
    cartItem.classList.toggle("active");
    //  remove class active from other buttons
    searchForm.classList.remove("active");
    navbar.classList.remove("active");
}

//remove class active when on scrool on window from all buttons
window.onscroll= () =>{
    searchForm.classList.remove("active");
    navbar.classList.remove("active");
    cartItem.classList.remove("active");
}

