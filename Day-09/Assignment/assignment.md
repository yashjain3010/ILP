Q.1 What is NodeJS?

- Node.js is a runtime environment that allows you to run Javascript code on server side.

Q.2 What is V8 Engine?

- Node.js is built on the V8 Engine of developed by google for chrome.

Q.3 What is Event Loop in NodeJS.

- Event loop in Nodejs deal with a asynchronous code and event loop have different stages

1. Callback Stack
2. Callback Queue
3. Web API

first asynchronous code goes into web api and when the time is spend and then it goes into callback queue which has principle of fifo and then it goes into callback stack where loop is running until a final result comes.

Q.4 What is the use of tsconfig.json file?

- It is used to change directory or file inclusion/exclusion to generate a Javascript code. Eg. outdir,rootdir

- to make a type error strict or loose.

- it is used to set the ECMAScript version.

Q.5 What are the methods provided by `fs` module to manipulate files?

- fs module provide methods like reading,writing,updating or delete files as well as managing directories and it is offer both synchronous and asynchronous methods.

Q.6 What is API?

- API stands for Application Programming Interface is set a protocols that allow different software applications to communicate with each other.

Q.7 What is JSON format?

- JSON stands for Javascript Object notation, it is a lightweight data interchange format that is easy for human to read and write, and easy for machines to parse and generate.

Q.8 Why we use JSON format for API?

- We use JSON format because it is lightweight and human readable and easy to read and write and browser also support JSON format.

Q.9 What is a Framework?

- A framework is a set of tool,libraries which we make to simplify the development process.

Q.10 How an HTTP Communication works?

- HTTP Stand for Hyper text transfer protocol and it is a foundation of data communication in a web. In this we have client side,server side,request, response all this type of things comes into HTTP Communication where we have interface on client side and we send some request on server side and then server side send some response of our request that how we communicate in HTTP.

Q.11 What is Middleware in ExpressJS?

- Middlewares is a precheck which we doing before we going into main application logic and let suppose we have many routes and we have to check the user is valid or not in every route then we make a middleware and from this we don't repeat code again and again to check user validity. And in this we have 3 arguments req,res and next.

