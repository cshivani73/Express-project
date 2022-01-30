const { Router } = require('express');
const mycontroller = require('../controller/user/user');

Router.get('/user',mycontroller.getuser);
Router.post('/user',mycontroller.postuser);
Router.put('/user', mycontroller.putuser);
Router.delete('/user',mycontroller.deleteuser);

module.exports = Router ;