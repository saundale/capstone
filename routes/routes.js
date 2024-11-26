const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');


router.get('/allservices', controller.getAllServices);
router.get('/service/:type', controller.getServiceByType);
router.post('/service/type/form', controller.createRequest);
router.post('/member', controller.registerMember);
router.post('/service/type/calculate', controller.calculateEMI);
router.put('/updaterequest', controller.updateRequest);
router.put('/updatepassword', controller.updatePassword);
router.delete('/deleterequest', controller.deleteRequest);
router.delete('/cancelmember', controller.cancelMember);

module.exports = router;