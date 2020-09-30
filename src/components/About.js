import icon from "../img/svg/logo-icon.svg";
import image from "../img/png/male-model.png";
import success from "../img/svg/success.svg";
import debt from "../img/svg/buy-debt.svg";
import tech from "../img/svg/tech.svg";

export const About = (open) => {
	const template = `
    <section class="why-procredita" id="about">
		<div class="container">
		<img src="${icon}" class="brand-icon" />
		<h2>Why Procredita</h2>
		<div class="part-1">
			<p>
				Dealing with debtors can be very stressful for clients, not to
				mention the time it can take to recover the debt.<br /> At Procredita,
				we help to take the stress away from business owners and allow
				them to refocus their attention back on what they do best,
				growing their business. <br /><br />Procredita, offers a range of
				different debt collection services including our “value for
				cash” service. This means that if debtors are truly unable to
				pay back, they can provide value for the monies owed, by working
				for it. <br /><br />We work with businesses of all types and sizes,
				from start-ups through to large corporate companies who operate
				in a multitude of different industries. Our specialist team are
				able to adapt to the needs of each client and are skilled in the
				art of negotiation. We pride ourselves on our professionalism
				and how we handle our cases. Where possible, we will always
				attempt to resolve cases through negotiation, however, should
				you need to pursue the legal option, we can help.
			</p>
			<div><img src="${image}" class="part-1-image" /></div>
		</div>

		<div class="part-2">
			<div class="points-container">
                <div> 
                <img src="${success}"/>
					<p>
						We have a high success rate, envied by many of our
						competitors. In fact we are proud to act for a number of
						other debt collection agencies as the final step when
						they failed to collect themselves.
					</p>
				</div>
				<div>
                <img src="${tech}"/>
					<p>
						Our modern computer technology has direct access to
						up-to-date credit information systems, which enables us
						to investigate the profile of your debtors more
						thoroughly, thus ensuring the best course of debt
						collection action is taken for each and every account.
					</p>
				</div>
				<div>
                <img src="${debt}"/>
					<p>
						We buy your debt, and incur the full cost of collecting.
						This is how we stand out from the rest.
					</p>
				</div>
			</div>

			<button class="btn-primary">Hire Us</button>
		</div></div>
</section>

    `;

	return template;
};
