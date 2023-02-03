import * as dotenv from "dotenv";

import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import passport from "passport";
import rateLimit from "express-rate-limit";

dotenv.config({ path: __dirname + "/.env" }); // env file is expose, dont forget to include in the .gitignore file

const allowedOrigins = ["http://localhost:5173/"]; // the URI you want CORS to allow

const rateLimitOptions = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
};

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

const app = express();
app.use(passport.initialize());
app.use(rateLimit(rateLimitOptions));
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
    },
  })
);

const PORT = parseInt(process.env.PORT as string, 10) || 8081;

app.use(express.json());
app.use(helmet());
app.get("/", (req, res) => {
  res.send(`Server is Operating ${PORT}`);
});
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(options));



app.listen(PORT, () => {
  console.log(`App is running on 🚀  ${PORT}`);
});
