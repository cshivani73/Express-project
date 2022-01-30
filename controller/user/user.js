const db =require('../../config');
const User = require('../../models/user');

module.exports.getuser = async(req, res)=>{

  let users= await User.findAll();
  console.log(users);
  res.send(user);
}