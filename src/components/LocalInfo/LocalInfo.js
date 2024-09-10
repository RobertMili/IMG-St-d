import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus, faSchool, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import "./LocalInfo.css";

const Section = ({ title, icon, isVisible, toggleVisibility }) => (
  <div className={`section ${isVisible ? 'active' : ''}`}>
    <h3 onClick={toggleVisibility}>
      <FontAwesomeIcon icon={icon} /> {title}
    </h3>
  </div>
);

const InfoTable = ({ title, items }) => (
  <div>
    <h2>{title}</h2>
    <div className="table--basic">
      <table>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <th>{item.name}</th>
              <td>{item.distance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const LocalInfo = () => {
  const [activeSection, setActiveSection] = useState('busStations'); // Default to 'busStations'

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const busStations = [
    { name: "Merkuriusgatan", distance: "259 m" },
    { name: "Bergsjön Teleskopgatan", distance: "396 m" },
    { name: "Tycho Brahes Gata", distance: "501 m" },
    { name: "Keplers Gata", distance: "522 m" },
    { name: "Bergsjödalen", distance: "551m" },
  ];

  const tramStations = [
    { name: "Bergsjön Rymdtorget Spårvagn", distance: "588 m" },
    { name: "Bergsjön Galileis Gata", distance: "873 m" },
  ];

  const schools = [
    { name: "Solbackeskolan", distance: "97 m" },
    { name: "Sandeklevsskolan", distance: "542 m" },
    { name: "Bergsjöskolan", distance: "670 m" },
  ];

  const preschools = [
    { name: "Förskola", distance: "107 m" },
    { name: "Förskolan Nymånen", distance: "321 m" },
    { name: "Förskola Siriusgatan", distance: "840 m" },
  ];

  const shops = [
    { name: "Backens servicebutik", distance: "394 m" },
    { name: "Sannas servicebutik", distance: "775 m" },
  ];

  const supermarkets = [
    { name: "Shammars Livs & Fika", distance: "605 m" },
    { name: "ICA Supermarket Bergsjön", distance: "608 m" },
    { name: "Lidl", distance: "876 m" },
  ];

  const fastFoods = [
    { name: "Via Luna pizzeria", distance: "530 m" },
    { name: "Rymdgrillen", distance: "621 m" },
  ];

  return (
    <div className="local-info-container">
      <div className="sections-container">
        <Section
          title="KOMMUNIKATIONER"
          icon={faBus}
          isVisible={activeSection === 'busStations'}
          toggleVisibility={() => toggleSection('busStations')}
        />
        <Section
          title="SKOLA"
          icon={faSchool}
          isVisible={activeSection === 'schools'}
          toggleVisibility={() => toggleSection('schools')}
        />
        <Section
          title="ÖVRIGT"
          icon={faInfoCircle}
          isVisible={activeSection === 'otherInfo'}
          toggleVisibility={() => toggleSection('otherInfo')}
        />
      </div>

      <div className="test">
        {activeSection === 'busStations' && (
          <>
            <InfoTable title="Busstationer & Hållplatser" items={busStations} />
            <InfoTable title="Spårvagnshållplats" items={tramStations} />
          </>
        )}
        {activeSection === 'schools' && (
          <>
            <InfoTable title="Grundskola" items={schools} />
            <InfoTable title="Förskola" items={preschools} />
          </>
        )}
        {activeSection === 'otherInfo' && (
          <>
            <InfoTable title="Närbutik" items={shops} />
            <InfoTable title="Stormarknad" items={supermarkets} />
            <InfoTable title="Snabbmat" items={fastFoods} />
          </>
        )}
      </div>
    </div>
  );
};

export default LocalInfo;