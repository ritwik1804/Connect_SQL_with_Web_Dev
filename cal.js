const express = require('express')
const app = express()  //app = instance of express // app serves as express for us
const port = 3000


// NOTE - In the Express.js route definition, colons (:) are used to define route parameters. When you define a route with a colon followed by a parameter name (e.g., :num1, :num2), Express.js treats that part of the URL as a variable and extracts its value from the actual request URL.


app.get('/:operator/:num1/:num2', (req, res) => {
    const operator = req.params.operator;
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case 'div':
            if (num2 === 0) {
                res.send('Division by zero is not allowed');
                return;
            }
            result = num1 / num2;
            break;
        default:
            res.status(400).send('Invalid operator');
            return;
    }

    res.send(`The result of ${num1} ${operator} ${num2} is ${result}`);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


