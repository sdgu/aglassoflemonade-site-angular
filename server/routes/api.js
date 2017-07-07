const express = require("express");
const router = express.Router();
const app = express();
const jwt = require("express-jwt");

// require("../../env");

const authCheck = jwt(
{
	secret: process.env.AUTH0_SECRET,
	audience: process.env.AUTH0_CLIENT_ID
});


router.get("/test", authCheck, (req, res) =>
{
	let test = 
	[
		{
			word: "hi"
		},
		{
			word: "o.o"
		}
	];
	// let test = ["hi", "o.o"];
	res.json(test);
})

router.get("/pasta", (req, res) =>
{
	let test = ["o.o", "abc"];
	res.send(test);
})

module.exports = router;