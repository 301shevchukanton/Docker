const express = require ("express")
const app = express()
const {connectDB} = require("../utils/db")
const {port, host} = require("../configuration")
const {User} = require("../models/user")

connectDB()
	.on('eror', console.error.bind(console, 'connection error:'))
	.once("open", startServer)


function startServer() {
	app.listen(port, () => {
		console.log(`HAPI service is working on ${host} : ${port}`);
	});
}


app.get("/add", async (req, res) => {
	try { 
		const user = new User({userName:"Shevchuk Anton1"})
		await user.save()
		const users = await User.find()
		res.json({users})
	} catch(err) {
		res.send({err})
	}
})

app.get("/users", async (req, res) => {
	try { 
		const users = await User.find()
		res.json({users})
	} catch(err) {
		res.send({err})
	}
})