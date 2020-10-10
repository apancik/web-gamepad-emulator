const robot = require("robotjs");
robot.setKeyboardDelay(0);

const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static("public"));

app.post("/", function (request, response) {
	console.log(`received ${JSON.stringify(request.body)}`);
	robot.keyToggle(request.body.key, request.body.state);
	response.send(`key tap ${request.body.key}`);
});

app.listen(port, () => {
	console.log(`Web Gamepad Emulator app listening at http://localhost:${port}`);
});
