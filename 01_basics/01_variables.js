const accountId=1212
let accountEmail="abc@gmail.com"
var accountPassword="12345"
accountCity ="Bengaluru"

// accountId=2 not allowed
let accountState

accountEmail="def@gmail.com"
accountPassword="23456778"
accountCity="Bihar"


console.log(accountId)

/*
prefer not to use var because of issue in block scope and functional scope

*/



console.table([accountId, accountEmail, accountPassword, accountCity,accountState])