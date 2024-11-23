import * as dotenv from 'dotenv';
import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import helmet from 'helmet';
import passport from 'passport';
import rateLimit from 'express-rate-limit';

dotenv.config({ path: `${__dirname}/.env` }); 


if (!process.env.PORT) {
  throw new Error('Environment variable PORT is missing');
}


const allowedOrigins = ['http://localhost:5173', process.env.PORT as String];


const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100, 
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true, 
  legacyHeaders: false, 
});


const corsOptions: cors.CorsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};


const app = express();


app.use(passport.initialize());
app.use(rateLimiter);
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'", 'https:'],
        imgSrc: ["'self'", 'data:'],
        connectSrc: ["'self'"],
      },
    },
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors(corsOptions));


app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    res.status(500).json({ message: err.message });
  } else {
    next();
  }
});


const PORT = parseInt(process.env.PORT, 10) || 8081;


app.get('/', (req: Request, res: Response) => {
  const local = req.hostname;
  res.send(`Server is running at ${local}:${PORT}`);
});


app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
