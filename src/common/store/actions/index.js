import { IO_OPEN, IO_CLOSE } from '../../constants';

export const isWorking = () => {
    console.log("IO_OPEN_ACTION");
    return {
        type: IO_OPEN,
    }
}

export const isDoneWorking = () => {
    console.log("IO_CLOSE_ACTION");
    return {
        type: IO_CLOSE,
    }
}