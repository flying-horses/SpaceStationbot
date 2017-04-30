'use strict'

const botBuilder = require('claudia-bot-builder');


const getGreetMessage = (username) => {
	let message = getWelcomeMessage(username)
	return {
		"username": "spacestationbot",
    	"mrkdwn": true,
		"text":message
	};
}

const getWelcomeMessage = (username) => {
	return "Hello,"+username
			+"\n I am Space Station bot, Using me you can find out where the ISS satellite is heading";
		}

module.exports={
	// Slack Integrated Commands
	WELCOME_COMMAND : "/spacestation",

	// Slack command handers
	getGreetMessage : getGreetMessage
}