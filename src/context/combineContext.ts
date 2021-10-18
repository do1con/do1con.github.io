import { useContext as callContext } from 'react';
import { Context, DispatchContext } from './index';

export function useContext() {
  const state = callContext(Context);
  if (!state) throw new Error('Provider not found');
  return state;
}

export function useDispatch() {
  const dispatch = callContext(DispatchContext);
  if (!dispatch) throw new Error('Dispatch not found');
  return dispatch;
}
