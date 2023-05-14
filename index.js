const Discord = require("discord.js-selfbot-v13")
const fs = require("fs")
const clients = []
const tokens = fs.readFileSync("./token.txt", "UTF-8")
const auth = tokens.split(/\r?\n/)
const statuses = ["online", "idle", "dnd"]

console.log('\x1b[36m%s\x1b[0m', 'Advanced Mass Discord Token Onliner |', '[\x1b[32mENDY\x1b[0m]\n')

for (const token of auth) {
    const arr = [{ $browser: "Discord Client" }, { $browser: "Discord Android" }]
    let randomBrowser = arr[Math.floor(Math.random() * arr.length)]
    const client = new Discord.Client({ readyStatus: false, checkUpdate: false, ws: { properties: randomBrowser } })
    clients.push(client)
    client.on("ready", () => {
        const randomStatus = statuses[Math.floor(Math.random() * statuses.length)]
        client.user.setStatus(randomStatus)
        console.log(`[\x1b[32m+\x1b[0m] ${token.substring(0, 26)} is online!`)
    })
    client.login(token).catch(() => console.log(`[!] ${token} is invalid.`))
}