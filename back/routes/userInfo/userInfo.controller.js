const pool = require('../../db')

const signUp = async (req, res) => {
    const {userId, pwd} = req.body
    console.log('req : ' + req.body)
    try{
        const [result] = await pool.query(`INSERT INTO userInfo(userId, pwd) VALUES('${userId}', '${pwd}')`)
        console.log('signUp : ' + result)
        res.json(result)
    }catch(e) {
        console.error(e)
    }

};


const login = async (req, res) => {
    console.log("data : " + req.body.data)
    const [result] = await pool.query(`SELECT * FROM userInfo WHERE userId='${req.body.data}'`)
    console.log("resutl : " + result)
    res.json(result)
};

module.exports = {
    signUp,
    login,
}