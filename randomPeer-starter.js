let users = [
    {id:1},
    {id:1},
    {id:1},
    {id:3},
    {id:3},
    {id:3},
    {id:3},
    {id:4},
];
function createRandomPairs(users) {
    let pairs = [];
    while(users.length > 0) {
        let randomIndex = Math.floor(Math.random() * users.length);
        let user1 = users[randomIndex];
        users.splice(randomIndex, 1);
        
        randomIndex = Math.floor(Math.random() * users.length);
        let user2 = users[randomIndex];
        users.splice(randomIndex, 1);
        
        let pair = [user1];
        if(user2) {
            pair.push(user2);
        }
        
        pairs.push(pair);
    }
    return pairs;
}
console.log(createRandomPairs(users));

