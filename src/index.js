import { Header } from "./components/Header.js";
import { About } from "./components/About.js";
import { Franchise } from "./components/Franchise.js";
import { Testimonial } from "./components/Testimonial.js";
import { Footer } from "./components/Footer.js";

import "./scss/main.scss";

const body = document.querySelector(".container");

const app = () => {
	body.innerHTML = `
		${Header()}
		${About()}
		${Franchise()}
		${Testimonial()}
		${Footer()}
    `;
};

app();

const mobileNav = document.querySelector(".mobile-nav");
console.log(mobileNav.classList);
const openNav = () => {
	if (mobileNav.classList.contains("openNav")) {
		mobileNav.classList.remove("openNav");
		document.querySelector(".hamburger").textContent = "menu";
	} else {
		mobileNav.classList.add("openNav");
		document.querySelector(".hamburger").textContent = "close";
	}
};
document.querySelector(".hamburger").onclick = openNav;

const allLinks = document.querySelectorAll(".links-nav li a");
allLinks.forEach((link) => {
	link.addEventListener("click", () => {
		mobileNav.classList.remove("openNav");
		document.querySelector(".hamburger").textContent = "menu";
	});
});
