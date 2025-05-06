const navItems = [
    { name: "Home", href: "#", className: "header-nav-link" },
    { name: "About", href: "#", className: "header-nav-link" },
    { name: "Services", href: "#", className: "header-nav-link" },
    { name: "Approach", href: "#", className: "header-nav-link" },
    { name: "FAQ", href: "#", className: "header-nav-link" },
];

const navItemsToPaste = navItems.map(item => {
    return `
    <li class="header-nav-item">
    <a href="${item.href}" class="${item.className}">${item.name}</a>
    </li>
    `;
}).join("");

const navList = document.querySelector(".header-nav-list");

navList.insertAdjacentHTML("afterbegin", navItemsToPaste);