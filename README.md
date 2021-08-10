# SQS-test

![GitHub stars](https://img.shields.io/github/stars/chrisjmckeown/aSQS-test?style=social)![GitHub forks](https://img.shields.io/github/forks/chrisjmckeown/aSQS-test?style=social)![GitHub watchers](https://img.shields.io/github/watchers/chrisjmckeown/aSQS-test?style=social)![GitHub followers](https://img.shields.io/github/followers/chrisjmckeown?style=social)

[![license](https://img.shields.io/github/license/chrisjmckeown/aSQS-test?style=flat-square)](https://github.com/chrisjmckeown/aSQS-test/blob/master/LICENSE)![GitHub repo size](https://img.shields.io/github/repo-size/chrisjmckeown/aSQS-test?style=flat-square)![GitHub last commit](https://img.shields.io/github/last-commit/chrisjmckeown/aSQS-test?style=flat-square)[![GitHub contributors](https://img.shields.io/github/contributors/chrisjmckeown/aSQS-test?style=flat-square)](https://GitHub.com/chrisjmckeown/aSQS-test/graphs/contributors/)[![GitHub pull-requests](https://img.shields.io/github/issues-pr/chrisjmckeown/aSQS-test?style=flat-square)](https://GitHub.com/chrisjmckeown/aSQS-test/pull/)

## Description

Create a express server and use the aws-sdk to hook the AWS SQS service.

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Questions](#Questions)

## Installation
* Install the below dependancies

```
npm install express
npm install as-sdk
```

* Copy the config-sample.json and add your key
* Rename to config.json
* Add config.json to .gitignore file to hide your keys

### Technologies Utilized
![GitHub language count](https://img.shields.io/github/languages/count/chrisjmckeown/aSQS-test?style=flat-square)![GitHub top language](https://img.shields.io/github/languages/top/chrisjmckeown/aSQS-test?style=flat-square)

<img src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/> <img src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>

## Usage
To run - node app.js

The app is listening on port 3000
* localhost:3000/create
  * Creats a queue. If the name aleady exists then it is returned.
  * Add newly created queueUrl to variable queueUrl
* localhost:3000/list
  * Lists all queues.
* localhost:3000/send
  * Send a message.
* localhost:3000/receive
  * Receive a message. Puts the message in flight.
* localhost:3000/delete
  * Deletes a message.
* localhost:3000/purge
  * Purges the entire queue.
## License

[![license](https://img.shields.io/github/license/chrisjmckeown/aSQS-test.svg?style=flat-square)](https://github.com/chrisjmckeown/aSQS-test/blob/master/LICENSE)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)

## Questions

* Follow me at: <a href="https://github.com/chrisjmckeown" target="_blank">https://github.com/chrisjmckeown</a>

* Please email with any question at: chris.j.mckeown@hotmail.com

© 2021 chrisjmckeown