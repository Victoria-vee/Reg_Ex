# Reg_Ex

## Task on a Card Validator

For this task I'm using a Visa card

- A visa card starts with the number 4 and it can have 13, 16 or 19 digits

<b>Explaining the code:</b>


<b> `^4` </b> This ensures the value starts with 4

<b> `\d{12}` </b> This checks if the value has exactly 12 digits after the 4. This brings the total to 13.

<b> `(\d{3})?` </b> This is an optional group that looks for 3 digits. Since it's an optional group, it returns true even if the digits are missing. If the 3 digits are added, it brings the total digits to 16.

<b> `(\d{3})?` </b> This is a second optional group that adds 3 more digits if both of the optional groups are present the total digits is 19