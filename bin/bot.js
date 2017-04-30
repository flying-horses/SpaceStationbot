'use strict'

const botBuilder = require('claudia-bot-builder');
const handlers = require('./apihandler.js');

module.exports = botBuilder(function (message) {
	const botRequest = message.originalRequest;
	const botCommand = botRequest.command;

	switch(botCommand){
		case handlers.WELCOME_COMMAND:
			return handlers.getGreetMessage(botRequest.user_name);

		default:
			return "OOps, you got something, we don't have";
	}
});