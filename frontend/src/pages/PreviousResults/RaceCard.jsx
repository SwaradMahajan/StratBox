import "./RaceCard.css";

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
    "Brazilian Grand Prix": brazil,
    "São Paulo Grand Prix": brazil,
    "Las Vegas Grand Prix": las_vegas,
    "Qatar Grand Prix": qatar,
    "Abu Dhabi Grand Prix": abu_dhabi,
};

function formatDate(date) {
    return new Date(date)
        .toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        })
        .toUpperCase();
}

function RaceCard({ race, onView }) {

    return (

        <div className="racehub-box">

            <div className="racehub-header">

                <span>GRAND PRIX</span>

                <div className="round-pill">
                    ROUND {race.round}
                </div>

            </div>

            <h2>{race.raceName.toUpperCase()}</h2>

            <div className="racehub-content">

                <div className="racehub-left">

                    <div className="info-block">

                        <label>WINNER</label>

                        <p>{race.winner}</p>

                    </div>

                    <div className="info-block">

                        <label>CIRCUIT</label>

                        <p>{race.circuit}</p>

                    </div>

                    <div className="info-block">

                        <label>COUNTRY</label>

                        <p>{race.country}</p>

                    </div>

                    <div className="info-block">

                        <label>DATE</label>

                        <p>{formatDate(race.date)}</p>

                    </div>

                </div>

                <div className="racehub-right">

                    <img
                        src={circuitImages[race.raceName]}
                        alt={race.raceName}
                        className="circuit-image"
                    />

                </div>

            </div>

            <button
                className="results-btn"
                onClick={() => onView(race.round)}
            >
                View Full Results →
            </button>

        </div>

    );
}

export default RaceCard;