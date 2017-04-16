const express = require("express");
const router = express.Router();
const app = express();
const jwt = require("express-jwt");

require("../../env");

const authCheck = jwt(
{
	secret: new Buffer(process.env.AUTH0_SECRET, "base64"),
	audience: process.env.AUTH0_CLIENT_ID
});


router.get("/test", (req, res) =>
{
	let test = ["hi"];
	res.json(test);
})


module.exports = router;