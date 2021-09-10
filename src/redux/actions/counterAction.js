import { INCRUMENT_NUMBER } from "../tayps/counterTypes";
import { DECRUMENT_NUMBER } from "../tayps/counterTypes";


export function incrumentNumber() {
    return {
       type: INCRUMENT_NUMBER 
    }
}

export function decrumentNumber() {
    return {
        type: DECRUMENT_NUMBER
    }
}