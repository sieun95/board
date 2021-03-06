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
        const [[result]] = await pool.query(`SELECT * FROM board WHERE idx = '${req.params.idx}'`)
        res.json(result);
    } catch(e) {
        console.error(e)
    }
};


const viewAction = async (req, res) => {
    console.log('board view')
    console.log(req.body)
    const { idx, userId} = req.body
    // 1. userID정보 가지고오기
    // 2. userID정보 업데이트하기
    try {
        const [user] = await pool.query(`SELECT * FROM userInfo WHERE userId = '${userId}'`)
        console.log(user[0].bLike)
        // console.log(JSON.parse(user[0].bLike))
        let bLike = JSON.parse(user[0].bLike);
      
            // 포함하고 있을때 배열에서 제거
            if(bLike.includes(Number(idx))) {
                bLike = bLike.filter((likeCheck) => {
                    if(likeCheck !== Number(idx)) return likeCheck
                });
                console.log("filtered1: ", bLike);
            }
            else {
                bLike.push(Number(idx))
                console.log("filtered2: ", bLike);
            }
            bLike = JSON.stringify(bLike)
        
            // 포함 x => 배열에 추가
            await pool.query(`UPDATE userInfo SET bLike = '${bLike}' WHERE userId = '${userId}'`)
            const [[result]] = await pool.query(`SELECT * FROM board WHERE idx = '${req.body.idx}'`)
            
            res.json(result);
        } 
    catch(e) {
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
        await pool.query(`UPDATE board SET subject='${subject}', content='${content}' WHERE idx='${idx}'`)

        res.send('good')
    }
    catch(e) {
        console.error(e)
    }
};

const comment = async (req,res) => {
    try{
        const [comment] = await pool.query(`SELECT * FROM boardComment WHERE boardIdx = '${req.params.idx}'`)
        console.log(comment)
        res.json(comment)
    }
    catch(e) {
        console.error(e)
    }
}

const commentAction = async (req, res) => {
    try{
        const { cUser, cContent, boardIdx } = req.body
        console.log(boardIdx)
        await pool.query(`INSERT INTO boardComment(cUser, cContent, boardIdx) VALUES('${cUser}', '${cContent}', '${boardIdx}')`)
        res.json('comment success')
    }
    catch(e) {
        console.error(e)
    }
};

const likeAction = async (req, res) => {
    try{
        const [result] = await pool.query(`SELECT bLike FROM userInfo`)
        console.log(result)
        res.json(result)
    }
    catch(e) {
        console.error(e)
    }
}

const hit = async (req, res) => {
    try {
        const [result] =   await pool.query(`UPDATE board SET hit = hit + 1 WHERE idx = '${req.body.idx}'`)
        console.log(result)
        res.send('good')
    }
    catch(e) {
        console.error(e)
    }
}


module.exports = {
    list,
    view,
    viewAction,
    write,
    modify,
    comment,
    commentAction,
    likeAction,
    hit,
}

