import logo from "../img/png/logo-icon.png";
import facebook from "../img/svg/social/facebook.svg";
import instagram from "../img/svg/social/instagram.svg";
import linkedin from "../img/svg/social/linkedin.svg";
import twitter from "../img/svg/social/twitter.svg";
import location from "../img/svg/location.svg";
import phone from "../img/svg/phone.svg";
import email from "../img/svg/email.svg";

export const Footer = (open) => {
	const template = `
	<footer>
	<div class="procredita-details">
		<div class="column-1">
			<img src="${logo}" alt="procredita" />
			<div class="social-icons">
				<img src="${instagram}" alt="procredita instagram" /><img
					src="${facebook}"
					alt="procredita facebook"
				/><img src="${linkedin}" alt="procredita linkedin" /><img
					src="${twitter}"
					alt="procredita twitter"
				/>
			</div>
		</div>

		<div class="column-2">
			<h3>Company</h3>
			<a href="#">Why procredita</a>
			<a href="#">FAQ</a>
			<a href="#">Loan terms</a>
			<a href="#">Apply Now</a>
			<a href="#">Contact us</a>
			<a href="#">Login</a>
		</div>

		<div class="column-3">
			<h3>Legal</h3>
			<a href="#">Cookies Policy</a>
			<a href="#">Privacy Policy</a>
		</div>

		<div class="column-4">
			<div class="contact-card">
				<div>
					<img src="${location}" alt="procredita address" />
					<p>
						1686 Oladele Olashore Street, Off Sanusi Fafunwa Street,
						Victoria Island, Lagos.
					</p>
				</div>
				<br />
				<div>
					<img src="${phone}" alt="procredita phone" />
					<p>+ (234) 814 7630 499</p>
				</div>
				<br />
				<div>
					<img src="${email}" alt="procredita email" />
					<p>info@procredita.com</p>
				</div>
			</div>
		</div>
	</div>

	<p>
		<span>This website uses cookies</span><br />
		We use cookies to personalise content and ads, to provide social media
		features and to analyse our traffic. We also share information about
		your use of our site with our social media, advertising and analytics
		partners who may combine it with other information that you’ve provided
		to them or that they’ve collected from your use of their services. Check
		<span> Privacy Policy.</span>
	</p>

	<p class="copyright-text">© Procredita 2020, all rights reserved</p>
</footer>

    `;

	return template;
};
