import standings from "../data/standings.js";

export const getStandings = (req, res) => {
  res.json(standings);
};