// Sections du site Cogeort v2 — Editorial brutalist

const NavV2 = () => (
  <header className="masthead">
    <div className="masthead-strip">
      <div>Vol. I · N° 01 · Conseil & Organisation</div>
      <div><span className="vermillon">●</span> Disponible juin 2026 · Édition courante</div>
    </div>
    <div className="masthead-main">
      <nav className="masthead-nav">
        <a href="#approche">Approche</a>
        <a href="#prestations">Prestations</a>
        <a href="#tarifs">Tarifs</a>
        <a href="#process">Méthode</a>
      </nav>
      <a href="#" className="masthead-logo serif">
        Cogeort
      </a>
      <div className="masthead-cta">
        <span className="masthead-date">Paris · Lyon · à distance</span>
        <a href="#rdv" className="btn btn-solid">
          Rendez-vous
          <span className="arrow">↗</span>
        </a>
      </div>
    </div>
  </header>
);

const HeroV2 = () => (
  <section className="cover">
    <div className="wrap">
      <div className="cover-grid">
        <aside className="cover-rail">
          <div className="rotate">Cogeort · Édition 2026</div>
          <div>№<br/>01</div>
        </aside>

        <div className="cover-main">
          <div className="cover-eyebrow">Le dossier — organisation du travail</div>
          <h1>
            Remettre <em>de l'ordre</em><br/>
            dans la <span className="underline">façon</span><br/>
            dont vous travaillez.
          </h1>
          <p className="cover-deck">
            Conseil indépendant en gestion et organisation du travail
            pour les TPE, artisans et associations. Méthodes claires,
            outils sur mesure, équipes alignées — sans jargon ni outil
            compliqué.
          </p>
          <div className="cover-cta">
            <a href="#rdv" className="btn btn-primary">
              Réserver un échange
              <span className="arrow">→</span>
            </a>
            <a href="#prestations" className="btn btn-ghost" style={{marginLeft: 32}}>
              Lire le sommaire
              <span className="arrow">↓</span>
            </a>
          </div>
        </div>

        <aside className="cover-side">
          <div className="cover-side-block">
            <h6>Au sommaire</h6>
            <div className="num">04 <em>chapitres</em></div>
            <p>Approche, prestations, tarifs, méthode — tout ce qu'il faut pour décider en 8 minutes.</p>
          </div>
          <div className="cover-side-block">
            <h6>Premier rendez-vous</h6>
            <div className="num">30<em>′</em></div>
            <p>Offert, sans engagement. Visio ou téléphone, à votre convenance.</p>
          </div>
          <div className="cover-side-block">
            <h6>À partir de</h6>
            <div className="num">590<em>€</em></div>
            <p>Forfait diagnostic flash. Tarifs HT, devis personnalisé sur demande.</p>
          </div>
        </aside>
      </div>
    </div>
  </section>
);

const MarqueeV2 = () => {
  const items = ["Méthodes", "Process", "Outils", "Tableaux de bord", "Rituels", "Procédures", "Clarté"];
  const row = [...items, ...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {row.map((t, i) => (
          <span key={i} className="marquee-item">
            {t}<span className="star">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

const ApprocheV2 = () => (
  <section className="section" id="approche">
    <div className="wrap">
      <div className="section-inner">
        <div className="section-head">
          <div className="section-folio">
            Chapitre
            <span className="n">01</span>
          </div>
          <h2>
            Trois principes,<br/>
            <em>zéro</em> jargon.
          </h2>
          <div className="section-kicker">
            <span className="lede">L'approche</span>
            Une démarche pragmatique, calibrée pour les structures
            qui n'ont pas de temps à perdre en théorie. On regarde,
            on simplifie, on installe.
          </div>
        </div>
        <div className="pillars">
          <div className="pillar">
            <div className="pillar-num">i. Observer</div>
            <h3>Comprendre votre quotidien</h3>
            <p>Immersion sur site, entretiens, analyse des flux. Avant de proposer, j'observe ce qui marche et ce qui coince réellement.</p>
            <div className="pillar-margin">Note de l'éditeur — pas de questionnaires en ligne</div>
          </div>
          <div className="pillar">
            <div className="pillar-num">ii. Simplifier</div>
            <h3>Concevoir simple</h3>
            <p>Chaque outil ou procédure doit tenir sur une page. Si vos équipes ne peuvent pas l'utiliser sans formation lourde, c'est raté.</p>
            <div className="pillar-margin">Règle interne — la page A4 comme contrainte</div>
          </div>
          <div className="pillar">
            <div className="pillar-num">iii. Ancrer</div>
            <h3>Installer durablement</h3>
            <p>Accompagnement des équipes, ajustements après mise en route. Une méthode qui ne s'utilise pas ne sert à rien.</p>
            <div className="pillar-margin">Suivi — 30 / 60 / 90 jours après livraison</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const PrestationsV2 = () => (
  <section className="section" id="prestations">
    <div className="wrap">
      <div className="section-inner">
        <div className="section-head">
          <div className="section-folio">
            Chapitre
            <span className="n">02</span>
          </div>
          <h2>
            Quatre missions,<br/>
            <em>un</em> objectif.
          </h2>
          <div className="section-kicker">
            <span className="lede">Les prestations</span>
            Vous faire gagner du temps. Quatre formats d'intervention,
            assemblables selon votre situation — du diagnostic ponctuel
            au pilotage régulier.
          </div>
        </div>
        <div className="services">
          <article className="service">
            <span className="service-letter serif">A</span>
            <div className="service-tag">Diagnostic</div>
            <h3>Audit d'organisation</h3>
            <p>Cartographie de vos process, identification des points de friction, plan d'action priorisé.</p>
            <ul className="service-list">
              <li>Entretiens individuels & terrain</li>
              <li>Cartographie des flux</li>
              <li>Rapport synthèse + recommandations</li>
            </ul>
          </article>
          <article className="service">
            <span className="service-letter serif">B</span>
            <div className="service-tag">Conception</div>
            <h3>Méthodes & procédures sur mesure</h3>
            <p>Construction d'outils adaptés à votre métier : trames, modèles, tableaux de bord, rituels.</p>
            <ul className="service-list">
              <li>Documents opérationnels</li>
              <li>Rituels & instances</li>
              <li>Templates duplicables</li>
            </ul>
          </article>
          <article className="service">
            <span className="service-letter serif">C</span>
            <div className="service-tag">Déploiement</div>
            <h3>Accompagnement au changement</h3>
            <p>Formation, prise en main, ajustement. Je reste avec vous tant que la méthode n'est pas ancrée.</p>
            <ul className="service-list">
              <li>Ateliers d'équipe</li>
              <li>Coaching managérial</li>
              <li>Suivi à 30 / 60 / 90 jours</li>
            </ul>
          </article>
          <article className="service">
            <span className="service-letter serif">D</span>
            <div className="service-tag">Suivi</div>
            <h3>Pilotage régulier</h3>
            <p>Pour les structures qui veulent un regard externe constant : point mensuel, ajustements continus.</p>
            <ul className="service-list">
              <li>Point mensuel 90 minutes</li>
              <li>Tableau de bord partagé</li>
              <li>Disponibilité asynchrone</li>
            </ul>
          </article>
        </div>
      </div>
    </div>
  </section>
);

const PullQuoteV2 = () => (
  <section className="pullquote">
    <div className="wrap">
      <p className="pullquote-text serif">
        <span className="mark">«</span> Si la méthode ne tient pas <em>sur une page</em>, elle ne tiendra pas dans la durée. <span className="mark">»</span>
      </p>
      <div className="pullquote-attr">Note d'atelier · Cogeort, 2024</div>
    </div>
  </section>
);

const TarifsV2 = () => (
  <section className="section" id="tarifs" style={{ background: 'var(--paper-2)' }}>
    <div className="wrap">
      <div className="section-inner">
        <div className="section-head">
          <div className="section-folio">
            Chapitre
            <span className="n">03</span>
          </div>
          <h2>
            Trois <em>formules.</em><br/>
            Des prix nets.
          </h2>
          <div className="section-kicker">
            <span className="lede">Les tarifs</span>
            Tarifs HT. Devis personnalisé pour les missions complexes
            ou multi-sites. Échange préalable gratuit dans tous les cas.
          </div>
        </div>
        <div className="pricing">
          <div className="price-card">
            <div className="price-name">i — Démarrage</div>
            <h3 className="price-title">Diagnostic flash</h3>
            <div className="price-amount">
              <span className="num serif">590<em>€</em></span>
              <span className="unit">HT · forfait</span>
            </div>
            <p className="price-desc">Idéal pour faire un point clair sans engagement long.</p>
            <ul className="price-features">
              <li>Demi-journée sur site</li>
              <li>Entretiens jusqu'à 4 personnes</li>
              <li>Note de synthèse · 6 pages</li>
              <li>Plan d'action priorisé</li>
            </ul>
            <a href="#rdv" className="btn btn-ghost">
              Choisir cette formule
              <span className="arrow">→</span>
            </a>
          </div>

          <div className="price-card featured">
            <div className="featured-stamp">Le plus choisi</div>
            <div className="price-name">ii — <span className="vermillon">Mission</span></div>
            <h3 className="price-title">Refonte complète</h3>
            <div className="price-amount">
              <span className="num serif">1 900<em>€</em></span>
              <span className="unit">HT · à partir de</span>
            </div>
            <p className="price-desc">Audit, conception et mise en route sur 6 à 10 semaines.</p>
            <ul className="price-features">
              <li>Diagnostic approfondi</li>
              <li>Conception des outils & process</li>
              <li>Deux ateliers de déploiement</li>
              <li>Suivi à 30 et 60 jours</li>
              <li>Templates remis</li>
            </ul>
            <a href="#rdv" className="btn btn-primary" style={{color: 'var(--vermillon)'}}>
              Choisir cette formule
              <span className="arrow">→</span>
            </a>
          </div>

          <div className="price-card">
            <div className="price-name">iii — Suivi</div>
            <h3 className="price-title">Pilote mensuel</h3>
            <div className="price-amount">
              <span className="num serif">490<em>€</em></span>
              <span className="unit">HT / mois</span>
            </div>
            <p className="price-desc">Pour ancrer durablement les changements après une mission.</p>
            <ul className="price-features">
              <li>Un RDV de 90 min / mois</li>
              <li>Tableau de bord partagé</li>
              <li>Échanges asynchrones illimités</li>
              <li>Sans engagement de durée</li>
            </ul>
            <a href="#rdv" className="btn btn-ghost">
              Choisir cette formule
              <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ProcessV2 = () => (
  <section className="section" id="process">
    <div className="wrap">
      <div className="section-inner">
        <div className="section-head">
          <div className="section-folio">
            Chapitre
            <span className="n">04</span>
          </div>
          <h2>
            Comment on travaille<br/>
            <em>ensemble.</em>
          </h2>
          <div className="section-kicker">
            <span className="lede">La méthode</span>
            Quatre étapes lisibles, du premier appel à l'ancrage durable.
            Pas de mauvaise surprise, pas d'effet tunnel.
          </div>
        </div>
        <div className="process">
          <div className="step">
            <div className="step-num">i</div>
            <div className="step-meta">Étape 01 — 30 min</div>
            <h4>Échange initial</h4>
            <p>Comprendre votre contexte, vos enjeux, et voir si on est faits pour collaborer.</p>
          </div>
          <div className="step">
            <div className="step-num">ii</div>
            <div className="step-meta">Étape 02 — 5 jours</div>
            <h4>Cadrage & devis</h4>
            <p>Proposition d'intervention claire, livrables détaillés, planning précis. Vous validez.</p>
          </div>
          <div className="step">
            <div className="step-num">iii</div>
            <div className="step-meta">Étape 03 — 6 à 10 sem.</div>
            <h4>Mission</h4>
            <p>Diagnostic, conception, déploiement. Points hebdo pour rester aligné, ajustements en continu.</p>
          </div>
          <div className="step">
            <div className="step-num">iv</div>
            <div className="step-meta">Étape 04 — 90 jours</div>
            <h4>Ancrage</h4>
            <p>Suivi à 30, 60 et 90 jours pour s'assurer que la méthode tient dans la durée.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { NavV2, HeroV2, MarqueeV2, ApprocheV2, PrestationsV2, PullQuoteV2, TarifsV2, ProcessV2 });
