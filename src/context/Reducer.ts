import { Dispatch } from 'react';
import InitialState, { stateType, postType } from 'context/InitalState';

type ActionType =
  | { type: 'UPDATE_POSTNUMBER'; value: number }
  | { type: 'UPDATE_CATEGORIES'; value: string[] }
  | { type: 'UPDATE_POSTS'; value: postType[] }
  | { type: 'UPDATE_SELECTED_CATEGORY'; value: string };

export type DispatchType = Dispatch<ActionType>;

export const Reducer = (
  state: stateType = InitialState,
  action: ActionType,
) => {
  switch (action.type) {
    case 'UPDATE_POSTNUMBER':
      return {
        ...state,
        postNumber: action.value,
      };
    case 'UPDATE_CATEGORIES':
      return {
        ...state,
        categories: [...action.value],
      };
    case 'UPDATE_POSTS':
      return {
        ...state,
        posts: action.value,
      };
    case 'UPDATE_SELECTED_CATEGORY':
      return {
        ...state,
        selectedCategory: action.value,
      };
    default:
      throw new Error('Unhandled action');
  }
};

export default Reducer;
