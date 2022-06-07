const redis = require('redis');
const client = redis.createClient();

console.log("Attempting to connect to redis...");

client.on('connect', () => {
});
(async () => {
    await client.connect();
    console.log('Redis connection successful!');  
})();
 
module.exports = {client}