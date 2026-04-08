var processorder = function (orderId, callback) {
    console.log('Processing order ${orderId}...');
    var status = "shipped";
    callback(status);
};
var customer1 = {
    id: "CUST001",
    name: "Shubham",
    // email is optional → undefined
};
var customerContainer = {
    value: customer1,
    timestamp: new Date()
};
processorder(101, function (status) {
    console.log("Order status: ".concat(status));
});
