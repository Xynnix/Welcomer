# Welcomer

## A Welcomer for Discord servers

- Keep in mind after cloning this, that this is for ONE server only as it is set up to be private!
- Please also considering supporting me by joining my [Discord](https://discord.gg/invite/jjgjV62)
- You can also donate to me on [paypal](https://paypal.me/Xyni) which would be appreciated alot!



Setup:
> copy `c.json.example` into `c.json` and fill out all the information as it is required
      - Save the file

> edit the `joins.js` file ONLY where the name & value fields are! everything such as `config.avURL` or `config.hooks` is handled if you filled out `c.json` right.
      - You can use `member.user` to substitiute for the member. {Example: `"Hello " + member.user + "!"`}
      - Make sure to save everything


   ![Welcomer Example](https://cdn.discordapp.com/attachments/695102474586947664/695753102036303982/unknown.png)



> Run `npm install` in the main folder and wait til everything is done installing (Discord.js [11.0.3] Only works with this bot currently since 12.x is different, and node-fetch 2.6.0)

> Start the bot by running `node index.js`, or if you have PM2 installed, that is a better option to keep it on.
