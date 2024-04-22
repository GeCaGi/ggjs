const {Router} = require('express');
const router = Router();


async function test(req, res){
    let _req = await req.body
    console.log(_req)
    return 400
}

const NULL = () => null

router.get('/users', NULL);
router.get('/users/:email', NULL);
router.post('/test', test);
router.post('/users', NULL);
router.post('/register', NULL);
router.post('/login', NULL);
router.put('/users/:email', NULL);
router.delete('/users/:email', NULL);

module.exports = {router};