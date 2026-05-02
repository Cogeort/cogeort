// RDV + Footer + App

// ⚠️ Remplace cette URL par celle de TON événement Calendly
// Format : https://calendly.com/ton-username/nom-de-l-evenement
const CALENDLY_URL = "https://calendly.com/thomas-cogeort/30min";

const RDV = () => {
  React.useEffect(() => {
    // Charge le script Calendly une seule fois
    if (document.getElementById('calendly-script')) return;
    const script = document.createElement('script');
    script.id = 'calendly-script';
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // URL avec paramètres pour styler le widget aux couleurs du site
  const styledUrl =
    `${CALENDLY_URL}?hide_landing_page_details=1&hide_gdpr_banner=1` +
    `&background_color=15101F&text_color=F4F1FA&primary_color=C8359E`;

  return (
    <section className="section" id="rdv">
      <div className="wrap">
        <div className="rdv-block">
          <div className="rdv-info">
            <div className="section-label">05 — Rendez-vous</div>
            <h2>Un échange de 30 min. Sans engagement.</h2>
            <p>
              Présentez-moi votre contexte, je vous dis honnêtement
              si je peux vous aider et comment. Aucun blabla commercial,
              juste une vraie conversation.
            </p>
            <ul className="rdv-bullets">
              <li><span className="k">FORMAT</span><span>Visio ou téléphone, à votre convenance</span></li>
              <li><span className="k">DURÉE</span><span>30 min, prolongeable si besoin</span></li>
              <li><span className="k">PRÉPARATION</span><span>Aucune. Venez avec vos questions.</span></li>
              <li><span className="k">SUITES</span><span>Compte-rendu écrit + propale si pertinent</span></li>
            </ul>
          </div>

          <div
            className="calendly-inline-widget"
            data-url={styledUrl}
            style={{
              minWidth: 320,
              height: 720,
              borderRadius: 8,
              overflow: 'hidden',
              border: '1px solid var(--line)',
              position: 'relative',
              zIndex: 1,
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="footer">
    <div className="wrap">
      <div className="footer-grid">
        <div>
          <div className="brand" style={{marginBottom: 20}}>
            <img src="assets/logo.png" alt="Cogeort" style={{width:32, height:32}} />
            <span className="brand-name">Cogeort</span>
          </div>
          <p className="footer-brand">
            Conseil indépendant en gestion et organisation
            du travail. Au service des TPE, artisans et associations
            qui veulent gagner en clarté.
          </p>
        </div>
        <div>
          <h5>Naviguer</h5>
          <ul>
            <li><a href="#approche">Approche</a></li>
            <li><a href="#prestations">Prestations</a></li>
            <li><a href="#tarifs">Tarifs</a></li>
            <li><a href="#process">Méthode</a></li>
          </ul>
        </div>
        <div>
          <h5>Contact</h5>
          <ul>
            <li><li><a href="mailto:thomas@cogeort.fr" className="contact-link">thomas@cogeort.fr</a></li>
            <li>06 58 71 00 93</li>
            <li>France · à distance</li>
          </ul>
        </div>
        <div>
          <h5>Légal</h5>
          <ul>
            <li><a href="mentions-legales.html">Mentions légales</a></li>
            <li><a href="confidentialite.html">Confidentialité</a></li>
            <li><a href="cgs.html">CGS</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Cogeort · Tous droits réservés</span>
        <span>Taillé pour vous</span>
      </div>
    </div>
  </footer>
);

/* === Tweaks === */
const TWEAK_DEFAULS = /*EDITMODE-BEGIN*/{
  "accentHue": 295,
  "showMarquee": true,
  "darkMode": true,
  "headerStyle": "Dégradé"
}/*EDITMODE-END*/;

function CogeortTweaks() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULS);

  React.useEffect(() => {
    const root = document.documentElement;
    const h = t.accentHue;
    // Reconstruit le dégradé selon la teinte choisie
    const c1 = `oklch(0.45 0.25 ${h - 20})`;
    const c2 = `oklch(0.60 0.22 ${h + 30})`;
    const c3 = `oklch(0.72 0.18 ${h + 70})`;
    root.style.setProperty('--violet', c1);
    root.style.setProperty('--violet-2', `oklch(0.55 0.25 ${h - 10})`);
    root.style.setProperty('--magenta', c2);
    root.style.setProperty('--orange', c3);
    root.style.setProperty('--grad', `linear-gradient(135deg, ${c1} 0%, ${c2} 55%, ${c3} 100%)`);

    if (t.darkMode) {
      root.style.setProperty('--bg', '#0E0B14');
      root.style.setProperty('--bg-2', '#15101F');
      root.style.setProperty('--ink', '#F4F1FA');
      root.style.setProperty('--ink-2', '#B8B0C9');
      root.style.setProperty('--ink-3', '#7A7290');
      root.style.setProperty('--line', 'rgba(255,255,255,0.08)');
      root.style.setProperty('--line-strong', 'rgba(255,255,255,0.18)');
    } else {
      root.style.setProperty('--bg', '#FAFAF7');
      root.style.setProperty('--bg-2', '#F2F0EC');
      root.style.setProperty('--ink', '#0E0B14');
      root.style.setProperty('--ink-2', '#4A4458');
      root.style.setProperty('--ink-3', '#7A7290');
      root.style.setProperty('--line', 'rgba(14,11,20,0.08)');
      root.style.setProperty('--line-strong', 'rgba(14,11,20,0.18)');
    }
  }, [t.accentHue, t.darkMode]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Couleur d'accent">
        <TweakSlider
          tweak={t} setTweak={setTweak}
          k="accentHue" label="Teinte"
          min={0} max={360} step={5} unit="°"
        />
        <div style={{display:'flex', gap:6, marginTop:10}}>
          {[295, 25, 200, 145, 0].map(h => (
            <button key={h}
              onClick={() => setTweak('accentHue', h)}
              style={{
                width:'100%', height:32, borderRadius:6, border:'1px solid rgba(255,255,255,0.15)',
                background: `linear-gradient(135deg, oklch(0.45 0.25 ${h-20}), oklch(0.72 0.18 ${h+70}))`,
                cursor:'pointer'
              }}
            />
          ))}
        </div>
      </TweakSection>
      <TweakSection label="Apparence">
        <TweakToggle tweak={t} setTweak={setTweak} k="darkMode" label="Mode sombre" />
        <TweakToggle tweak={t} setTweak={setTweak} k="showMarquee" label="Bandeau défilant" />
      </TweakSection>
    </TweaksPanel>
  );
}

const App = () => {
  const [tweaks] = useTweaks(TWEAK_DEFAULS);
  return (
    <>
      <div className="grid-bg"></div>
      <Nav />
      <Hero />
      {tweaks.showMarquee && <Marquee />}
      <Approche />
      <Prestations />
      <Tarifs />
      <Process />
      <RDV />
      <Footer />
      <CogeortTweaks />
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
