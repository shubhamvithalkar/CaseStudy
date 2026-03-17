function processTransaction(
  amount: number,
  description: string | undefined,
  isCredit: boolean
): void {

  if (amount < 0) {
    throw new Error("Invalid transaction amount")
  }

  let desc = description ?? "No description provided"

  console.log("Transaction Summary")
  console.log("Amount:", amount)
  console.log("Description:", desc)
  console.log("Type:", isCredit ? "Credit" : "Debit")
}

processTransaction(500, "Salary deposit", true)
processTransaction(200, undefined, false)