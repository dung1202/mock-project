const { throws } = require("assert");
const express = require("express");
const path = require("path");
const constants = require("./constants");
const File = require("./model/file");

const router = express.Router();
router.post("/upload", constants.upload.single("file"), (req, res) => {
	let fileSave = new File({
		path: `./uploads/${req.file.originalname}`,
	});
	fileSave.save((err) => {
		if (err) throw err;
		console.log("File save successfully");
	});
	res.json({ data: fileSave });
});

router.get("/:name", (req, res) => {
	const fileName = req.params.name;
	console.log("fileName", fileName);
	if (!fileName) {
		return res.send({
			status: false,
			message: "no filename specified",
		});
	}
	res.sendFile(path.resolve(`./uploads/${fileName}`));
});

router.delete("/:name", (req, res) => {
	const fileName = req.params.name
	if (!fileName) {
		return res.send({
			status: false,
			message: "no filename specified",
		});
	}
	File.findOneAndDelete(fileName, (err,doc) =>{
		if (err) console.log(err)
		else res.json({ message: `Delete user ${req.params.name} successfully` });
	})
})

module.exports = router;
