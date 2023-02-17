var customerName = 'bob';

function upperCaseCustomerName(){
    return customerName.toUpperCase();
}
var bestCustomer;

function setBestCustomer() {
	return bestCustomer = "not bob";
}

setBestCustomer();

function overwriteBestCustomer() {
	return bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "harry";

function changeLeastFavoriteCustomer() {
	leastFavoriteCustomer = "hank";
}
