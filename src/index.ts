import parse, { IParsed } from './parse'

export const parseString = (command:string ):IParsed => {
    const args = command.split(' ');
    return parse(args);
}

export const parseArgs = ():IParsed => {
    const args = process.argv;
    return parse(args);
}
