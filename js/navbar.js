const burgerMenu =document.getElementById("burgerMenu");
const menu = document.getElementById("menu");

burgerMenu.addEventListener("click", function(){
    console.log(menu.className)
    if( menu.className =="hide-menu"){
        menu.className ="";
    }
    else{
        menu.className="hide-menu";
    }
})

