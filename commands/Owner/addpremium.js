module.exports = {
    name: "addpro",
    run : async (client,message,args)=> {

let guild = client.guilds.cache.get(args[0])



if(!guild) return message.channel.send(`provide me guild id`)



client.db.set(`premium_${args[0]}`,true)

message.channel.send(`👑 Added premium to ${guild.name}`)









    }
}