const { createNextState } = require('@reduxjs/toolkit');
const userModel = require('../db/model');

module.exports = {
    saveUserToDB: (req, res, next) => {
        const {username, password} = req.body;
        console.log(req.body);
        console.log(username, password);
        userModel.create({username: username, password: password})
            .then(data => {
                console.log('Successful save')
                next();
            })
            .catch(err => next({
                log: 'userController.saveUserToDB',
                status: 400,
                message: {err: 'userController.saveUserToDB - Error!'}
            }))
    },
    // findUsersToDB: () => {
    //     userModel.find()
    // }
}