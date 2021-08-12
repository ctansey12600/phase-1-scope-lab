var customerName = 'bob'

function upperCaseCustomerName(){
    return customerName = customerName.toUpperCase()
}

var bestCustomer

function setBestCustomer(){
    return bestCustomer = 'not bob'
}

function overwriteBestCustomer(name){
    return bestCustomer = `${name}`
}

const leastFavoriteCustomer = 'value'

function changeLeastFavoriteCustomer(name){
    return leastFavoriteCustomer = `${name}`
}