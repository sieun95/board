const pool = require('../../db')

const signUp = async (req, res) => {
    const {userId, pwd} = req.body
    console.log('signUp req.body')
    console.log(req.body)
    try{
        const [exist] = await pool.query(`SELECT * FROM userInfo WHERE userId = '${userId}'`);
        if (exist.length === 0) {
            await pool.query(`INSERT INTO userInfo(userId, pwd) VALUES('${userId}', '${pwd}')`)
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
    console.log("login req.body")
    console.log(req.body)
    const { userId, pwd } = req.body
    try{
        const [idResult] = await pool.query(`SELECT * FROM userInfo WHERE userId='${userId}'`)
        const [pwdResult] = await pool.query(`SELECT * FROM userInfo WHERE pwd='${pwd}'`)
        // const [exist] = await pool.query(`SELECT * FROM userInfo WHERE userId = '${userId}'`);
        if(idResult.length === 0 || pwdResult.length === 0) {
            res.send('login error')
        }else{
            res.send('login success')
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