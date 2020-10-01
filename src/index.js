import { Header } from "./components/Header.js";
import { About } from "./components/About.js";
import { Franchise } from "./components/Franchise.js";
import { CTA } from "./components/CTA.js";
import { Testimonial } from "./components/Testimonial.js";
import { Footer } from "./components/Footer.js";

import "./scss/main.scss";

const body = document.querySelector("body");

const app = () => {
	body.innerHTML = `
		${Header()}
		${About()}
		${Franchise()}
		${CTA()}
		${Testimonial()}
		${Footer()}
    `;
};

app();

const mobileNav = document.querySelector(".mobile-nav");
const hamburger = document.querySelector(".hamburger");
console.log(hamburger.classList);
const openNav = () => {
	if (mobileNav.classList.contains("openNav")) {
		mobileNav.classList.remove("openNav");
		hamburger.classList.remove("open");
		document.querySelector(".hamburger").textContent = "menu";
	} else {
		mobileNav.classList.add("openNav");
		hamburger.classList.add("open");
		document.querySelector(".hamburger").textContent = "close";
	}
};
document.querySelector(".hamburger").onclick = openNav;

const allLinks = document.querySelectorAll(".links-nav li a");
allLinks.forEach((link) => {
	link.addEventListener("click", () => {
		mobileNav.classList.remove("openNav");
		hamburger.classList.remove("open");
		document.querySelector(".hamburger").textContent = "menu";
	});
});
