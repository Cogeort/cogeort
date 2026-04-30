// Sections du site Cogeort

const Nav = () =>
<nav className="nav">
    <div className="wrap nav-inner">
      <a href="#" className="brand">
        <img src="assets/logo.png" alt="Cogeort" />
        <span className="brand-name">Cogeort</span>
      </a>
      <div className="nav-links">
        <a href="#approche">Approche</a>
        <a href="#prestations">Prestations</a>
        <a href="#tarifs">Tarifs</a>
        <a href="#process">Méthode</a>
        <a href="#rdv">Rendez-vous</a>
      </div>
      <a href="#rdv" className="btn btn-primary">Prendre rendez-vous →</a>
    </div>
  </nav>;


const Hero = () =>
<section className="hero">
    <div className="wrap">
      <div className="hero-eyebrow">
        <span className="dot"></span>
        <span>Disponible · juin 2026</span>
      </div>
      <h1>
        Structurez votre <span className="grad">façon de travailler.</span>
      </h1>
      <p className="hero-sub">
        Conseil en gestion et organisation du travail pour TPE, artisans
        et associations. Des méthodes claires, des outils sur mesure,
        des équipes alignées.
      </p>
      <div className="hero-cta">
        <a href="#rdv" className="btn btn-primary">Réserver un échange gratuit</a>
        <a href="#prestations" className="btn btn-ghost">Voir les prestations</a>
      </div>

      <div className="hero-meta">
        <div className="hero-meta-item">
          <div className="hero-meta-k">Activité</div>
          <div className="hero-meta-v">Conseil & organisation</div>
        </div>
        <div className="hero-meta-item">
          <div className="hero-meta-k">Cibles</div>
          <div className="hero-meta-v">TPE · Artisans · Assos</div>
        </div>
        <div className="hero-meta-item">
          <div className="hero-meta-k">Format</div>
          <div className="hero-meta-v">Mission · forfait · suivi</div>
        </div>
        <div className="hero-meta-item">
          <div className="hero-meta-k">Premier RDV</div>
          <div className="hero-meta-v">30 min · offert</div>
        </div>
      </div>
    </div>
  </section>;


const Marquee = () => {
  const items = ["Méthodes", "Process", "Outils", "Tableaux de bord", "Rituels d'équipe", "Procédures"];
  const row = [...items, ...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {row.map((t, i) =>
        <span key={i} className="marquee-item">
            {t}<span className="star">✦</span>
          </span>
        )}
      </div>
    </div>);

};

const Approche = () =>
<section className="section" id="approche">
    <div className="wrap">
      <div className="section-head">
        <div>
          <div className="section-label">01 — Approche</div>
          <h2>Trois principes, zéro jargon.</h2>
        </div>
        <p className="section-intro">
          Une démarche pragmatique, calibrée pour les structures
          qui n'ont pas de temps à perdre en théorie.
        </p>
      </div>
      <div className="pillars">
        <div className="pillar">
          <div className="pillar-num">/ 01</div>
          <h3>Comprendre votre quotidien</h3>
          <p>Immersion sur site, entretiens, analyse des flux. Avant de proposer, j'observe ce qui marche et ce qui coince réellement.</p>
        </div>
        <div className="pillar">
          <div className="pillar-num">/ 02</div>
          <h3>Concevoir simple</h3>
          <p>Chaque outil ou procédure doit tenir sur une page. Si vos équipes ne peuvent pas l'utiliser sans formation lourde, c'est raté.</p>
        </div>
        <div className="pillar">
          <div className="pillar-num">/ 03</div>
          <h3>Installer durablement</h3>
          <p>Accompagnement des équipes, ajustements après mise en route. Une méthode qui ne s'utilise pas ne sert à rien.</p>
        </div>
      </div>
    </div>
  </section>;


const Prestations = () =>
<section className="section" id="prestations">
    <div className="wrap">
      <div className="section-head">
        <div>
          <div className="section-label">02 — Prestations</div>
          <h2>Quatre missions, un objectif&nbsp;: vous faire gagner du temps.</h2>
        </div>
      </div>
      <div className="services">
        <div className="service">
          <div className="service-tag">A · Diagnostic</div>
          <h3>Audit d'organisation</h3>
          <p>Cartographie de vos process, identification des points de friction, plan d'action priorisé.</p>
          <ul className="service-list">
            <li>Entretiens individuels & terrain</li>
            <li>Cartographie des flux</li>
            <li>Rapport synthèse + recos</li>
          </ul>
        </div>
        <div className="service">
          <div className="service-tag">B · Conception</div>
          <h3>Méthodes & procédures sur mesure</h3>
          <p>Construction d'outils adaptés à votre métier&nbsp;: trames, modèles, tableaux de bord, rituels.</p>
          <ul className="service-list">
            <li>Documents opérationnels</li>
            <li>Rituels & instances</li>
            <li>Templates duplicables</li>
          </ul>
        </div>
        <div className="service">
          <div className="service-tag">C · Déploiement</div>
          <h3>Accompagnement au changement</h3>
          <p>Formation, prise en main, ajustement. Je reste avec vous tant que la méthode n'est pas ancrée.</p>
          <ul className="service-list">
            <li>Ateliers d'équipe</li>
            <li>Coaching managérial</li>
            <li>Suivi à 30 / 60 / 90 jours</li>
          </ul>
        </div>
        <div className="service">
          <div className="service-tag">D · Suivi</div>
          <h3>Pilotage régulier</h3>
          <p>Pour les structures qui veulent un regard externe constant&nbsp;: point mensuel, ajustements continus.</p>
          <ul className="service-list">
            <li>Point mensuel 90 min</li>
            <li>Tableau de bord partagé</li>
            <li>Disponibilité asynchrone</li>
          </ul>
        </div>
      </div>
    </div>
  </section>;


const Tarifs = () =>
<section className="section" id="tarifs" style={{ background: 'var(--bg-2)' }}>
    <div className="wrap">
      <div className="section-head">
        <div>
          <div className="section-label">03 — Tarifs</div>
          <h2>Trois formules.</h2>
        </div>
        <p className="section-intro">
          Tarifs HT. Devis personnalisé pour les missions complexes
          ou multi-sites. Échange préalable gratuit dans tous les cas.
        </p>
      </div>
      <div className="pricing">
        <div className="price-card featured">
          <div className="price-name">Formule · Démarrage</div>
          <h3 className="price-title">Diagnostic flash</h3>
          <div className="price-amount">
            <span className="num">590</span>
            <span className="unit">€ HT · forfait</span>
          </div>
          <p className="price-desc">Idéal pour faire un point clair sans engagement long.</p>
          <ul className="price-features">
            <li>Demi-journée sur site</li>
            <li>Entretiens jusqu'à 4 personnes</li>
            <li>Note de synthèse 6 pages</li>
            <li>Plan d'action priorisé</li>
          </ul>
          <a href="#rdv" className="btn btn-ghost" style={{ justifyContent: 'center' }}>Choisir cette formule</a>
        </div>

        <div className="price-card">
          <div className="price-name">Formule · Mission</div>
          <h3 className="price-title">Refonte complète</h3>
          <div className="price-amount">
            <span className="num">1 900</span>
            <span className="unit">€ HT · à partir de</span>
          </div>
          <p className="price-desc">Audit, conception et mise en route sur 6 à 10 semaines.</p>
          <ul className="price-features">
            <li>Diagnostic approfondi</li>
            <li>Conception des outils & process</li>
            <li>2 ateliers de déploiement</li>
            <li>Suivi à 30 et 60 jours</li>
            <li>Templates remis</li>
          </ul>
          <a href="#rdv" className="btn btn-primary" style={{ justifyContent: 'center' }}>Choisir cette formule</a>
        </div>

        <div className="price-card">
          <div className="price-name">Formule · Suivi</div>
          <h3 className="price-title">Pilote mensuel</h3>
          <div className="price-amount">
            <span className="num">490</span>
            <span className="unit">€ HT / mois</span>
          </div>
          <p className="price-desc">Pour ancrer durablement les changements après une mission.</p>
          <ul className="price-features">
            <li>1 RDV de 90 min / mois</li>
            <li>Tableau de bord partagé</li>
            <li>Échanges asynchrones illimités</li>
            <li>Sans engagement de durée</li>
          </ul>
          <a href="#rdv" className="btn btn-ghost" style={{ justifyContent: 'center' }}>Choisir cette formule</a>
        </div>
      </div>
    </div>
  </section>;


const Process = () =>
<section className="section" id="process">
    <div className="wrap">
      <div className="section-head">
        <div>
          <div className="section-label">04 — Méthode</div>
          <h2>Comment on travaille ensemble.</h2>
        </div>
      </div>
      <div className="process">
        <div className="step">
          <div className="step-num">01</div>
          <h4>Échange initial</h4>
          <p>30 minutes pour comprendre votre contexte, vos enjeux, et voir si on est faits pour collaborer.</p>
        </div>
        <div className="step">
          <div className="step-num">02</div>
          <h4>Cadrage & devis</h4>
          <p>Proposition d'intervention claire, livrables détaillés, planning précis. Vous validez.</p>
        </div>
        <div className="step">
          <div className="step-num">03</div>
          <h4>Mission</h4>
          <p>Diagnostic, conception, déploiement. Points hebdo pour rester aligné, ajustements en continu.</p>
        </div>
        <div className="step">
          <div className="step-num">04</div>
          <h4>Ancrage</h4>
          <p>Suivi à 30, 60 et 90 jours pour s'assurer que la méthode tient dans la durée.</p>
        </div>
      </div>
    </div>
  </section>;


Object.assign(window, { Nav, Hero, Marquee, Approche, Prestations, Tarifs, Process });
