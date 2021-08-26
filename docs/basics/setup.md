# Setting Up

### Installation

Before even doing anything else, you of course have to install the Discord.js and Akairo.  

`npm i night-api`

Once everything has been installed, your working directory should look something like this:  

```
mycode
|____ node_modules
      index.js
```

### Main File

Inside `index.js`, require `night-api` and import the `NightAPI` class to connect the code to the API.

```js
const NightAPI = require('night-api');

const api = new NightAPI("API KEY");
```

Your code should now login, and you are ready to make request.  
