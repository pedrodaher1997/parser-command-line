'use strict';

function toCamelCase(input) {

    let result = "";
    const inputArray = input.split(' ');

    for(let i = 0;  i < inputArray.length; i++) {

      let currentStr = inputArray[i];
    
      let tempStr = currentStr.toLowerCase();

      if(i != 0) {
          tempStr = tempStr.substr(0, 1).toUpperCase() + tempStr.substr(1);
       }
      
       result +=tempStr;
      
    }
  
    return result;
}

function convertFlagName(flagName){
    let tempFlagName = flagName.toString();
    if (tempFlagName.substr(0,2) === '--'){
        tempFlagName = tempFlagName.substr(2, tempFlagName.length);
    }

    if (tempFlagName.substr(0,1) === '-'){
        tempFlagName = tempFlagName.substr(1, tempFlagName.length);
    }

    return tempFlagName.replace('-', ' ');
}

function parse(params) {
    const output = {
        bin: params[0],
        commands: [],
        flags: {}
    };

    for( let i = 1; i < params.length ; i++ ) {
        const param = params[i];

        if ( param.substr(0,2) === '--' || param.substr(0,1) === '-') {
            const paramSplit = param.split('=');
            let flagName = paramSplit[0];
            let flagValue;

            if(paramSplit[1]){
                flagValue = paramSplit[1];
                
                if(flagValue === 'true'){
                    flagValue = true;
                }

                if(flagValue === 'false'){
                    flagValue = false;
                }

            }

            if(!paramSplit[1]){
                flagValue = true;
            }
            
            flagName = convertFlagName(flagName)
            flagName = toCamelCase(flagName);

            output.flags[flagName] = flagValue;

        } else if ( Object.keys(output.flags).length == 0 ) {
             output.commands.push(param);
        }

    }

    return JSON.stringify(output);
}

module.exports = {
    parseString: (string) => {
        const params = string.split(' ');
        return parse(params);
    },
    parseArgs: () => {
        const params = process.argv;
        return parse(params);
    }
}
