import React from "react";
import "./styles.css";

// ====================================================
// Billing helper (server-created Stripe Checkout session)
// ====================================================

const API_BASE =
  (import.meta as any).env?.VITE_API_BASE_URL ||
  "https://eggcracker-server-1.onrender.com";

/**
 * Creates a stable anonymous user id so Stripe metadata is never empty.
 * (Later: replace with real auth user id or email-based id.)
 */
function getOrCreateUserId() {
  const key = "eggcracker_user_id";
  let id = localStorage.getItem(key);
  if (!id) {
    id = globalThis.crypto?.randomUUID?.() || `anon_${Date.now()}`;
    localStorage.setItem(key, id);
  }
  return id;
}

async function startCheckout(plan: "pro" | "pro_plus") {
  try {
    const userId = getOrCreateUserId();

    const r = await fetch(`${API_BASE}/billing/checkout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "omit",
      body: JSON.stringify({ plan, userId }),
    });

    const data = await r.json().catch(() => ({}));

    if (!r.ok || !data?.url) {
      console.error("Checkout error:", data);
      alert("Sorry — checkout failed. Please try again in a moment.");
      return;
    }

    // Redirect to Stripe Checkout
    window.location.href = data.url;
  } catch (err) {
    console.error("Checkout exception:", err);
    alert("Sorry — checkout failed. Please try again in a moment.");
  }
}

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
              <span className="ec-logo-tagline">Crisp, Clean, and Clear news.</span>
            </div>
          </div>

          <nav className="ec-nav-links">{/* reserved for links later */}</nav>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main>
        {/* HERO */}
        <section className="ec-hero">
          <div className="ec-hero-inner">
            <div className="ec-hero-copy">
              <h1>Time is our most valuable asset.</h1>
              <p className="ec-hero-subtitle">
                Get clear news now — Eggcracker turns messy, ad-heavy articles
                into clean, distraction-free reading with zero tracking and
                optional <strong>“Just the Facts”</strong> summaries.
              </p>

              <div className="ec-hero-cta">
                {/* PRIMARY: Free install via Chrome Web Store */}
                <a
                  href="https://chromewebstore.google.com/search/Eggcracker%20Reader"
                  className="ec-btn ec-btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Add Eggcracker to Chrome
                </a>

               
              </div>

              <p className="ec-hero-micro">No account · No ads · No tracking</p>
            </div>

            <div className="ec-hero-card">
              <h2 className="ec-hero-card-title">Your time matters</h2>
              <ul className="ec-hero-value-list">
                <li>
                  <strong>Time saved:</strong> Skip ads, pop-ups, autoplay, and
                  clutter.
                </li>
                <li>
                  <strong>Focus:</strong> Read in a calm, single-column layout.
                </li>
                <li>
                  <strong>Clarity:</strong> “Just the Facts” mode (Pro+).
                </li>
                <li>
                  <strong>Privacy:</strong> No tracking, or selling your data.
                </li>
              </ul>
              <p className="ec-hero-card-foot"></p>
            </div>
          </div>
        </section>

        {/* TRUST STRIP */}
        <section className="ec-strip">
          <div className="ec-strip-inner">
            <div className="ec-strip-item">
              <span className="ec-strip-label">🔒 No Tracking</span>
              <span className="ec-strip-text">
                We don’t log, store, or sell what you read.
              </span>
            </div>
            <div className="ec-strip-item">
              <span className="ec-strip-label">🚫 No Ads</span>
              <span className="ec-strip-text">
                No banners, autoplay videos, or clutter.
              </span>
            </div>
            <div className="ec-strip-item">
              <span className="ec-strip-label">⚡ Faster Reading</span>
              <span className="ec-strip-text">One click → pure text.</span>
            </div>
            <div className="ec-strip-item">
              <span className="ec-strip-label">🧠 Clarity Mode (Pro+)</span>
              <span className="ec-strip-text">
                Who / What / When / Where / Why.
              </span>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="ec-section">
          <div className="ec-section-inner">
            <h2>How Eggcracker works</h2>
            <p className="ec-section-lead">
              From cluttered webpage to clean text in three moves.
            </p>

            <div className="ec-steps">
              <div className="ec-step">
                <div className="ec-step-number">1</div>
                <h3>Install the extension</h3>
              </div>

              <div className="ec-step">
                <div className="ec-step-number">2</div>
                <h3>Open any article</h3>
                <p>
                  Click{" "}
                  <img
                    src="/eggcracker-logo.png"
                    alt="Eggcracker icon"
                    style={{ width: "22px", verticalAlign: "middle" }}
                  />{" "}
                  or use right-click → <strong>Read with Eggcracker</strong>.
                </p>
              </div>

              <div className="ec-step">
                <div className="ec-step-number">3</div>
                <h3>Read in pure text</h3>
                <p>No ads. No scripts. Just your article.</p>
              </div>
            </div>
          </div>
        </section>

        {/* VALUE SECTION — QUOTES */}
        <section id="value" className="ec-section ec-section-alt">
          <div className="ec-section-inner ec-value-grid">
            <div>
              <h2>Time is money. Spend it well.</h2>
              <p className="ec-section-lead">
                Two reminders for people who understand momentum:
              </p>
              <ul className="ec-value-list">
                <li>“Time is money.” — Benjamin Franklin</li>
                <li>
                  “If you spend too much time thinking, you’ll never get it
                  done.” — Bruce Lee
                </li>
              </ul>
            </div>

            <div className="ec-value-stats">
              <h3>Small price, big upside</h3>
              <p>
                Five articles a day → <strong>10–20 minutes saved</strong>.
              </p>
              <p>
                Over a month → hours of reclaimed time — staying informed
                without burning out.
              </p>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="ec-section">
          <div className="ec-section-inner">
            <h2>Simple, honest pricing</h2>

            <div className="ec-pricing-grid">
              {/* Get Started */}
              <div className="ec-card ec-card-pricing">
                <h3>Get Started</h3>
                <p className="ec-price">$0</p>
                <p className="ec-price-sub">10 AI rewrites</p>
                <ul className="ec-price-features">
                  <li>Text-only reading</li>
                  <li>Focus on meaning, not the layout noise</li>
                  <li>Upgrade anytime</li>
                </ul>
                <a
                  href="https://chromewebstore.google.com/search/Eggcracker%20Reader"
                  className="ec-btn ec-btn-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Now
                </a>
              </div>

              {/* PRO – server checkout (metadata + entitlement works) */}
              <div className="ec-card ec-card-pricing ec-card-featured">
                <div className="ec-pill">Most popular</div>
                <h3>Pro</h3>
                <p className="ec-price-sub">per month</p>
                <ul className="ec-price-features">
                  <li>Unlimited text-only reading</li>
                  <li>400 AI rewrites</li>
                  <li>Priority queue</li>
                </ul>

                <button
                  className="ec-btn ec-btn-primary"
                  onClick={() => startCheckout("pro")}
                >
                  Get Eggcracker Pro
                </button>
              </div>

              {/* PRO+ – server checkout */}
              <div className="ec-card ec-card-pricing">
                <h3>Pro+</h3>
                <p className="ec-price-sub">per month</p>
                <ul className="ec-price-features">
                  <li>Everything in Pro</li>
                  <li>800 AI rewrites</li>
                  <li>“Just the Facts” mode</li>
                </ul>

                <button
                  className="ec-btn ec-btn-outline"
                  onClick={() => startCheckout("pro_plus")}
                >
                  Get Eggcracker Pro+
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="ec-section ec-section-alt">
          <div className="ec-section-inner">
            <h2>From cracking eggs to cracking noise</h2>
            <p>
              Eggcracker began as a kitchen tool in Las Vegas in 2007. Cracking
              uncooked eggs perfectly, every time. Today it cleans up reading
              articles on the internet with no eggshells.
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
                <p>No. Never.</p>
              </div>
              <div className="ec-faq-item">
                <h3>Do I need an account?</h3>
                <p>No.</p>
              </div>
              <div className="ec-faq-item">
                <h3>What happens when I hit the Free limit?</h3>
                <p>We’ll prompt you to upgrade — no tricks.</p>
              </div>
              <div className="ec-faq-item">
                <h3>Can I cancel anytime?</h3>
                <p>Yes. 100% user-controlled.</p>
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
            <a href="/terms">Terms</a>
            <a href="/support">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
