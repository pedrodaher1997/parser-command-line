const camelCase = require('./camelCase');
const flagName = require('./flagName');

module.exports = (params) => {
    const output = {
        bin: params[0],
        commands: [],
        flags: {}
    };

    for( let i = 1; i < params.length ; i++ ) {
        const param = params[i];

        if ( param.substr(0,2) === '--' || param.substr(0,1) === '-') {
            const paramSplit = param.split('=');
            let flag = paramSplit[0];
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
            
            flag = flagName(flag)
            flag = camelCase(flag);

            output.flags[flag] = flagValue;

        } else if ( Object.keys(output.flags).length == 0 ) {
             output.commands.push(param);
        }

    }

    return JSON.stringify(output);
}