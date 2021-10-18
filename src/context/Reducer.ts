import { Dispatch } from 'react';
import InitialState, { stateType } from 'context/InitalState';

type ActionType =
  | { type: 'UPDATE_POSTS'; value: number }
  | { type: 'UPDATE_CATEGORIES'; value: number };

export type DispatchType = Dispatch<ActionType>;

export const Reducer = (
  state: stateType = InitialState,
  action: ActionType,
) => {
  switch (action.type) {
    case 'UPDATE_POSTS':
      return {
        ...state,
        posts: action.value,
      };
    case 'UPDATE_CATEGORIES':
      return {
        ...state,
        categories: [...state.categories],
      };
    default:
      throw new Error('Unhandled action');
  }
};

export default Reducer;
