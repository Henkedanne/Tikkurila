var burger = document.querySelector(".burger");
var navList = document.querySelector(".list-wrapper");
var navItems = document.querySelector(".list-wapper, ul");

function toggleClass(id, className) { 
	if(!id.classList.contains(className)) {
		
		id.classList.toggle(className);
	} else{
		id.classList.remove(className);
	}
}

function closeNav() {
	navList.classList.remove("active");
	console.log("poop");
}


burger.addEventListener("click", function() {
	toggleClass(navList, "active");
	toggleClass(burger, "open");
});

navItems.addEventListener("click", closeNav);
/*.addEventListener("scroll", function() {
	console.log("scrolling");
}); */
