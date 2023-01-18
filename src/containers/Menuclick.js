const Menuclick = () => {

    const menuDiv = document.getElementById("menu");
    const elementPmenu = document.querySelectorAll(".p-menu");

    if(menuDiv.classList.contains("menu-div")) {
        menuDiv.classList.remove("menu-div")
        for(let item = 0; item < elementPmenu.length; item++) {
            elementPmenu[item].style.display = "none";
        }
    } else {
        for(let item = 0; item < elementPmenu.length; item++) {
            elementPmenu[item].style.display = "block";
        }
        menuDiv.classList.add("menu-div");
    }
}

export default Menuclick;