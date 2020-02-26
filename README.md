# parser-command-line
A Command Line Parser for Node.js

## How to use

Parse args params:
```
const parser = require('parser-command-line')
const params = parser.parseArgs();
```

Parse string params:
```
const parser = require('parser-command-line')
const params = parser.parseString('yarn add parser-command-line -d --version=1.0.0');
```

## Result
yarn add parser-command-line -d --version=1.0.0
```
{
    "bin": "yarn",
    "commands": ["install"],
    "flags": {
        "d": true,
        "version": "1.0.0"
    }
}
```