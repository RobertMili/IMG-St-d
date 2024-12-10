import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
    return (
        <div className="privacy-policy-container">
            <h1>Integritetspolicy</h1>
            <p>
                Din integritet är viktig för oss. Denna integritetspolicy beskriver hur vi
                samlar in, använder och skyddar din information.
            </p>

            <h2>Information vi samlar in</h2>
            <ul>
                <li>Personlig information som namn, adress, e-post och telefonnummer.</li>
                <li>Data relaterad till dina besök på vår webbplats, såsom IP-adress och cookies.</li>
            </ul>

            <h2>Hur vi använder din information</h2>
            <p>
                Vi använder den insamlade informationen för att:
            </p>
            <ul>
                <li>Tillhandahålla och förbättra våra tjänster.</li>
                <li>Skicka uppdateringar och erbjudanden.</li>
                <li>Säkerställa att vår webbplats fungerar korrekt.</li>
            </ul>

            <h2>Kontakta oss</h2>
            <div className="contact-section">
                <p>
                    Om du har några frågor om denna policy, vänligen kontakta oss på:
                </p>
                <p><strong>Mobil:</strong> 076-2377057</p>
                <p><strong>Adress:</strong> Höstvädersgatan 71, 418 33 Göteborg</p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
