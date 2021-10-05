var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
	name: String,
	email: {
		type: String,
		unique: true,
		//figfggdbkljvvkjx
	},
	password: String,
	//sdsgadhgsahdgsahdgsha
	createdDate: {
		type: Date,
		default: Date.now,
	},
	avatar: String,
});

var User = mongoose.model("User", userSchema);

module.exports = User;
