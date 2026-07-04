import "./TopSection.css";

import InfoCard from "../InfoCard/InfoCard";
import LiveStandings from "../LiveStandings/LiveStandings";

// Circuit Images
import australia from "../../assets/circuits/australia.svg";
import china from "../../assets/circuits/china.svg";
import japan from "../../assets/circuits/japan.svg";
import bahrain from "../../assets/circuits/bahrain.svg";
import saudi_arabia from "../../assets/circuits/saudi_arabia.svg";
import miami from "../../assets/circuits/miami.svg";
import emilia_romagna from "../../assets/circuits/emilia_romagna.svg";
import monaco from "../../assets/circuits/monaco.svg";
import spain from "../../assets/circuits/spain.svg";
import canada from "../../assets/circuits/canada.svg";
import austria from "../../assets/circuits/austria.svg";
import britain from "../../assets/circuits/britain.svg";
import belgium from "../../assets/circuits/belgium.svg";
import hungary from "../../assets/circuits/hungary.svg";
import netherlands from "../../assets/circuits/netherlands.svg";
import italy from "../../assets/circuits/italy.svg";
import azerbaijan from "../../assets/circuits/azerbaijan.svg";
import singapore from "../../assets/circuits/singapore.svg";
import united_states from "../../assets/circuits/united_states.svg";
import mexico from "../../assets/circuits/mexico.svg";
import brazil from "../../assets/circuits/brazil.svg";
import las_vegas from "../../assets/circuits/las_vegas.svg";
import qatar from "../../assets/circuits/qatar.svg";
import abu_dhabi from "../../assets/circuits/abu_dhabi.svg";

const circuitImages = {
    "Australian Grand Prix": australia,
    "Chinese Grand Prix": china,
    "Japanese Grand Prix": japan,
    "Bahrain Grand Prix": bahrain,
    "Saudi Arabian Grand Prix": saudi_arabia,
    "Miami Grand Prix": miami,
    "Emilia Romagna Grand Prix": emilia_romagna,
    "Monaco Grand Prix": monaco,
    "Spanish Grand Prix": spain,
    "Canadian Grand Prix": canada,
    "Austrian Grand Prix": austria,
    "British Grand Prix": britain,
    "Belgian Grand Prix": belgium,
    "Hungarian Grand Prix": hungary,
    "Dutch Grand Prix": netherlands,
    "Italian Grand Prix": italy,
    "Azerbaijan Grand Prix": azerbaijan,
    "Singapore Grand Prix": singapore,
    "United States Grand Prix": united_states,
    "Mexico City Grand Prix": mexico,
    "São Paulo Grand Prix": brazil,
    "Las Vegas Grand Prix": las_vegas,
    "Qatar Grand Prix": qatar,
    "Abu Dhabi Grand Prix": abu_dhabi,
    "Brazilian Grand Prix": brazil,
};

function TopSection({ raceData }) {

    if (!raceData) {
        return <h2>Loading...</h2>;
    }

    const getCountdown = (date) => {
        const today = new Date();
        const raceDay = new Date(date);

        const diff = raceDay - today;
        const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

        if (days <= 0) return "TODAY";
        if (days === 1) return "1 DAY";

        return `${days} DAYS`;
    };

    const formatDate = (date) => {
        return new Date(date)
            .toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
            })
            .toUpperCase();
    };


    if (raceData.status === "RACE_WEEKEND") {

        return (

            <section className="racehub">

                <h1 className="racehub-heading">
                    RACE HUB
                </h1>

                <div className="racehub-grid">

                    <div className="racehub-box">

                        <div className="racehub-header">

                            <span>🏁 RACE WEEKEND</span>

                            <div className="round-pill">
                                ROUND {raceData.race.round}
                            </div>

                        </div>

                        <h2>
                            {raceData.race.grandPrix.toUpperCase()}
                        </h2>

                        <div className="racehub-content">

                            <div className="racehub-left">

                                <div className="info-block">

                                    <label>CIRCUIT</label>

                                    <p>{raceData.race.circuit}</p>

                                </div>

                                <div className="info-block">

                                    <label>COUNTRY</label>

                                    <p>{raceData.race.country}</p>

                                </div>

                                <div className="info-block">

                                    <label>DATE</label>

                                    <p>{formatDate(raceData.race.date)}</p>

                                </div>

                            </div>

                            <div className="racehub-right">

                                <img
                                    src={circuitImages[raceData.race.grandPrix]}
                                    className="circuit-image"
                                    alt={raceData.race.grandPrix}
                                />

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        );

    }
    if (raceData.status === "OFF_WEEKEND") {

        return (

            <section className="racehub">

                <h1 className="racehub-heading">
                    RACE HUB
                </h1>

                <div className="racehub-grid">

                    {/* Latest GP */}

                    <div className="racehub-box">

                        <div className="racehub-header">

                            <span>LATEST GRAND PRIX</span>

                            <div className="round-pill">
                                ROUND {raceData.latestRace.round}
                            </div>

                        </div>

                        <h2>
                            {raceData.latestRace.grandPrix.toUpperCase()}
                        </h2>

                        <div className="racehub-content">

                            <div className="racehub-left">

                                <div className="info-block">

                                    <label>WINNER</label>

                                    <p>{raceData.latestRace.winner}</p>

                                </div>

                                <div className="info-block">

                                    <label>CIRCUIT</label>

                                    <p>{raceData.latestRace.circuit}</p>

                                </div>

                                <div className="info-block">

                                    <label>COUNTRY</label>

                                    <p>{raceData.latestRace.country}</p>

                                </div>

                                <div className="info-block">

                                    <label>DATE</label>

                                    <p>{formatDate(raceData.latestRace.date)}</p>

                                </div>

                            </div>

                            <div className="racehub-right">

                                <img
                                    src={circuitImages[raceData.latestRace.grandPrix]}
                                    className="circuit-image"
                                    alt={raceData.latestRace.grandPrix}
                                />

                            </div>

                        </div>

                    </div>

                    {/* Next GP */}

                    <div className="racehub-box">

                        <div className="racehub-header">

                            <span>NEXT GRAND PRIX</span>

                            <div className="round-pill">
                                ROUND {raceData.nextRace.round}
                            </div>

                        </div>

                        <h2>
                            {raceData.nextRace.grandPrix.toUpperCase()}
                        </h2>

                        <div className="racehub-content">

                            <div className="racehub-left">

                                <div className="info-block">

                                    <label>STARTS IN</label>

                                    <p className="countdown">
                                        {getCountdown(raceData.nextRace.date)}
                                    </p>

                                </div>

                                <div className="info-block">

                                    <label>CIRCUIT</label>

                                    <p>{raceData.nextRace.circuit}</p>

                                </div>

                                <div className="info-block">

                                    <label>COUNTRY</label>

                                    <p>{raceData.nextRace.country}</p>

                                </div>

                                <div className="info-block">

                                    <label>DATE</label>

                                    <p>{formatDate(raceData.nextRace.date)}</p>

                                </div>

                            </div>

                            <div className="racehub-right">

                                <img
                                    src={circuitImages[raceData.nextRace.grandPrix]}
                                    className="circuit-image"
                                    alt={raceData.nextRace.grandPrix}
                                />

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        );

    }

    // ================= LIVE WEEKEND =================

    return (

        <section className="top-section">

            <div className="race-info">

                <h1>{raceData.race.grandPrix}</h1>

                <p>{raceData.race.circuit}</p>

                <InfoCard raceData={raceData.race} />

            </div>

            <LiveStandings />

        </section>

    );

}

export default TopSection;