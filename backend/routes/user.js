const { Response } = require("../responses");
const { UserService } = require("../services/user");

const router = require("express").Router();

router.post("/signup", async (req ,res) => {
    try
    {
        const response = await new UserService().signup(req);
        res.status(200).send(response);
    }
    catch(error)
    {
        console.log(error)
        res.status(500).send(Response.server_error);
    }

})

router.post("/signin", async (req ,res) => {
    try
    {
        const response = await new UserService().signin(req);
        res.status(200).send(response);
    }
    catch(error)
    {
        console.log(error)
        res.status(500).send(Response.server_error);
    }
})

module.exports = { userRouter: router };