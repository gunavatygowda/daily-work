const { response } = require("express");



exports.getAllNotes = async(request,response) =>{
    console.log(request.method);
    request.send(200);
}