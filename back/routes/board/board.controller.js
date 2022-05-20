const pool = require('../../db');

const list = async (req, res) => {
    try{
        const [result] = await pool.query(`SELECT * FROM board`)
        res.json(result)
    }
    catch (e) {
        console.log(e)
    }
};

const view = async (req, res) => {
    console.log('board view')
    console.log(req.params)
    try {
        const [result] = await pool.query(`SELECT * FROM board WHERE idx = '${req.params.idx}'`)
        res.json(result);
    } catch(e) {
        console.error(e)
    }
};

const write = async (req, res) => {
    try{
        const { userId, subject, content } = req.body.data
        console.log('board write')
        console.log(req.body.data)
        const [result] = await pool.query(`INSERT INTO board(userId, subject, content) VALUES('${userId}', '${subject}', '${content}')`)
        res.json(result.data)
    }
    catch(e) {
        console.error(e)
    }
};

const modify = async (req, res) => {
    console.log('modify req.body')
    console.log(req.body)
    try{
        const { subject, content, idx, date } = req.body
        const [result] = await pool.query(`UPDATE board SET subject='${subject}', content='${content}' WHERE idx='${idx}'`)
        res.send('수정된다 확인했다')
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

