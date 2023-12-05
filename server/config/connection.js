const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://kalanij94:v6BU!vnmNTKDTmF@cluster0.vd0xbcj.mongodb.net/',{
}
);

module.exports = mongoose.connection;
