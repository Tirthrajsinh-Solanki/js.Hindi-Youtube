const accountId = 144553
let accountEmail = 'tirth2810@gmail.com'
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2 // Not allowed

accountEmail = "ts2810@gamil.com"
accountPassword = "1111"
accountCity = "Borsad"

console.log(accountId); 

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountEmail,accountId,accountPassword,accountCity])