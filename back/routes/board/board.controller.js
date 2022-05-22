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
        const { userId, subject, content } = req.body
        console.log('board write')
        console.log(req.body)
        const [result] = await pool.query(`INSERT INTO board(userId, subject, content) VALUES('${userId}', '${subject}', '${content}')`)
        res.json(result)
    }
    catch(e) {
        console.error(e)
    }
};

const modify = async (req, res) => {
    console.log('modify req.body')
    console.log(req.body)
    try{
        const { idx, subject, content} = req.body
        const [result] = await pool.query(`UPDATE board SET subject='${subject}', content='${content}' WHERE idx='${idx}'`)

        res.send('수정된다 확인했다')
    }
    catch(e) {
        console.error(e)
    }
};

const comment = async (req,res) => {
    try{
        const [comment] = await pool.query(`SELECT * FROM boardComment`)
        console.log(comment)
        res.json(comment)
    }
    catch(e) {
        console.error(e)
    }

}

const commentAction = async (req, res) => {
    console.log('boardCommentAction')
    console.log(req.body)
    try{
        const { idx, cUser, cContent, cLike } = req.body
        const [comment] = await pool.query(`INSERT INTO boardComment(cUser, cContent) VALUES('${cUser}', '${cContent}')`)
        res.json('comment success')
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
    comment,
    commentAction,
}

