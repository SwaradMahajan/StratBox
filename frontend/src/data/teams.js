import { TEAM_IDS } from "../constants/teamIds";

import mclarenLogo from "../assets/teams/mclaren.svg";
import ferrariLogo from "../assets/teams/ferrari.svg";
import redbullLogo from "../assets/teams/redbull.svg";
import mercedesLogo from "../assets/teams/mercedes.svg";
import astonLogo from "../assets/teams/astonmartin.svg";
import alpineLogo from "../assets/teams/alpine.svg";
import haasLogo from "../assets/teams/haas.svg";
import williamsLogo from "../assets/teams/williams.svg";
import racingBullsLogo from "../assets/teams/racingbulls.svg";
import audiLogo from "../assets/teams/audi.svg";
import cadillacLogo from "../assets/teams/cadillac.svg";

const teams = [
  {
    id: TEAM_IDS.MCLAREN,
    name: "McLaren",
    logo: mclarenLogo,
    color: "#FF8700",
  },
  {
    id: TEAM_IDS.FERRARI,
    name: "Ferrari",
    logo: ferrariLogo,
    color: "#DC0000",
  },
  {
    id: TEAM_IDS.RED_BULL,
    name: "Red Bull",
    logo: redbullLogo,
    color: "#1E5BC6",
  },
  {
    id: TEAM_IDS.MERCEDES,
    name: "Mercedes",
    logo: mercedesLogo,
    color: "#00D2BE",
  },
  {
    id: TEAM_IDS.ASTON_MARTIN,
    name: "Aston Martin",
    logo: astonLogo,
    color: "#006F62",
  },
  {
    id: TEAM_IDS.ALPINE,
    name: "Alpine",
    logo: alpineLogo,
    color: "#0090FF",
  },
  {
    id: TEAM_IDS.HAAS,
    name: "Haas",
    logo: haasLogo,
    color: "#B6BABD",
  },
  {
    id: TEAM_IDS.WILLIAMS,
    name: "Williams",
    logo: williamsLogo,
    color: "#005AFF",
  },
  {
    id: TEAM_IDS.RACING_BULLS,
    name: "Racing Bulls",
    logo: racingBullsLogo,
    color: "#6692FF",
  },
  {
    id: TEAM_IDS.AUDI,
    name: "Audi",
    logo: audiLogo,
    color: "#E30613",
  },
  {
    id: TEAM_IDS.CADILLAC,
    name: "Cadillac",
    logo: cadillacLogo,
    color: "#B7B7B7",
  },
];

export default teams;