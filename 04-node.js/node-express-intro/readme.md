# WDI Node & Express: First Steps
Install node.js and create a basic express app


### Objectives
*After this lesson, students will:*

- Have Node.js installed
- Init a simple Node.js app
- Run and connect with the app in the browser

### Preparation
*Before this lesson, students should already be able to:*

- Run basic commands in the terminal
- Understand basic Javascript

## Install Node.js (15 mins)

To build Node.js apps we have to first install Node.js

Mac:

```bash
$ brew install node
```

Ubuntu:

```bash
$ sudo apt-get install -y build-essential

$ curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```

## Create new project (15 mins)

To crate a new project we use the Node Package Manager(NPM)

```bash
$ npm init

This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (node) wdi_nodejs_first_steps
version: (1.0.0)
description: WDI Node.js First Steps
entry point: (index.js) server.js
test command:
git repository:
keywords:
author: Jens H. Nielsen
license: (ISC)
About to write to /Users/jens/tmp/node/package.json:

{
  "name": "wdi_nodejs_first_steps",
  "version": "1.0.0",
  "description": "WDI Node.js First Steps",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Jens H. Nielsen",
  "license": "ISC"
}

Is this ok? (yes) yes
```

This will create a package.json file. This is the project file with all the settings and meta data about the project.
The Node.js project is now initialized, and we can start the project.

Installing express in our project

```bash
$ npm install express -save
```

The "-save" saves a reference to the package in package.js.

We set the entry point to server.js, and we have to create this file.

```javascript
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Listening on port 3000!');
});
```

We can now run the node project

```
$ node server.js
```

## Add support for static files (10 mins)

Express can serve static files like a regular web server. We need this to serve static recourses like images.
To manipulate paths we use a core Node.js module called path. Create a directory 'public' in your project folder.

```javascript
var express = require('express');

// Add core module path
var path = require('path');

var app = express();

// Set the static path to public
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Listening on port 3000!');
});
```

