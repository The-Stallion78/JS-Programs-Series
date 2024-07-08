function Sealed(productName, check) {
    this.productName = productName,
    this.check = check
}

let credibilityCheck = new Sealed("()", "Beware, SEAL BROKEN!")
console.log("\n\nCredibility Checking....\n")
console.log("Product Name: ", credibilityCheck.productName)
console.log("Credibility Check: ", credibilityCheck.check)
console.log("---------------------\n\n")

