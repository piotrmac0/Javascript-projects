const navItem = document.querySelectorAll(".nav_item");

function activeLink() {
    navItem.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}

navItem.forEach((item) =>
item.addEventListener('click',activeLink));