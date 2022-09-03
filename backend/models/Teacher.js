const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StaffSchema = new Schema();

const Staff = mongoose.model("Staff", StaffSchema);

module.exports = Staff;
