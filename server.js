const robot = require("robotjs");
robot.setKeyboardDelay(0);

const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static("public"));

const keyMap = {
	"key-up": "up",
	"key-right": "right",
	"key-down": "down",
	"key-left": "left",
	"key-select": "shift",
	"key-start": "enter",
	"key-a": "c",
	"key-b": "x",
	"key-x": "s",
	"key-y": "z",
};

app.post("/", function (request, response) {
	console.log(`received ${JSON.stringify(request.body)}`);
	robot.keyToggle(keyMap[request.body.keyId], request.body.state);
	response.send(`key tap ${request.body.key}`);
});

app.listen(port, () => {
	console.log(`Web Gamepad Emulator app listening at http://localhost:${port}`);
});
