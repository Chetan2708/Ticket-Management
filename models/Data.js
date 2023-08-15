const mongoose = require("mongoose");


const ticketSchema = new mongoose.Schema({
  id: String,
  TicketValue: String,
  priorityValue: String,
  desc:String,
});

const TicketModel = mongoose.model("Ticket", ticketSchema);

module.exports = {

  TicketModel,
};
