import logo from "../img/svg/logo.svg";
import google from "../img/svg/brands/google.svg";
import verge from "../img/svg/brands/verge.svg";
import slack from "../img/svg/brands/slack.svg";
import boost from "../img/svg/to-the-moon.svg";

export const Header = (open) => {
	const template = `
    <div class="mobile-nav">
			<nav class="links-nav">
				<ul>
					<li><a href="#about">About</a></li>
					<li><a href="#packages">Growth Packages</a></li>
					<li><a href="#schedule">Schedule Strategy Call</a></li>
					<li><a href="#blog">Blog</a></li>
				</ul>
				<button class="nav-cta">Sign Up</button>
			</nav>
			<button class="hamburger">menu</button>
		</div>

		<header id="home">
			<div class="header">
				<nav class="nav">
					<img src="${logo}" class="brand-logo" />

					<ul>
						<li class="nav-list">
							<a href="#about" class="nav-link">About</a>
						</li>
						<li class="nav-list">
							<a href="#packages" class="nav-link"
								>Growth Packages</a
							>
						</li>
						<li class="nav-list">
							<a href="#schedule" class="nav-link"
								>Schedule Strategy Call</a
							>
						</li>
						<li class="nav-list">
							<a href="#blog" class="nav-link">Blog</a>
						</li>
					</ul>

					<button class="btn-primary">Sign Up</button>
				</nav>

				<div class="hero-bg">
					<div class="hero">
						<div class="hero-text">
							<h2>
								Grow with world-class Reddit marketing services
							</h2>
							<p>
								Achieve your marketing goals on Reddit. Go
								viral, improve your reputation & more
							</p>
							<button class="btn-primary">Get Started</button>

							<div class="brands">
								<img src="${verge}" alt="verge" />
								<img src="${slack}" alt="slack" />
								<img src="${google}" alt="google" />
							</div>
							<div class="summary-text">
								<span>Start for free</span>
								<span>Add users for $10/month</span>
								<span
									>Add Powerful Features for less than
									$10/month</span
								>
							</div>
						</div>
						<img
							src="${boost}"
							alt="reddit boost"
							class="hero-image"
						/>
					</div>
				</div>
				<svg
					id="bottom-curve"
					width="100%"
					height="100"
					viewBox="0 0 1331 206"
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio="none"
				>
					<path
						d="M0 0H1331L155.647 203.104C74.3446 217.153 0 154.554 0 72.0462V0Z"
					/>
				</svg>
			</div>
		</header>
    `;

	return template;
};
