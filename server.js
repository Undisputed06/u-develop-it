const express = require('express');
const mysql = require('mysql2')

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//Connect to database 
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username, 
        user: 'root',
        // Your MySQL password
        password: '',
        database: 'election'
},
console.log('Connect to the election database')
)


// app.get('/', (req, res) => {
//     res.json({
//       message: 'Hello World'
//     });
//   });

// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(rows);
//   });

// db.query('SELECT * FROM candidates WHERE id = 1', (err, row) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(row);
// })

//The DELETE statement has a question mark (?) that denotes a placeholder, making this a prepared statement. A prepared statement can execute the same SQL statements repeatedly using different values in place of the placeholder.
// db.query('DELETE FROM candidates WHERE id=?', 1, (err,result) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log(result);
// })

//Create a candidate
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
                VALUES (?,?,?,?)`;
const params = [1, 'Ronald', 'Firbank', 1];

db.query(sql, params,(err, result) => {
    if (err){
        console.log(err);
    }
    console.log(result)
})


// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
