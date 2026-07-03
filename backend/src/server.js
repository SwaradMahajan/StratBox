import express from "express";
import cors from "cors";
import standingsRoutes from "./routes/standingsRoutes.js";
import raceRoutes from "./routes/raceRoutes.js";
import driversRoutes from "./routes/driversRoutes.js";
import strategyRoutes from "./routes/strategyRoutes.js";
import resultsRoutes from "./routes/resultsRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/race", raceRoutes);
app.use("/api/standings", standingsRoutes);
app.use("/api/drivers", driversRoutes);
app.use("/api/strategy", strategyRoutes);
app.use("/api/results", resultsRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to StratBox API 🚀",
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});