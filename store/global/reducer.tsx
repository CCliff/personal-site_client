import { Action } from 'redux';
import initialState, { GlobalState } from './initialState';

// interface Action {
//   type: string;
//   params: Record<string, unknown>;
// }

export default function reducer(
  state: GlobalState = initialState,
  action: Action<unknown>,
): GlobalState {
  switch (action.type) {
    // case 'TICK':
    //   return {
    //     ...state,
    //     lastUpdate: action.lastUpdate,
    //     light: !!action.light,
    //   }
    // case 'INCREMENT':
    //   return {
    //     ...state,
    //     count: state.count + 1,
    //   }
    // case 'DECREMENT':
    //   return {
    //     ...state,
    //     count: state.count - 1,
    //   }
    // case 'RESET':
    //   return {
    //     ...state,
    //     count: initialState.count,
    //   }
    default:
      return state;
  }
}
