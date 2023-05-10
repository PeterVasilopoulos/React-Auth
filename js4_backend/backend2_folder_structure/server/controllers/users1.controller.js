const users = require("../models/user.model")

module.exports.testAPI = (req, res) => {
    res.json({ message: "Hello World" });
}

module.exports.allUsers = (req, res) => {
    res.json(users)
    //response.data : {users: [a, b, c ]}  response.data: [user1, user2, user3]
}

module.exports.oneUser = (req, res) => {
    const paramsId = req.params.id;
    res.json(users[paramsId]);
}

module.exports.createUser = (req, res) => {
    const formData = req.body;
    users.push(formData);
    res.json(formData);
}

module.exports.updateUser = (req, res) => {
    const paramsId = req.params.id;
    const formData = req.body;
    users[paramsId] = formData;
    res.json(users[paramsId]);
}

module.exports.deleteUser = (req, res) => {
    const paramsId = req.params.id;
    users.splice(paramsId, 1);
    res.json({ status: "ok" });
}
