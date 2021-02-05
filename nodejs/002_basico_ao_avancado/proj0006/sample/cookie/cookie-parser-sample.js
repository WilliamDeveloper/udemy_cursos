const Express = require('express');
const App = Express();
const port = 80;

const CookieParser = require('cookie-parser');
App.use(CookieParser());

App.get("/send", (req, res) => {
    res.cookie("loggedin", "true");
    res.send("Cookie sent!");
});

App.get("/read", (req, res) => {

    let response = "Not logged in!";

    if(req.cookies.loggedin == "true") {
        response = "Yup! You are logged in!";
    }

    res.send(response);
});

App.listen(port, () => {
    console.log("Server running!");
});