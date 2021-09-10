import {INCRUMENT_NUMBER, DECRUMENT_NUMBER} from '../tayps/counterTypes'

const initialState = {
    number: 0
}

export const counterReducer = (state = initialState, action) => {
    if (action.type === INCRUMENT_NUMBER) {
        return {
            number: state.number + 1
        }
    }else if (action.type === DECRUMENT_NUMBER) {
        return {
            number: state.number - 1
        }
    }
    return state;
}