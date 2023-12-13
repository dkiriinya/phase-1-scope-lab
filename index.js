// Write your solution in this file!
var customerName = "bob"

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase()
}

function setBestCustomer(){
    bestCustomer = 'not bob'
}
function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
    console.log(bestCustomer)
}
const leastFavoriteCustomer = 'Darth Vader'
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'Thanos'
    console.log(leastFavoriteCustomer)
}
overwriteBestCustomer()

