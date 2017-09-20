"use strict";
exports.__esModule = true;
var twitch_1 = require("twitch");
var discord_1 = require("discord");
var secretsJson = require("./secrets.json");
var twitch = twitch_1.twitchClient(secretsJson);
var discord = discord_1.discordClient(secretsJson);
twitch.connect();
discord.connect();
twitch.setListeners(discord);
discord.setListeners(twitch);
