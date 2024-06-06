const {Router} = require('express');
const router = Router();
const getUser = require("./authentication/user")
const {registerUser, verifyEmail} = require("./management/register")


const NULL = () => null

router.get('/users', getUser);
router.get('/users/:email', NULL);
router.post('/test', test);
router.post('/users', NULL);
router.post('/register', registerUser);
router.post('/login', NULL);
router.post('/api/register', registerUser);
router.post('/api/verify-email', verifyEmail);
router.put('/users/:email', NULL);
router.delete('/users/:email', NULL);

module.exports = {router};



async function test(req, res){
    const tony = req.body
    console.log(tony)
    return 400
}