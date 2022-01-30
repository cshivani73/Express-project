const db =require('../../config');

const sequelize = require('sequelize');
const user = db.define("user",{
 id:{
     type :sequelize.INTEGER,
     AutoIncrement : true ,
     allowNull :false,
 },
 name:{
   type : sequelize.STRING,
   allowNull:true
 },
 email:sequelize.STRING,
 allowNull:false
})
module.exports = user;