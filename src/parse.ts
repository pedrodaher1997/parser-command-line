import toCalmeCase from './camelCase'
import toFlagName from './flagName'

type Flag = string | number | boolean;

export interface IParsed {
    bin: string;
    commands: string[];
    flags: {
        [key: string]: Flag
    }
}

export default (params: string[]): IParsed => {
    const output:IParsed = {
        bin: params[0],
        commands: [],
        flags: {}
    };

    for(const param of params){
        if ( param.substr(0,2) === '--' || param.substr(0,1) === '-') {
            const paramSplit = param.split('=');
            let flag = paramSplit[0];
            let flagValue:Flag = true

            if(paramSplit[1]){
                flagValue = paramSplit[1];
                
                if(flagValue === 'true'){
                    flagValue = true;
                }

                if(flagValue === 'false'){
                    flagValue = false;
                }

            }
            
            flag = toCalmeCase(flag)
            flag = toFlagName(flag);

            output.flags[flag] = flagValue;

        } else if ( Object.keys(output.flags).length == 0 ) {
                output.commands.push(param);
        }
    }

    return output;
}