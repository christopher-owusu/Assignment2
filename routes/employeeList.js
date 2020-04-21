const router = require('express').Router();

const { MongoClient } = require('mongodb');


const todo = require('./todolist.json');

const url = 'mongodb://localhost:27017';
let dbName = 'employeedb';
const client = new MongoClient(url, { useUnifiedTopology: true });

let employeedb;
let todoCollection;

(async () => {  
   
    await client.connect(); 
    dbname = client.db('employeedb');
    todoCollection = dbname.collection('todo');
})();

const employees = [
    {
        name: "Fred Awotwe",
        Department: "Management",
        gender: "Male",
        mail: "fredawo@gmail.com",
        image:"/images/img11.jpg"
    },
    {
        name: "Alice Achampong",
        Department: "Accounting",
        gender: "Female",
        mail: "alice@gmail.com",
        image:"/images/img6.jpg"
    },
    {
        name: "Barbara Boadu",
        Department: "IT Service",
        gender: "Female",
        mail: "boadubab@gmail.com",
        image:"/images/img8.jpg"
    },
    {
        name: "Dominic Bluawofogbe",
        Department: "Management",
        gender: "Male",
        mail: "bigD@gmail.com",
        image:"/images/img5.jpg"
    },
    {
        name: "Derrick Anum Mensah",
        Department: "Design",
        gender: "Male",
        mail: "demez@gmail.com",
        image:"/images/img9.jpg"
    },
    {
        name: "Raymond Music",
        Department: "Accounting",
        gender: "Male",
        mail: "raymusic@gmail.com",
        image:"/images/img10.jpg"
    },
    {
        name: "Kelvin Amoako",
        Department: "IT Service",
        gender: "Male",
        mail: "younglove@gmail.com",
        image:"/images/img3.jpg"
    },
    {
        name: "Yvette Klu",
        Department: "Management",
        gender: "Female",
        mail: "younglove@gmail.com",
        image:"/images/img7.jpg"
    }
]


router.get('/', (req, res) =>{
    res.render('home',{
        employeeList: employees
    })
});



router.get('/todolist', async (req, res)=>{
    const todolist = await todoCollection.find({}).toArray();
    res.render('todolist',{
        todolist
    })
});
     

module.exports = router;