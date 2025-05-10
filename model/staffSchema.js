const mongoose=require('mongoose');

const staffSchema=new mongoose.Schema({
    Name:String,
    Subject: String
})

const staffmodel =mongoose.model('staffs',staffSchema);

module.exports=staffmodel;
