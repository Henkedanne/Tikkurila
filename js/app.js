var burger = document.querySelector(".burger");
var navList = document.querySelector(".list-wrapper");


function toggleNav() { 
	if(!navList.classList.contains("active")) {
		
		navList.classList.toggle("active");
	} else{
		navList.classList.remove("active");
	}
}


burger.addEventListener("click", toggleNav);