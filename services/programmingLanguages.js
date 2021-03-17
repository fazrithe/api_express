const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(
        `select id, name, gender from users limit ?,?`,
        [offset, config.listPerPage]  
    );

    const data = helper.emptyOrRows(rows);
    const meta = {page};

    return {
        data,
        meta
    }
}

async function create(programmingLanguage) {
    const result = await db.query(
        `insert into users
        (name, gender) values (?, ?)`,
        [
            programmingLanguage.name, programmingLanguage.gender
        ]
    );

    let message = 'Error in insert user';

    if(result.affectedRows) {
        message = 'Programming language';
    }

    return {message};
}

async function update(id, programmingLanguage){
    const result = await db.query(
        `update users set name=?, gender=? where id=?`,
        [
            programmingLanguage.name, programmingLanguage.gender, id
        ]
    );

    let message = 'Error in updateing users';

    if (result.affectedRows){
        message = "User update successfully"
    }

    return {message}
}

async function remove(id){
    const result = await db.query(
        `delete from users where id=?`,
        [id]
    );

    let message = 'Error in deleting user';

    if (result.affectedRows){
        message = 'User deleted seuccessfully';
    }

    return {message}
}


module.exports = {
    getMultiple,
    create,
    update,
    remove
}