const mongoose = require("mongoose");
module.exports.init = async function () {
  await mongoose.connect(
    "mongodb+srv://TicketDb:syCVlgdqawx3QWYO@cluster0.k0vuu9j.mongodb.net/TicketDatabase?retryWrites=true&w=majority"
  );
};
