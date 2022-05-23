const pool = require('../../db')

const signUp = async (req, res) => {
    const {userId, pwd} = req.body
    console.log('signUp req.body')
    console.log(req.body)
    try{
        const [exist] = await pool.query(`SELECT * FROM userInfo WHERE userId = '${userId}'`);
        if (exist.length === 0) {
            await pool.query(`INSERT INTO userInfo(userId, pwd, blike) VALUES('${userId}', '${pwd}', '[]')`)
            res.send('signUp success')
        } else {
            console.log('signup id already exists')
            res.json('signUp error')
        }
    }catch(e) {
        console.error(e)
    } 
};


const login = async (req, res) => {
    const { userId, pwd } = req.body
    try{
        const [result] = await pool.query(`SELECT * FROM userInfo WHERE userId='${userId}' AND pwd='${pwd}'`)
        if(result.length === 0) {
            console.log(result)
            res.send('login error')
        }else{
            console.log(result)
            res.json(result)
        }
    }
    catch(e) {
        console.error(e)
    }
};

module.exports = {
    signUp,
    login,
}