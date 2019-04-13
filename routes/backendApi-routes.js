const router = require('express').Router();
const axios = require('axios')

const key = 'trolololo84746dupa';
const encryptor = require('simple-encryptor')(key);
const backendUrl = process.env.API_URL

const api = axios.create({
    baseURL: backendUrl,
    auth: {
        username: process.env.BASIC_AUTH_USER,
        password: process.env.BASIC_AUTH_PASS
      },
  })

router.get('/getTopTen', async (req, res) => {
    try {
        const data = await api.get('/getTopTen')
        res.json(data.data)
      } catch (e) {
        res.status(e.response.status).json(e.response.data)
      }
})

router.get('/getMems', async (req, res) => {
    const { data } = await api.get('/getMems')
    const patchMem = backendUrl + data.patchFile
    res.json(patchMem)
})

router.post('/createAccount', async (req, res) => {
    var body = req.body.payload
    var passEncrypt = encryptor.encrypt(body.password)
      body.password = passEncrypt
      body.repassword = null
    const data = await api.post('/createAccount', body)
    res.json(data.statusCode)
});

router.get('/getProductBaseRelated', async (req, res) => {
    const data = await api.get(req.url)
    res.json(data.data)
})

router.get('/getProductBase', async (req, res) => {
    const data = await api.get(req.url)
    res.json(data.data)
})

router.get('/getDeals', async (req, res) => {
    const data = await api.get('/getDeals')
    res.json(data.data)
})

router.post('/upVote/:dealId', async (req, res) => {
    const data = await api.post('/upVote/' + req.params.dealId, { fingerprint: req.fingerprint.hash })
    res.json(data.data)
})

router.get('/getUser/:userId', async (req, res) => {
    const data = await api.get('/getUser/' + req.params.userId)
    res.json(data.data)
})

router.get('/getUserDeals', async (req, res) => {
    const data = await api.get(req.url)
    res.json(data.data)
})

router.post('/createUser/', async (req, res) => {
    const data = await api.post('/createUser/', req.body)
    res.json(data.data)
})

router.get('/getUsers', async (req, res) => {
    const data = await api.get('/getUsers/')
    res.json(data.data)
})

router.post('/getUserByEmail/:email', async (req, res) => {
    const data = await api.post('/getUserByEmail/' + req.params.email)
    res.json(data.data)
})

router.post('/front/addDealByUser', async (req, res) => {
    const data = await api.post('/front/addDealByUser', { deal: req.body, fingerprint: req.fingerprint.hash })
    res.json(data.data)
})

router.post('/front/addDealByGuest', async (req, res) => {
    const data = await api.post('/front/addDealByGuest', { deal: req.body, fingerprint: req.fingerprint.hash })
    res.json(data.data)
})

module.exports = router;
