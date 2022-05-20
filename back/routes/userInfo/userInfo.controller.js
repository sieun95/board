const pool = require('../../db')

const signUp = async (req, res) => {
    const {userId, pwd} = req.body
    console.log('req : ' + req.body)
    try{
        const [exist] = await pool.query(`SELECT * FROM userInfo WHERE userId = '${userId}'`);
        if (exist.length === 0) {
            await pool.query(`INSERT INTO userInfo(userId, pwd) VALUES('${userId}', '${pwd}')`)
            res.send('success')
        } else {
            console.log('signup id already exists')
            res.json('error')
        }
    }catch(e) {
        console.error(e)
    } 
    
};


const login = async (req, res) => {
    console.log("data : " + req.body.data)
    try{

    }
    catch(e) {
        console.error(e)
    }
    const [result] = await pool.query(`SELECT * FROM userInfo WHERE userId='${req.body.data}'`)
    console.log("resutl : " + result)
    res.json(result)
};

module.exports = {
    signUp,
    login,
}