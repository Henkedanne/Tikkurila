var burger = document.querySelector(".burger");
var navList = document.querySelector(".list-wrapper");
var navItems = document.querySelector(".list-wapper, ul");

function toggleNav() { 
	if(!navList.classList.contains("active")) {
		
		navList.classList.toggle("active");
	} else{
		navList.classList.remove("active");
	}
}

function closeNav() {
	navList.classList.remove("active");
	console.log("poop");
}


burger.addEventListener("click", toggleNav);
navItems.addEventListener("click", closeNav);
/*.addEventListener("scroll", function() {
	console.log("scrolling");
}); */
