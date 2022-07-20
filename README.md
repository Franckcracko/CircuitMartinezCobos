# Ecommerce
## Introduction

React application of an Ecommerce which is responsible for selling technology items.
Next we will teach you how to clone this Github project so that you can manipulate it to your liking, and even that you can provide Extra help to improve the Project.

## Clone Project

##### First of all you need to have a Github Account to Continue.

1. Login to Github account
2. Go to the repository you [Clone](https://github.com/Franckcracko/CircuitMartinezCobos.git "Clonaras")
3. Now in your *terminal* you will go to your folder where you will put the project and write the following:
```bash
  git clone -b EntregaFinal https://github.com/Franckcracko/CircuitMartinezCobos.git
```
> You are cloning the Branch where the Finished project is located

4. It will create a folder called **CircuitMartinezCobos** and there you will find the project
5. Again in your *terminal* you go to the project and execute the following instruction, so that the **node_modules** folder is installed and you can correctly use the project:
```bash
   cd CircuitMartinezCobos
   npm install
```


> **node_modules** folder Added!

## Environment variable

In the file called ['env.example'](https://github.com/Franckcracko/CircuitMartinezCobos/blob/EntregaFinal/.env.example "env.example") you will find an example of how the credentials of your database should be inserted, specifically for [**Firebase**](https://firebase.google.com/?hl=es-419 "**Firebase**") . In order to correctly insert the credentials of your Database you will need to change the name of the .env.example file and only call it .env, this is so that the Project identifies the credentials file and thus be able to use it in the Component ['index.js'](https://github.com/Franckcracko/CircuitMartinezCobos/blob/EntregaFinal/src/services/firebase/index.js "'index.js'") which is on the path :

`CircuitMartinezCobos/src/services/firebase/index.js /`
