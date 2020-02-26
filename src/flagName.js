'use strict';

module.exports = (flagName) => {
    let tempFlagName = flagName.toString();
    if (tempFlagName.substr(0,2) === '--'){
        tempFlagName = tempFlagName.substr(2, tempFlagName.length);
    }

    if (tempFlagName.substr(0,1) === '-'){
        tempFlagName = tempFlagName.substr(1, tempFlagName.length);
    }

    return tempFlagName.replace('-', ' ');
}