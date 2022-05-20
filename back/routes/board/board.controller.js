const pool = require('../../db');

const list = (req, res) => {

    res.send('list');
};

const view = async (req, res) => {
    console.log('board view : ' +req.query.idx)
    try {
        const [result] = await pool.query(`SELECT * FROM board WHERE idx = '${req.query.idx}'`)
        res.json(result);
    } catch(e) {
        console.error(e)
    }
   
};

const write = async (req, res) => {
   
    try{
        const { userId, subject, content } = req.body.data
        console.log('board write : ' + req.body.data)
        const [result] = await pool.query(`INSERT INTO board(userId, subject, content) VALUES('${userId}', '${subject}', '${content}')`)
        res.json(result.data)
    }
    catch(e) {
        console.error(e)
    }
};

const modify = async (req, res) => {
    try{
        const { subject, content } = req.body
        console.log('modify : ' + req.body)
        res.send('asdf')
    }
    catch(e) {
        console.error(e)
    }
};

module.exports = {
    list,
    view,
    write,
    modify,
}

