const pool = require('../../db');

const list = (req, res) => {
    res.send('list');
};

const view = (req, res) => {
    res.send('view');
};

const write = (req, res) => {
    res.send('write');
};

const modify = (req, res) => {
    res.send('modify');
};

module.exports = {
    list,
    view,
    write,
    modify
}

