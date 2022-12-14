require('dotenv').config();
require('./config/database');

const express = require('express'); 
const path = require('path'); 

const checkListRouter = require('./src/routes/checklist'); 
const taskRouter = require('./src/routes/task')

const rootRouter = require('./src/routes/index'); 
const methodOverride = require('method-override'); 

const app = express(); 
app.use(express.json()); 
app.use(express.urlencoded({extended: true})); // Allowing to get form values as nested objects
app.use(methodOverride('_method', { methods: ['POST', 'GET']})); // Setting methodOverride to override methods POST and GET
                                                                // Usually, methodOverride override just method POST

app.use(express.static(path.join(__dirname, 'public'))); 

app.set("views", path.join(__dirname, 'src/views'));  
app.set('view engine', 'ejs'); 

app.use('/', rootRouter); 
app.use('/checklists', checkListRouter); 
app.use('/checklists', taskRouter.checklistDependent); 
app.use('/tasks', taskRouter.simple); 

const PORT = process.env.PORT;

app.listen(PORT || 5000, () => {
  console.log('Servidor foi iniciado')
});

module.exports = app;
