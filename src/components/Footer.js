import logo from "../img/svg/logo-white.svg";
import us from "../img/svg/countries/us.svg";
import russia from "../img/svg/countries/russia.svg";
import uzbekistan from "../img/svg/countries/uzbekistan.svg";
import uk from "../img/svg/countries/uk.svg";
import serbia from "../img/svg/countries/serbia.svg";

export const Footer = (open) => {
	const template = `
	<footer>
			<div class="container">
				<div class="schedule" id="schedule">
					<div>
						<h2>Grow across Reddit 🚀</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Fugit amet dolores laboriosam impedit id
							accusamus itaque natus nemo ex.
						</p>
					</div>
					<button class="btn-primary">
						Schedule A Service Overview
					</button>
				</div>

				<div class="main-footer">
					<div>
						<img src="${logo}" alt="soar logo"/>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Sequi.
						</p>
						<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20" r="20" fill="#49475D"/>
<path d="M30.0162 13.9467C29.2721 14.2721 28.4794 14.4874 27.653 14.5915C28.5036 14.085 29.1532 13.2882 29.4593 12.3273C28.6663 12.7989 27.7909 13.1317 26.8582 13.3168C26.1066 12.5147 25.0347 12.0173 23.8647 12.0159C21.5948 12.0133 19.7652 13.8537 19.7626 16.1124C19.7622 16.4374 19.7894 16.7499 19.8565 17.0475C16.448 16.8773 13.4337 15.2401 11.4103 12.7491C11.0558 13.3624 10.8475 14.0647 10.8467 14.8209C10.845 16.2409 11.5748 17.5005 12.664 18.2305C12.0053 18.2172 11.3592 18.0252 10.8121 17.7233C10.8121 17.7358 10.8121 17.7521 10.812 17.7683C10.8097 19.7608 12.2291 21.4174 14.0924 21.8008C13.7585 21.8917 13.3947 21.935 13.0172 21.9346C12.7547 21.9343 12.4897 21.919 12.2411 21.8637C12.7704 23.488 14.2766 24.6835 16.069 24.7243C14.6727 25.8139 12.9008 26.4694 10.9833 26.4672C10.647 26.4668 10.3246 26.4514 10.0021 26.4098C11.817 27.5831 13.9687 28.2544 16.2899 28.257C23.8348 28.2657 27.967 22.0205 27.9732 16.6031C27.9734 16.4218 27.9673 16.2468 27.9588 16.0731C28.7732 15.4965 29.4578 14.7761 30.0162 13.9467Z" fill="white"/>
</svg>
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20" r="20" fill="#49475D"/>
<path d="M27.5 10H12.5C11.1212 10 10 11.1212 10 12.5V27.5C10 28.8788 11.1212 30 12.5 30H20V23.125H17.5V20H20V17.5C20 15.4288 21.6788 13.75 23.75 13.75H26.25V16.875H25C24.31 16.875 23.75 16.81 23.75 17.5V20H26.875L25.625 23.125H23.75V30H27.5C28.8788 30 30 28.8788 30 27.5V12.5C30 11.1212 28.8788 10 27.5 10Z" fill="white"/>
</svg>
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20" r="20" fill="#49475D"/>
<path d="M27.0703 10H12.9297C11.3144 10 10 11.3144 10 12.9297V27.0703C10 28.6856 11.3144 30 12.9297 30H27.0703C28.6856 30 30 28.6856 30 27.0703V12.9297C30 11.3144 28.6856 10 27.0703 10ZM17.0703 25.8594H14.7266V17.6562H17.0703V25.8594ZM17.0703 16.4844H14.7266V14.1406H17.0703V16.4844ZM25.2734 25.8594H22.9297V21.1719C22.9297 20.5258 22.4039 20 21.7578 20C21.1118 20 20.5859 20.5258 20.5859 21.1719V25.8594H18.2422V17.6562H20.5859V18.098C21.2 17.9071 21.5988 17.6562 22.3438 17.6562C23.9333 17.6579 25.2734 19.0839 25.2734 20.769V25.8594Z" fill="white"/>
</svg>


					</div>
					<div>
						<h4>Partners</h4>
						<p>Service Updates</p>
						<p>Become a Publisher</p>
						<p>Become a Tasker</p>
					</div>
					<div>
						<h4>Popular Services</h4>
						<p>Content Marketing Service</p>
						<p>Guest Posting Service</p>
						<p>Reddit Marketing Service</p>
						<p>Quora Marketing Service</p>
						<p>Buy Reddit Upvotes</p>
					</div>
					<div>
						<h4>Popular Services</h4>
						<p>
							Traffic Hacking Reddit - A Case Study on How We
							Generated 18,335 Visits in 1 Day
						</p>
						<p>The Best Free Tools for Reddit User Analysis</p>
					</div>
				</div>
				<div class="footer-team">
				<p>Made by a team from </p> <img src="${us}"/><img src="${russia}"/><img src="${uzbekistan}"/><img src="${uk}"/><img src="${serbia}"/>
				</div>
			</div>
		</footer>
    `;

	return template;
};
