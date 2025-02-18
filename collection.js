var sidenav = document.querySelector(".side-navbar")

function showNavbar() {
    sidenav.style.left = "0"
}

function closeNavbar() {
    sidenav.style.left = "-70%"
}

var productContainer = document.getElementById("products"); // Corrected the id name
var search = document.getElementById("search");
var productlist = document.querySelectorAll(".products-box"); // Changed selector to target product boxes

search.addEventListener("keyup", function (e) {
    var searchValue = e.target.value.toLowerCase();
    for (var count = 0; count < productlist.length; count++) {
        var product = productlist[count].querySelector("p").textContent.toLowerCase(); // Convert to lower case for comparison
        if (product.indexOf(searchValue) < 0) {
            productlist[count].style.display = "none";
        } else {
            productlist[count].style.display = "block";
        }
    }
});
