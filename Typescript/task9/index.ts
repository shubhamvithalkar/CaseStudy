type customerID=string; // primitive

// customer object alias

type customer={
    id: customerID;
    name:string;
    email?:string;
};

type orderstatus= "pending" | "shipped" | "returned";

// Function type alias

type ProcessOrder=(orderId:number, callback:(status:orderstatus)=> void) => void;

const processorder:ProcessOrder=(orderId,callback) =>{
    console.log('Processing order ${orderId}...');
    const status: orderstatus = "shipped";

    callback(status);
}


// Generic Container

type Container<T> ={
    value: T;
    timestamp:Date;
};


let customer1: customer = {
  id: "CUST001",
  name: "Shubham",
  // email is optional → undefined
};

let customerContainer: Container<customer> = {
  value: customer1,
  timestamp: new Date()
};

processorder(101, (status) => {
  console.log(`Order status: ${status}`);
});

