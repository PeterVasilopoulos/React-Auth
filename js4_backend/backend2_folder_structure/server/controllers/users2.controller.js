const users = require("../models/user.model")

module.exports = {
    testAPI :  (req, res)=>{
        res.json({message: "Hello World"});
    },
    allUsers : (req, res)=>{
        res.json(users) 
        //response.data : {users: [a, b, c ]}  response.data: [user1, user2, user3]
    },

    oneUser : (req, res)=>{
        const paramsId = req.params.id;
        res.json(users[paramsId]);
    } ,

    createUser:  (req, res)=>{
        const formData = req.body;
        users.push(formData);
        res.json(formData);
    },

    updateUser : (req, res)=>{
        const paramsId = req.params.id;
        const formData = req.body;
        users[paramsId] = formData;
        res.json(users[paramsId]);
    },

    deleteUser: (req, res)=>{
        const paramsId = req.params.id;
        users.splice(paramsId, 1);
        res.json({status : "ok"});
    }
}

