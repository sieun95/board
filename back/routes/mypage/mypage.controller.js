const pool = require('../../db');

const profile = async (req, res) => {
    
    const [result] = await pool.query(`SELECT * FROM userInfo WHERE idx='${req.body.idx}'`)
    res.json(result);
}

module.exports = {
    profile,
}