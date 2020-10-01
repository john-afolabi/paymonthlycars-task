import logo from "../img/png/logo.png";
import hero from "../img/svg/hero.svg";

export const Header = (open) => {
	const template = `
    <div class="mobile-nav">
	<nav class="links-nav">
		<ul>
			<li><a href="#home">Home</a></li>
			<li><a href="#about">About Us</a></li>
			<li><a href="#what-we-do">What We Do</a></li>
			<li><button class="btn-secondary">Hire Us</button></li>
		</ul>
		
	</nav>
	<button class="hamburger">MENU</button>
</div>

<header id="home" class="container">
	<div class="header">
		<nav class="nav">
			<img src="${logo}" class="brand-logo" />

			<ul>
				<li class="nav-list">
					<a href="#" class="nav-link">Home</a>
				</li>
				<li class="nav-list">
					<a href="#about" class="nav-link" >About Us</a>
				</li>
				<li class="nav-list">
					<a href="#what-we-do" class="nav-link">What We Do</a>
				</li>

				<li class="nav-list"><button class="btn-main">Hire Us</button></li>
			</ul>

			
		</nav>

		
			<div class="hero">
				<div class="hero-text">
					<h2>We provide a comprehensive debt collection service</h2>
					<p>
						Our professionals have a combined 85 years in debt
						recovery efforts that have seen the recovery of more
						than N19Billion in debt from very unwilling debtors. We
						use the most advanced techniques to trace debtors and
						recover money owed. We also offer an alternative method
						for loan recoveries by allowing debtors provide value
						worth the amount they are unable to pay.
					</p>
					<button class="btn-primary">Hire Us</button
					>
					<a class="link-hero">
					Watch the Video</a>
				</div>
				<div><img src="${hero}" alt="debt collection" class="hero-image" /></div>
			</div>
	
	</div>
</header>

    `;

	return template;
};
