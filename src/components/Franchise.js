import icon from "../img/svg/logo-icon.svg";
import franchise from "../img/png/franchise.png";

export const Franchise = (open) => {
	const template = `
    <section class="own-franchise">
	<img src="${icon}" class="brand-icon" />
	<h2>Own a Procredita Regional Franchise</h2>
	<div class="franchise">
        <div class="image-container">
        <img src="${franchise}"/>
        </div>

		<div class="franchise-copy">
			<p>
				We are inviting interested individuals and entities across
				Nigeria to help achieve our objective and earn while doing so by
				owning a Bawopada franchise. This allows you to collect debt on
				our behalf in your region and earn a 25% commission on debt
				recovered. We provide the training and information that allows
				you to effectively recover debt from debtors in your area. <br/><br/> The
				Bawopada Regional Franchise (BRF) Licence varies from N750,000
				to N2,000,000 depending on your location, with Lagos State being
				the highest based off volume of debt to be recovered per region. <br/><br/>
				The average "debt to be recovered" (DBR) a BRF licence operator
				is entitled per year is N150M with 25% of successfully recovered
				debt as commission for the operator. <br/><br/> Our license are available
				for all parts of Nigeria except Borno, Zamfara and Bayelsa
				State.
			</p>
			<h4>Become a Debt Collection Manager</h4>
			<button class="btn-primary">Signup</button>
		</div>
	</div>
</section>
    `;

	return template;
};
