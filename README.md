INSTALLATION SETUP:

create .env file locally with the following declarations:

PORT
MONGO_URI
JWT_SECRET

Clone the github repository and run these commands:
1. npm install
2. nodemon server.js


API ENDPOINTS:

/api/auth/login  ---- post ----> login and get a token
/api/tasks ---- GET -------> get all tasks
/api/tasks ---- POST --------> create a new tasks
/api/tasks/:id ---- PUT ------> Update a task
/api/tasks/:id ---- DELETE --------> Delete a task
