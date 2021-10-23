import { useReducer, createContext } from 'react';
import InitialState from './InitalState';
import Reducer, { DispatchType } from 'context/Reducer';
import { stateType } from 'context/InitalState';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Context = createContext<stateType | undefined>(InitialState);
const DispatchContext = createContext<DispatchType | undefined>(undefined);

const Provider = ({ children }: Props): JSX.Element => {
  const [state, dispatch] = useReducer(Reducer, InitialState);
  return (
    <DispatchContext.Provider value={dispatch}>
      <Context.Provider value={state}>{children}</Context.Provider>
    </DispatchContext.Provider>
  );
};

export { Context, DispatchContext, Provider };
