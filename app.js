import express from "express"
import cors from "cors"

import userRoutes from './src/routes/job.routes.js'
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/jobs", userRoutes);

export default app;