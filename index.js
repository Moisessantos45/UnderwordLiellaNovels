import express from 'express';
import router from './routes/index.js';
import db from "./config/db.js"
import { fileURLToPath } from 'url';
import path from 'path';
import crypto from 'crypto';
import cookieParser from 'cookie-parser'
import dotenv from "dotenv"
import redis from 'redis';
import RedisStore from "connect-redis"
import session from 'express-session';
import { createClient } from "redis"
 
dotenv.config();
const app = express();
// Conectar a la base de datos
db.authenticate()
    .then(() => console.log("Base de datos conectada"))
    .catch(error => console.log(error));

const port = process.env.PORT || 4000;

let redisClient = createClient({
    url: process.env.REDISCLOUD_URL
});

redisClient.connect().catch(console.error);

let redisStore = new RedisStore({
    client: redisClient,
    prefix: "myapp:",
});

const secret = crypto.randomBytes(32).toString('hex');

app.use(cookieParser());
app.use(
    session({
        store: redisStore,
        resave: false,
        saveUninitialized: false,
        secret: secret,
    })
);

// Agregar body parser
app.use(express.urlencoded({ extended: true }));

// Configurar vistas de Pug
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Agregar carpeta pública para archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Agregar router
app.use("/", router);
app.listen(port, () => {
    console.log(`El servidor está funcionando en el puerto ${port}`);
});
