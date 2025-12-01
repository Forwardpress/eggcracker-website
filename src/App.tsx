import React from "react";
import "./styles.css";

const App: React.FC = () => {
  return (
    <div className="ec-site">
      {/* NAVBAR */}
      <header className="ec-nav">
        <div className="ec-nav-inner">
          <div className="ec-nav-left">
            <div className="ec-logo-mark">
              <img
                src="/eggcracker-logo.png"
                alt="Eggcracker logo"
                className="ec-logo-img"
             />
          </div>

            <div className="ec-logo-text">
              <span className="ec-logo-name">Eggcracker</span>
              <span className="ec-logo-tagline">Clean breaks. Clear news.</span>
            </div>
          </div>
          <nav className="ec-nav-links">
            <a href="#how-it-works">How it works</a>
            <a href="#value">Value</a>
            <a href="#pricing">Pricing</a>
            <a href="#about">About</a>
            <a href="#faq">FAQ</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <main>
        <section className="ec-hero">
          <div className="ec-hero-inner">
            <div className="ec-hero-copy">
              <h1>Clean breaks. Clear news.</h1>
              <p className="ec-hero-subtitle">
                Eggcracker turns messy, ad-heavy articles into distraction-free,
                text-only reading with zero tracking and optional{" "}
                <strong>&ldquo;Just the Facts&rdquo;</strong> breakdowns.
              </p>

              <div className="ec-hero-cta">
                <button className="ec-btn ec-btn-primary">
                  Add Eggcracker to Chrome
                </button>
                <button className="ec-btn ec-btn-secondary">
                  Try Free for 3 Days
                </button>
              </div>

              <p className="ec-hero-micro">
                No account required · No ads · No tracking
              </p>
            </div>

            <div className="ec-hero-card">
              <h2 className="ec-hero-card-title">What you get for $2.99</h2>
              <ul className="ec-hero-value-list">
                <li>
                  <strong>Time back:</strong> Skip ads, pop-ups, and
                  clickbait layouts. Go straight to the words.
                </li>
                <li>
                  <strong>Focus:</strong> Read in a calm, text-only space that
                  keeps your brain in the zone.
                </li>
                <li>
                  <strong>Clarity:</strong> Pro+ adds a &ldquo;Just the Facts&rdquo;
                  view — Who / What / When / Where / Why in seconds.
                </li>
                <li>
                  <strong>Privacy:</strong> We don’t track you, log your reading,
                  or sell your data. Your subscription covers the costs — not you
                  as a product.
                </li>
              </ul>
              <p className="ec-hero-card-foot">
                If Eggcracker saves you 10 minutes a day, Pro pays for itself in
                less than a week.
              </p>
            </div>
          </div>
        </section>

        {/* TRUST STRIP */}
        <section className="ec-strip">
          <div className="ec-strip-inner">
            <div className="ec-strip-item">
              <span className="ec-strip-label">🔒 No Tracking</span>
              <span className="ec-strip-text">
                We don’t collect or sell what you read.
              </span>
            </div>
            <div className="ec-strip-item">
              <span className="ec-strip-label">🚫 No Ads or Garbage</span>
              <span className="ec-strip-text">
                No pop-ups, autoplay video, or banner clutter.
              </span>
            </div>
            <div className="ec-strip-item">
              <span className="ec-strip-label">⚡ Time Saved</span>
              <span className="ec-strip-text">
                One click to pure text — minutes saved on every article.
              </span>
            </div>
            <div className="ec-strip-item">
              <span className="ec-strip-label">🧠 Just the Facts (Pro+)</span>
              <span className="ec-strip-text">
                Who / What / When / Where / Why in one glance.
              </span>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="ec-section">
          <div className="ec-section-inner">
            <h2>How Eggcracker works</h2>
            <p className="ec-section-lead">
              From cluttered page to clean text in three small moves.
            </p>
            <div className="ec-steps">
              <div className="ec-step">
                <div className="ec-step-number">1</div>
                <h3>Install the extension</h3>
                <p>
                  Add Eggcracker to Chrome and pin the egg icon to your toolbar.
                </p>
              </div>
              <div className="ec-step">
                <div className="ec-step-number">2</div>
                <h3>Open any article</h3>
                <p>
                  On a news story or blog post, click{" "}
                  <strong>🥚 Eggcracker</strong> or right-click →{" "}
                  <strong>Read with Eggcracker</strong>.
                </p>
              </div>
              <div className="ec-step">
                <div className="ec-step-number">3</div>
                <h3>Read in pure text</h3>
                <p>
                  We remove ads, media, and scripts. Pro+ adds an optional{" "}
                  <strong>Just the Facts</strong> view so you can scan the
                  essentials.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* VALUE / TIME SAVED SECTION */}
        <section id="value" className="ec-section ec-section-alt">
          <div className="ec-section-inner ec-value-grid">
            <div>
              <h2>What you get for the price of a cup of coffee</h2>
              <p className="ec-section-lead">
                Eggcracker is built for people who read a lot and don’t have
                time for nonsense. It doesn't have to be a grind to stay informed.
              </p>
              <ul className="ec-value-list">
                <li>
                  <strong>Less time wrestling pages.</strong> Skip the scroll
                  hunt for the actual article.
                </li>
                <li>
                  <strong>More time with the ideas.</strong> Stay in the part
                  that matters — the words, the meaning, the signal.
                </li>
                <li>
                  <strong>Consistent focus.</strong> No autoplay video yanking
                  your attention away mid-paragraph.
                </li>
                <li>
                  <strong>Calmer brain.</strong> A single, clean column of text
                  instead of chaotic layouts.
                </li>
              </ul>
            </div>
            <div className="ec-value-stats">
              <h3>Small price, big upside</h3>
              <p>
                If Eggcracker helps you read just{" "}
                <strong>five articles a day</strong> without fighting ads and
                overlays, that’s easily <strong>10–20 minutes</strong> saved.
              </p>
              <p>
                Over a month, that’s several <strong>hours</strong> of reclaimed
                time for $2.99.
              </p>
              <p className="ec-value-foot">
                Free extensions pay for themselves by selling your data. Eggcracker
                pays for itself by giving you your time and focus back.
              </p>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="ec-section">
          <div className="ec-section-inner">
            <h2>Simple, honest pricing</h2>
            <p className="ec-section-lead">
              No dark patterns. No data selling. Just clear options based on how
              much you read.
            </p>

            <div className="ec-pricing-grid">
              {/* FREE */}
              <div className="ec-card ec-card-pricing">
                <h3>Free</h3>
                <p className="ec-price">$0</p>
                <p className="ec-price-sub">3 days or 50 articles</p>
                <ul className="ec-price-features">
                  <li>Text-only reading</li>
                  <li>5 AI rewrites to taste the engine</li>
                  <li>No account required</li>
                  <li>No ads, no tracking</li>
                </ul>
                <button className="ec-btn ec-btn-outline">
                  Start Free Trial
                </button>
              </div>

              {/* PRO */}
              <div className="ec-card ec-card-pricing ec-card-featured">
                <div className="ec-pill">Most popular</div>
                <h3>Pro</h3>
                <p className="ec-price">$2.99</p>
                <p className="ec-price-sub">per month · or $29 / year</p>
                <ul className="ec-price-features">
                  <li>Unlimited text-only reading</li>
                  <li>Up to 400 AI rewrites per month</li>
                  <li>Priority processing for busy days</li>
                  <li>Perfect for everyday readers</li>
                </ul>
                <button className="ec-btn ec-btn-primary">
                  Get Pro (Coming Soon)
                </button>
              </div>

              {/* PRO+ */}
              <div className="ec-card ec-card-pricing">
                <h3>Pro+</h3>
                <p className="ec-price">$3.99</p>
                <p className="ec-price-sub">per month · or $39 / year</p>
                <ul className="ec-price-features">
                  <li>Everything in Pro</li>
                  <li>Unlimited AI rewrites</li>
                  <li>Just the Facts mode (Who/What/When/Where/Why)</li>
                  <li>
                    Eligible for giveaways, VIP digest, early feature access
                  </li>
                </ul>
                <button className="ec-btn ec-btn-outline">
                  Get Pro+ (Coming Soon)
                </button>
              </div>
            </div>

            <p className="ec-pricing-note">
              All payments will be processed securely by Stripe. Eggcracker
              never stores your card details.
            </p>
          </div>
        </section>

        {/* ABOUT TEASER */}
        <section id="about" className="ec-section ec-section-alt">
          <div className="ec-section-inner">
            <h2>From cracking eggs to cracking noise</h2>
            <p className="ec-section-lead">
              Eggcracker started as a kitchen tool in Las Vegas in 2007 — a way
              to crack eggs cleanly with a one-inch chop and no mess.
            </p>
            <p>
              It wasn’t a joke product. It was built to last. Family and friends
              helped with packing, shipping, and stories. By 2009, thousands of
              people had an Egg Cracker on their counter.
            </p>
            <p className="ec-quote">
              &ldquo;I still use my original Egg Cracker from 2007 when I cook
              eggs.&rdquo;
            </p>
            <p>
              Today, Eggcracker doesn’t crack shells — it cracks through the
              web’s clutter. The mission hasn’t changed:{" "}
              <strong>
                do what you say you’ll do, and make things cleaner instead of
                messier.
              </strong>
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="ec-section">
          <div className="ec-section-inner">
            <h2>Frequently asked questions</h2>
            <div className="ec-faq-grid">
              <div className="ec-faq-item">
                <h3>Do you track what I read?</h3>
                <p>
                  No. We don’t log or sell your reading history. We’re funded by
                  subscriptions, not surveillance.
                </p>
              </div>
              <div className="ec-faq-item">
                <h3>Do I need an account to use the Free tier?</h3>
                <p>
                  No. Free works for 3 days or 50 articles with no login
                  required.
                </p>
              </div>
              <div className="ec-faq-item">
                <h3>What happens when I hit the Free limit?</h3>
                <p>
                  You’ll see a simple prompt to upgrade to Pro or Pro+. No
                  tricks or surprise charges.
                </p>
              </div>
              <div className="ec-faq-item">
                <h3>Can I cancel anytime?</h3>
                <p>
                  Yes. You’ll be able to manage your subscription through a
                  secure billing portal powered by Stripe.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="ec-footer">
        <div className="ec-footer-inner">
          <span>© 2025 Thomas OConnor (Eggcracker)</span>
          <div className="ec-footer-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Use</a>
            <a href="/support">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
