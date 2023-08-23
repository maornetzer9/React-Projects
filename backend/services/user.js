const { Response } = require("../responses.js");
const { User } = require("../schemas/user.js");
const { utils } = require("../utils.js");

class UserService {
    
    async signup(request)
    {
        let values = {};
        const response = Response.success;

        const {email, password, username} = request.body;
        
        if(!email) return Response.email_required;
        if(!password) return Response.password_required;
        if(!username) return Response.username_required;

        const isUserExists = await User.findOne({email:email});

        if(isUserExists) return Response.user_already_exists; 

        const user = new User({email, password, username});

        const newUser = await user.save();

        values.user = newUser;

        return {...response, ...values};

    }

    async signin(request)
    {
        const values = {};
        const response = Response.success;

        const {password, email} = request.body;

        if(!password) return Response.password_required;
        if(!email) return Response.email_required;

        const user = await User.findOne({email:email});

        const valid = utils.compare_hash(password, user.password);

        if(!valid) return Response.wrong_password;

        values.user_id = user._id;

        return {...response, ...values};
    }
}

module.exports = { UserService }