// let ambiente_processo = 'producao';
let ambiente_processo = "desenvolvimento";

let caminho_env = ambiente_processo === "producao" ? ".env" : ".env.dev";

require("dotenv").config({ path: caminho_env });

let express = require("express");
let cors = require("cors");
let path = require("path");
let PORTA_APP = process.env.APP_PORT;
let HOST_APP = process.env.APP_HOST;

let app = express();

let enterprisesRouter = require("./src/routes/enterprises");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/enterprises", enterprisesRouter);

app.listen(PORTA_APP, function () {
  console.log(`${process.env.AMBIENTE_PROCESSO}: http://${HOST_APP}:${PORTA_APP}`);
});
