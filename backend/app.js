const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const csurf = require("csurf");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");

const routes = require("./routes");

const { environment } = require("./config");
const isProduction = environment === "production";

const app = express();

app.use(morgan("dev"));

app.use(cookieParser({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (!isProduction) {
  app.use(cors());
}

app.use(helmet({ contentSecurityPolicy: false }));

app.use(
  csurf({
    cookie: {
      secure: isProduction,
      sameSite: isProduction && "LAX",
      httpOnly: true,
    },
  })
);

app.use(routes);

module.exports = app;
