// RDV + Footer + App v2 — Editorial brutalist

const CALENDLY_URL = "https://calendly.com/thomas-cogeort/30min";

const RDVV2 = () => {
  React.useEffect(() => {
    if (document.getElementById('calendly-script')) return;
    const script = document.createElement('script');
    script.id = 'calendly-script';
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const styledUrl =
    `${CALENDLY_URL}?hide_landing_page_details=1&hide_gdpr_banner=1` +
    `&background_color=F2EDE4&text_color=15110C&primary_color=D2391C`;

  return (
    <section className="section rdv-section" id="rdv">
      <div className="wrap">
        <div className="section-inner">
          <div className="section-head">
            <div className="section-folio">
              Chapitre
              <span className="n">05</span>
            </div>
            <h2>
              Un échange de <em>30 min.</em><br/>
              Sans engagement.
            </h2>
            <div className="section-kicker">
              <span className="lede">Le rendez-vous</span>
              Présentez-moi votre contexte, je vous dis honnêtement
              si je peux vous aider et comment. Aucun blabla commercial,
              juste une vraie conversation.
            </div>
          </div>
          <div className="rdv-grid">
            <div></div>
            <div className="rdv-info">
              <h3>Choisissez un créneau, <em>on s'occupe du reste.</em></h3>
              <ul className="rdv-bullets">
                <li><span className="k">Format</span><span>Visio ou téléphone, à votre convenance</span></li>
                <li><span className="k">Durée</span><span>30 min, prolongeable si besoin</span></li>
                <li><span className="k">Préparation</span><span>Aucune. Venez avec vos questions.</span></li>
                <li><span className="k">Suites</span><span>Compte-rendu écrit + propale si pertinent</span></li>
              </ul>
            </div>
            <div className="rdv-widget-wrap">
              <div
                className="calendly-inline-widget"
                data-url={styledUrl}
                style={{
                  minWidth: 320,
                  height: 680,
                  position: 'relative',
                  zIndex: 1,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FooterV2 = () => (
  <footer className="footer">
    <div className="wrap">
      <div className="footer-mast serif">
        Cogeort<em>.</em>
      </div>
      <div className="footer-grid">
        <div className="footer-folio">
          Colophon<br/>
          ↳ Édition 2026
        </div>
        <div>
          <p className="footer-brand">
            <span className="lede">À propos</span>
            Conseil indépendant en gestion et organisation
            du travail. Au service des TPE, artisans et associations
            qui veulent gagner en clarté — sans jargon ni surcouche.
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
            <li>contact@cogeort.fr</li>
            <li>06 00 00 00 00</li>
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
        <div className="footer-folio">№ 01</div>
        <span>© 2026 Cogeort · Tous droits réservés · Conçu pour aller à l'essentiel</span>
        <span>Composé en Fraunces & Inter Tight</span>
      </div>
    </div>
  </footer>
);

/* === Tweaks === */
const TWEAK_DEFAULTS_V2 = /*EDITMODE-BEGIN*/{
  "accentHue": 18,
  "showMarquee": true,
  "showQuote": true,
  "paperTone": "Crème"
}/*EDITMODE-END*/;

function CogeortTweaksV2() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS_V2);

  React.useEffect(() => {
    const root = document.documentElement;
    const h = t.accentHue;
    root.style.setProperty('--vermillon', `oklch(0.58 0.19 ${h})`);
    root.style.setProperty('--vermillon-deep', `oklch(0.46 0.18 ${h})`);

    const tones = {
      'Crème':   { paper: '#F2EDE4', p2: '#E8E1D3', p3: '#DCD3C0' },
      'Ivoire':  { paper: '#F6F2EA', p2: '#ECE6D9', p3: '#E0D8C5' },
      'Newsprint': { paper: '#EAE3D2', p2: '#DDD3BD', p3: '#CFC3A8' },
      'Blanc':   { paper: '#FAF8F3', p2: '#F0EDE5', p3: '#E5E0D4' },
    };
    const tn = tones[t.paperTone] || tones['Crème'];
    root.style.setProperty('--paper', tn.paper);
    root.style.setProperty('--paper-2', tn.p2);
    root.style.setProperty('--paper-3', tn.p3);
  }, [t.accentHue, t.paperTone]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Encre d'accent">
        <TweakSlider
          tweak={t} setTweak={setTweak}
          k="accentHue" label="Teinte"
          min={0} max={360} step={2} unit="°"
        />
        <div style={{display:'flex', gap:6, marginTop:10}}>
          {[18, 0, 350, 200, 145, 60].map(h => (
            <button key={h}
              onClick={() => setTweak('accentHue', h)}
              style={{
                width:'100%', height:32, border:'1px solid rgba(255,255,255,0.15)',
                background: `oklch(0.58 0.19 ${h})`,
                cursor:'pointer'
              }}
              aria-label={`Teinte ${h}`}
            />
          ))}
        </div>
      </TweakSection>
      <TweakSection label="Papier">
        <TweakRadio
          tweak={t} setTweak={setTweak}
          k="paperTone" label="Tonalité"
          options={['Crème', 'Ivoire', 'Newsprint', 'Blanc']}
        />
      </TweakSection>
      <TweakSection label="Composition">
        <TweakToggle tweak={t} setTweak={setTweak} k="showQuote" label="Pull-quote" />
        <TweakToggle tweak={t} setTweak={setTweak} k="showMarquee" label="Bandeau défilant" />
      </TweakSection>
    </TweaksPanel>
  );
}

const App = () => {
  const [tweaks] = useTweaks(TWEAK_DEFAULTS_V2);
  return (
    <>
      <div className="paper-grain"></div>
      <span className="crop-mark crop-tl"></span>
      <span className="crop-mark crop-tr"></span>
      <span className="crop-mark crop-bl"></span>
      <span className="crop-mark crop-br"></span>
      <div className="folio-edge">Cogeort № 01 · 2026</div>

      <NavV2 />
      <HeroV2 />
      {tweaks.showMarquee && <MarqueeV2 />}
      <ApprocheV2 />
      <PrestationsV2 />
      {tweaks.showQuote && <PullQuoteV2 />}
      <TarifsV2 />
      <ProcessV2 />
      <RDVV2 />
      <FooterV2 />
      <CogeortTweaksV2 />
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
