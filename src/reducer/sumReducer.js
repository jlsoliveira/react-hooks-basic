import { useReducer } from "react";

const STATE_INITIAL = {
  result: '',
}

const SumReducer = (state = STATE_INITIAL , action) => {
  console.log('dispatch execute:', JSON.stringify(action));
  switch(action.type){
    case 'SUM':
      return { ...state, result: action.payload }
    case 'SUBTRACTION':
      return { ...state, result: action.payload }
    default:
      return state
  }
}
const useStore = () => useReducer (SumReducer, STATE_INITIAL)
export default useStore