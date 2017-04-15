const express = require("express");
const path = require("path");
const http = require("http");
const bodyParser = require("body-parser");
const favicon = require("serve-favicon");

const helmet = require("helmet");
const cors = require("cors");
const api = require("./server/routes/api");

// require("./env");

const app = express();

app.use(helmet());
app.use(cors());

app.use(favicon(path.join(__dirname, "src/assets", "faviconglass.png")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, "/dist")));

app.use("/api", api);

app.get("*", (req, res) =>
{
	if (req.url.indexOf("/api/") > -1)
	{
		res.send(req.body);
	}
	else if (req.url.indexOf(".png") > -1)
	{
		res.sendFile(__dirname + "/src/assets/faviconglass.png");
	}
	else
	{
		res.sendFile(path.join(__dirname, "dist/index.html"));
	}
});

const port = process.env.PORT || "4210";
app.set("port", port);

const server = http.createServer(app);

server.listen(port, () =>
{
	console.log(`API running on port ${port}`);
});