import React from "react";
import "./AboutOss.css"; // CSS file for styling

const OmOss = () => {
  return (
    <div className="om-oss-container">
      <h1 className="om-oss-title">Om Oss</h1>
      <section className="vision-section">
        <h2>Vår Vision</h2>
        <p>
          Hos <span className="highlight-color">IMG Städ</span> strävar vi efter att göra din vardag enklare och mer
          bekväm genom professionell städning av högsta kvalitet. Vi tror på en ren
          och ordnad miljö för både hem och arbetsplats, vilket bidrar till
          välbefinnande och produktivitet.
        </p>
      </section>

      <section className="mission-section">
        <h2>Vårt Uppdrag</h2>
        <p>
          Vi erbjuder skräddarsydda städtjänster för alla behov – från hemstädning
          till storstädning och byggstädning. Vårt team är engagerat i att ge våra
          kunder en exceptionell upplevelse med noggrant utförda uppdrag och personlig
          service. Vi använder miljövänliga produkter och metoder för att säkerställa
          att vi bidrar till en hållbar framtid.
        </p>
      </section>

      <section className="values-section">
        <h2>Våra Värderingar</h2>
        <ul>
          <li><strong>Kvalitet:</strong> Vi lämnar inget åt slumpen. Varje städtjänst utförs med noggrannhet och precision för att ge bästa möjliga resultat.</li>
          <li><strong>Pålitlighet:</strong> Vi är alltid i tid och håller det vi lovar.</li>
          <li><strong>Flexibilitet:</strong> Vi anpassar våra tjänster efter dina specifika behov och önskemål.</li>
          <li><strong>Miljömedvetenhet:</strong> Vi prioriterar användning av miljövänliga produkter och hållbara metoder för en grönare framtid.</li>
        </ul>
      </section>

      <section className="why-choose-us-section">
        <h2>Varför Välja Oss?</h2>
        <ul>
          <li><strong>Erfarenhet och expertis:</strong> Vi har över flera års erfarenhet inom städbranschen och ett team av professionella och pålitliga städare.</li>
          <li><strong>Skräddarsydda lösningar:</strong> Vi erbjuder flexibla städpaket för att passa både privatpersoner och företag.</li>
          <li><strong>Fullständig garanti:</strong> Vi erbjuder en nöjd-kund-garanti – om du inte är nöjd, kommer vi att rätta till det.</li>
        </ul>
      </section>

      <section className="team-section">
        <h2>Vårt Team</h2>
        <p>
          Vårt team består av dedikerade och erfarna städare som älskar sitt arbete. Vi
          värnar om kvalitet och arbetar tillsammans för att göra varje utrymme skinande
          rent och fräscht. Vår personal genomgår regelbundna utbildningar och har noggrant
          valts ut för att säkerställa att de lever upp till våra höga standarder.
        </p>
      </section>
    </div>
  );
};

export default OmOss;
