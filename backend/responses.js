const Response = {
    // Success responses
    success             : {code: 200, message:"success"},
    // -----------------------------------------------------

    // Server Error responses
    server_error        : {code:500, message: "server error"},

    // Content responses
    email_required      : {code: 1, message:"email required"},
    password_required   : {code: 2, message:"password required"},
    username_required   : {code: 3, message:"username required"},
    user_already_exists : {code: 4, message:"user already exists"},
    wrong_password      : {code: 5, message:"wrong password"},
    //------------------------------------------------------
}

module.exports = { Response }