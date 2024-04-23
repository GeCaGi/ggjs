const {Router} = require('express');
const router = Router();
const getUser = require("./authentication/user")

async function test(req, res){
    const tony = req.body
    console.log(tony)
    return 400
}

const NULL = () => null

router.get('/users', getUser);
router.get('/users/:email', NULL);
router.post('/test', test);
router.post('/users', NULL);
router.post('/register', NULL);
router.post('/login', NULL);
router.put('/users/:email', NULL);
router.delete('/users/:email', NULL);

module.exports = {router};