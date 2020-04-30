export default (flagName:string):string => {
    if (flagName.substr(0,2) === '--'){
        flagName = flagName.substr(2, flagName.length);
    }

    if (flagName.substr(0,1) === '-'){
        flagName = flagName.substr(1, flagName.length);
    }

    return flagName.replace('-', ' ');
}