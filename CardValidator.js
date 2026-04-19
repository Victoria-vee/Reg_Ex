let num = 4231517723438327;
let cardNum = /^4\d{12}(\d{3})?(\d{3})?$/.test(num);

if (cardNum ==true) {
    console.log("This is a valid Visa card number");
} else {
    console.log("This is not a valid Visa card number");
}

console.log(cardNum);