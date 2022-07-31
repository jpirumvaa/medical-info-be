import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import routes from "./routes/index";
import controllDb from "./services/dbService";

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));
app.use(express.json({ limit: "50mb" }));


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
    res.header(
        "Access-Control-Allow-Headers",
        "Accept, Content-Type, Authorization, X-Requested-With"
    );
    next();
});

app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use("/api", routes);
app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to medical info system" });
});
app.use((req, res, next) => {
    res.status(404).json({ error: "Not found" });
});
controllDb([
    {
        "2000": "Malaria",
        "2001": "lyphbia",
        "2002": "fever",
        "tag": "patient"
    },
    {
        "2000": "Typhoid",
        "2001": "Neurophobia",
        "2002": "Diarheaa",
        "tag": "patient"
    },
    {
        "2000": "Hiv",
        "2001": "tactophoibia",
        "2002": "Malaria",
        "tag": "patient"
    },
    {
        "2000": "Cancer",
        "2001": "lusophobia",
        "2002": "marasme",
        "tag": "patient"
    }
]
);

app.listen(
    port,
    console.log(`Server started at ${process.env.APP_URL}:${port}`)
);
