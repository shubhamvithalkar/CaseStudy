function processTransaction(amount, description, isCredit) {
    if (amount < 0) {
        throw new Error("Invalid transaction amount");
    }
    var desc = description !== null && description !== void 0 ? description : "No description provided";
    console.log("Transaction Summary");
    console.log("Amount:", amount);
    console.log("Description:", desc);
    console.log("Type:", isCredit ? "Credit" : "Debit");
}
processTransaction(500, "Salary deposit", true);
processTransaction(200, undefined, false);
