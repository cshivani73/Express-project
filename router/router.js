const express = require('express');
const router = express.Router();
const mycontroller = require('../controller/user/user');

router.get('/',mycontroller.getuser);
router.post('/',mycontroller.postuser);
router.put('/', mycontroller.putuser);
router.delete('/',mycontroller.deleteuser);

module.exports = router ;