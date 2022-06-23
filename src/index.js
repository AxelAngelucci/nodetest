import express from "express";
import morgan from "morgan";
import router from "./routes/index.routes.js";
import cors from "cors";
const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(router);

app.listen("3001",()=>{
    console.log("listen...");
});
