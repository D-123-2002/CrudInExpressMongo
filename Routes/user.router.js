const express=require("express");
const router=express.Router();
const userController=require('../controller/user.controller')

router.get('/',userController.displayAllContact)

router.get('/show-contact/:id',userController.displaySingledata)

router.get('/add-contact',userController.displayForm)

router.post('/add-contact',userController.saveData)

router.get('/update-contact/:id',userController.updatePage)

router.post('/update-contact/:id',userController.UpdateData)

router.get('/delete-contact/:id',userController.deleteData)

module.exports=router;