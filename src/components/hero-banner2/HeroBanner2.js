import React from "react";
import { FaFileAlt, FaTasks } from "react-icons/fa";
import "./HeroBanner2.css";

const HeroBanner2 = () => {

    return (
        <div className="hero-banner2">
            <div className="image-container">
                <img
                    src="/images/sweden2.webp"
                    alt="Cleaner"
                    className="background-image"
                />
                <div className="button-container">
                    <div className="hero-content">

                        <h1 className="hero-heading">Professionell Städservice</h1>
                    

                        <div className="hero-buttons">
                            {/* Offert Button */}
                            <button
                                className="btn btn-offert"
                                onClick={() => {
                                    document.getElementById('OffertForm').scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                <FaFileAlt style={{ marginRight: '0.5rem' }} /> Boka Nu
                            </button>

                            {/* Tjänster Button */}
                            <button
                                className="btn btn-tjanster"
                                onClick={() => {
                                    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                <FaTasks style={{ marginRight: '0.5rem' }} /> Tjänster
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner2;
