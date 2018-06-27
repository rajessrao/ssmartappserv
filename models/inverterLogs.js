var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('InverterLog', new Schema({
    SID: String,
    Time: Date,
    IphA: Number,
    IphB: Number,
    IphC: Number,
    VphA: Number,
    VphB: Number,
    VphC: Number,
    W: Number,
    Hz: Number,
    VA: Number,
    Var: Number,
    PF: Number,
    WH: Number,
    DCA: Number,
    DCV: Number,
    DCW: Number
}));