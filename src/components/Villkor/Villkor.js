import React from 'react';
import './Villkor.css';

const Villkor = () => {
    return (
        <div className="villkor-container">
            <h1>Allmänna Villkor</h1>
            <p>
                Välkommen till Img Städ! Genom att använda våra tjänster accepterar du följande villkor. Läs dem noggrant innan du använder våra tjänster.
            </p>

            <h2>1. Tjänster</h2>
            <p>
                Vi erbjuder profeGsionella städtjänster för hem och företag. Vårt mål är att leverera högkvalitativa tjänster som uppfyller våra kunders förväntningar.
            </p>

            <h2>2. Bokning</h2>
            <ul>
                <li>Alla bokningar måste göras via vår webbplats, telefon eller e-post.</li>
                <li>Bokningar är giltiga först efter bekräftelse från vår sida.</li>
                <li>Avbokningar eller ändringar måste göras minst 24 timmar före det schemalagda städningen.</li>
            </ul>

            <h2>3. Prissättning</h2>
            <p>
                Alla priser som anges på vår webbplats är inklusive moms om inget annat anges. Vi förbehåller oss rätten att ändra priser utan föregående meddelande.
            </p>

            <h2>4. Betalning</h2>
            <ul>
                <li>Betalning sker efter avslutad tjänst, antingen via faktura eller elektroniska betalningsmetoder.</li>
                <li>Försenade betalningar kan leda till påminnelseavgifter.</li>
            </ul>

            <h2>5. Ansvarsbegränsning</h2>
            <p>
                Vi ansvarar inte för skador som uppstår till följd av missbruk av våra tjänster eller på grund av omständigheter utanför vår kontroll, såsom naturkatastrofer eller force majeure.
            </p>

            <h2>6. Kundens Ansvar</h2>
            <p>
                Kunden ansvarar för att ge oss korrekt information om fastigheten och för att säkerställa att området är tillgängligt vid den schemalagda tidpunkten.
            </p>

            <h2>7. Ändringar av Villkor</h2>
            <p>
                Vi förbehåller oss rätten att när som helst ändra dessa villkor. Eventuella ändringar publiceras på vår webbplats och träder i kraft omedelbart.
            </p>

            <h2>8. Kontakta oss</h2>
            <p>
                Om du har några frågor angående dessa villkor, vänligen kontakta oss:
            </p>
            <ul>
                <li><strong>Telefon:</strong> 076-2377057</li>
                <li><strong>Adress:</strong> Höstvädersgatan 71, 418 33 Göteborg</li>
            </ul>
        </div>
    );
};

export default Villkor;
