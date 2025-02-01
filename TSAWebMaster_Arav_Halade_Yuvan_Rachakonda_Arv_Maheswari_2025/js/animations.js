// Scroll reveal animation
function reveal() {
    const containers = document.querySelectorAll('.content-container');
    const windowHeight = window.innerHeight;
    const elementVisible = 150;

    containers.forEach((container) => {
        const elementTop = container.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            container.style.opacity = "1";
            container.style.transform = "translateY(0)";
        }
    });
}

window.addEventListener("scroll", reveal);
// Trigger on initial load
window.addEventListener("load", reveal);


  //===Popup Window===//
submitbutton.addEventListener("click", function () {
	myPopup.classList.add("show");
});
closePopup.addEventListener("click", function () {
	myPopup.classList.remove("show");
});
window.addEventListener("click", function (event) {
	if (event.target == myPopup) {
		myPopup.classList.remove("show");
	}
});

