const pool = require('../../db');

const profile = async (req, res) => {
    const [result] = await pool.query(`SELECT * FROM userInfo WHERE idx='${req.params.idx}'`)
    res.json(result);
}

const profileAction = async (req, res) => {
    console.log('profileAction')
    console.log(req.body)
    try{
        const {userId, pwd, idx} = req.body
        const [result] = await pool.query(`UPDATE userInfo SET userId='${userId}', pwd='${pwd}' WHERE idx='${idx}'`)
        res.json(result)
    }
    catch(e) {
        console.log(e)
    }
}

module.exports = {
    profile,
    profileAction,
}