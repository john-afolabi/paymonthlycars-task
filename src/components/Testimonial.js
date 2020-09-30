import model from "../img/png/male-model.png";

export const Testimonial = (open) => {
	const template = `
    <section class="testimonial">
			<div class="testimonial-content">
				<img src="${model}" />
                <div>
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="50" height="50" rx="5" fill="#F4E4E4"/>
<path d="M13 25.5V35.3572H22.8572V25.5H16.2857C16.2857 21.8766 19.2337 18.9286 22.8572 18.9286V15.6429C17.4216 15.6429 13 20.0644 13 25.5V25.5Z" fill="#EC5724"/>
<path d="M36 18.9286V15.6429C30.5644 15.6429 26.1428 20.0644 26.1428 25.5V35.3572H36V25.5H29.4286C29.4286 21.8766 32.3766 18.9286 36 18.9286V18.9286Z" fill="#EC5724"/>
</svg>


					<h3>
						Some people think that the truth can be hidden with a
						little cover-up and decoration. But as time goes by,
						what is true is revealed and what is fake fades away."
					</h3>
					<p>Dave Bloggs - CEO Acme Corp</p>
				</div>
            </div>
           
		</section>
    `;

	return template;
};
