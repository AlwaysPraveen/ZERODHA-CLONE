const {Schema} = require('mongoose');
const bcrypt = require("bcryptjs");

const UserSchema = new Schema({
    fullName: {
        type: String,
        required: [true, "Your username is required"],
    },
    email: {
        type: String,
        required: [true, "Your email address is required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Your password is required"],
    },
    userType: {
        type: String,
        enum: ["admin", "customer"], //  Allowed user types
        default: "customer", //  Default user type
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },      
});

UserSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 12);
});

module.exports = {UserSchema};