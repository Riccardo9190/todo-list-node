# Node.js TODO-List App

Simple todo-list application built with Node.js, Express and MongoDB.

### Technologies Used:

- Node.js
- Express
- EJS
- MongoDB
- Mongoose

### To Run Locally

To run you need to have MongoDB installed and running on your machine. Don't have it? Get it [here](https://docs.mongodb.com/manual/installation/).
Once you have your MongoDB service running you can simply do:

- Clone this repository with ```git clone https://github.com/Riccardo9190/todo-list-node.git```

- Access the app folder with ```cd todo-list-node```

- Install all dependencies with ```npm install```

- Create a file named '.env' on the root of the project with ```touch .env```

- Set the environment variable for the database with ```echo "MONGO_URL=mongodb://localhost/databasename" > .env```

ㅤㅤExample: ```echo "MONGO_URL=mongodb://localhost/todolistclone" > .env```

- Run your app with ```npm run dev``` and open the URL ```localhost:5000```

### Live version

You can check the live version here: https://prjct-todo-list-node.herokuapp.com/