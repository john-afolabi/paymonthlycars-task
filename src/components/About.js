import book from "../img/png/book.png";
import bookIcon from "../img/svg/book.svg";
import mm from "../img/jpg/mention-management.jpg";
import vc from "../img/jpg/viral-campaign.jpg";
import rm from "../img/jpg/reputation-management.jpg";
import p from "../img/jpg/partner.jpg";

export const About = (open) => {
	const template = `
    <section class="about" id="about">
    <div class="how-it-works">
        <h3>Features</h3>
        <h2>How it Works</h2>
        <div class="steps">
            <div class="step-1">
                <span>1</span>
                <h3>
                    Research & Identity
                </h3>
                <p>
                    A discovery process where we find the communities
                    that have the highest potential, and overlap with
                    your target audience.
                </p>
            </div>
            <div class="step-2">
                <span>2</span>
                <h3>
                    Plan & Target
                </h3>
                <p>
                    A planning phase where we develop a plan to
                    effectively reach the target audience across the
                    communities discovered.
                </p>
            </div>
            <div class="step-3">
                <span>3</span>
                <h3>
                    Execute Campaigns
                </h3>
                <p>
                    The implementation phase. We implement and execute
                    our marketing campaigns per the plan & target
                    community list
                </p>
            </div>
            <div class="step-4">
                <span>4</span>
                <h3>
                    Measure & Verify
                </h3>
                <p>
                    The evaluation pase. We measure the organic impact
                    we've made on the subreddit & ensure that we've
                    achieved our goal.
                </p>
            </div>
        </div>

        <button class="btn-primary">Get Started</button>
    </div>

    <div class="success-story">
        <div>
            <img src="${bookIcon}" alt="read success story"/>
            <h3>Read a success story</h3>
            <p>
                See how we drove more than 2500 users to a dating app
                with a single post
            </p>
            
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                <p>Check out our Facebook & LinkedIn</p>
            </div>
        </div>

        <img src="${book}" alt="testimonial-book"/>
    </div>
    <div class="services-bg">
				<div class="services">
					<div class="service-card">
						<img src="${rm}" alt="reputation management" />
						<h3>Reputation management</h3>
						<p>
							Protect your brand's reputation, be present when
							customers talk about your business or industry
						</p>
					</div>
					<div class="service-card">
						<img src="${vc}" alt="viral campaign" />
						<h3>Viral campaign planning & execution</h3>
						<p>
							Protect your brand's reputation, be present when
							customers talk about your business or industry
						</p>
					</div>
					<div class="service-card">
						<img src="${mm}" alt="mention management" />
						<h3>Mention management</h3>
						<p>
							Improve brand awareness through mentions across
							targeted Subreddits
						</p>
					</div>
					<div class="service-card">
						<img src="${p}" alt="partner with us" />
						<h3>Soar-as-a-partner</h3>
						<p>
							Partner up with our campaign managers to support
							your marketing campaigns with additional viral
						</p>
					</div>
				</div>
			</div>
</section>
    `;

	return template;
};
