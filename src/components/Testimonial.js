import client1 from "../assets/img/jpg/clients/client-1.jpg";
import client2 from "../assets/img/jpg/clients/client-2.jpg";
import client3 from "../assets/img/jpg/clients/client-3.jpg";
import client4 from "../assets/img/jpg/clients/client-4.jpg";

export const Testimonial = (open) => {
	const template = `
	<section class="testimonial">
	<div class="container">
	<h2>Hear from some of our clients</h2>
	<div class="testimonial-card-container-1">
		<div class="testimonial-card">
			<p>
				I never believed I could get my 3.5 Million naira back until
				Procredita stepped in and even collected the interest from the
				debtor.
			</p>
			<div><img src="${client1}" alt="procredita testimony" /></div>
		</div>
		<div class="testimonial-card">
			<p>
				I never believed I could get my 3.5 Million naira back until
				Procredita stepped in and even collected the interest from the
				debtor.
			</p>
			<div><img src="${client2}" alt="procredita testimony" /></div>
		</div>
		
	</div>

	<div class="testimonial-card-container-2">
	<div class="testimonial-card">
	<p>
		I never believed I could get my 3.5 Million naira back until
		Procredita stepped in and even collected the interest from the
		debtor.
	</p>
	<div><img src="${client3}" alt="procredita testimony" /></div>
</div>
<div class="testimonial-card">
	<p>
		I never believed I could get my 3.5 Million naira back until
		Procredita stepped in and even collected the interest from the
		debtor.
	</p>
	<div><img src="${client4}" alt="procredita testimony" /></div>
</div>
	</div>
	</div>
</section>

    `;

	return template;
};
