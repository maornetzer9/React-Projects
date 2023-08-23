const express = require("express");
const app = express();
const { userRouter } = require("./routes/user.js");
const path = require("path");
const { connect } = require("mongoose");

connect("mongodb://127.0.0.1:27017/first_project_with_react")
.then(({connections}) => 
{
    const {host, port, name} = connections[0];
    console.log({host, port, name});
})
.catch(error => 
{
    console.log("DB error:", error);
})

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")))

app.use("/user", userRouter);

const PORT = 5050;
app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`));