const express = require('express')
const cors= require("cors")

const app = express()
app.use(cors());  //app = instance of express // app serves as express for us
const port = 3000


// NOTE - In the Express.js route definition, colons (:) are used to define route parameters. When you define a route with a colon followed by a parameter name (e.g., :num1, :num2), Express.js treats that part of the URL as a variable and extracts its value from the actual request URL.


const { connection }= require("./db/db_config")



/*app.get("/", (req,res) => {
    let user_input= req.query.title;
    connection.query(`SELECT * FROM movie_data WHERE title LIKE '${user_input}' `,(err, results) => {
        if(err){
            console.log("Error in query !");
            res.send("Error in DB query")
        }
        else{
            console.log(results);
            res.send(results);
        }
    })
});*/


/*app.get("/", (req,res) => {
    let user_input= req.query.term;
    connection.query(`SELECT * FROM movie_data WHERE id LIKE '${user_input}%' `,(err, results) => {
        if(err){
            console.log("Error in query !");
            res.send("Error in DB query")
        }
        else{
            console.log(results);
            res.send(results);
        }
    })
});*/

/*app.get("/", (req,res) => {
    let userInput= req.query.language;
    connection.query(`SELECT * FROM movie_data WHERE language = ? `,[userInput] ,(err, results) => {
        if(err){
            console.log("Error in query !");
            res.send("Error in DB query")
        }
        else{
            console.log(results);
            res.send(results);
        }
    })
});

app.get("/delete/:id", (req, res) => {
    const movieId = req.params.id; // Extract movie ID from URL parameter
    console.log(movieId);
    connection.query(`DELETE FROM movie_data WHERE id =?` ,[user_input], (err, results) => {
        if (err) {
            console.log("Error in query !");
            res.send("Error in DB query");
        } else {
            console.log("Movie deleted successfully");
            res.send("Movie deleted successfully");
        }
    });
});*/

app.get("/", (req,res) => {
    let user_input= req.query.term;
    connection.query(`SELECT * FROM movie_data WHERE title LIKE ?`, [`${user_input}%`] ,(err, results) => {
        if(err){
            console.log("Error in query !");
            res.send("Error in DB query")
        }
        else{
            console.log(results);
            res.send(results);
        }
    })
});

/*app.get("/getTopper", (req,res) => {
   
    connection.query(`SELECT * FROM student_table WHERE marks = (SELECT MAX(marks) FROM student_table)` ,(err, results) => {
        if(err){
            console.log("Error in query !");
            res.send("Error in DB query")
        }
        else{
            console.log(results);
            res.send(results);
        }
    })
});

app.get("/getFailed", (req,res) => {
   
    connection.query(`SELECT * FROM student_table WHERE marks <50` ,(err, results) => {
        if(err){
            console.log("Error in query !");
            res.send("Error in DB query")
        }
        else{
            console.log(results);
            res.send(results);
        }
    })
});*/

app.listen(port, () =>{
    console.log(`Example app listening to port ${port}`)
});



/*app.get('/', (req, res) => {
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
})*/

