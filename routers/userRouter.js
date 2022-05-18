const express=require('express');
const { createUser, loginUser, updateUserProfile } = require('../controllers/userController');
const{protect}=require('../middlewares/AuthoMiddleware')

const router=express.Router();

router.post('/create',createUser)
router.post('/login',loginUser)
router.patch('/update',protect,updateUserProfile)

module.exports=router