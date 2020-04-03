const config = require("./c.json")
const fetch = require("node-fetch")
module.exports = {
 joins: (bot) => {
    bot.on("guildMemberAdd", (member, message) => {
     const body = {
        "username": member.guild.name,
        "avatar_url": config.avURL,
        "embeds": [
          {
            "title": "A new member has joined!",
            "description": `Wecome to ${member.guild.name}, ${member.user}`,
            "color": 6747458 ,
            "fields": [
              {
                "name": "Enjoy your stay!",
                "value": "We hope you enjoy yourself here, and maybe make some new friends!",
                "inline": false
              },
	      {
		"name": "Info Board:",
		"value": `Please do read the <#695102464374079549> as we wish to keep a safe and fun environment, and it has useful information if you need it!`,
		"inline": true
	      },
              {
                "name":  "Suggestions?",
                "value": "Feel free to suggest server add-ons or even Bot related features using `}suggest`, and have it voted on in <#695102467951558686>",
                "inline": true
              },
	      {
		"name": "Need Help?",
		"value":"<#695102469482479676> is a channel for anyone who needs help! So don't hesitate to ask questions there!",
		"inline": true,
	     }
            ],
            "thumbnail": {
              "url": member.guild.iconURL
            },
	    "image": {
	      "url": config.banner
	    }
           }
        ]
	};

          fetch(config.hooks,{
              method: "post",
              body: JSON.stringify(body),
              headers: { 'Content-Type': 'application/json' },
          })
	})
    }
};
