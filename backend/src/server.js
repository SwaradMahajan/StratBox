import express from "express";
import cors from "cors";

import raceRoutes from "./routes/raceRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/race", raceRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to StratBox API 🚀",
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});