import { createContext, Dispatch, ReactNode, useReducer } from 'react';
import { State, Action, ContextType } from './type';

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_LOGIN':
      return {
        isLogin: true,
        nemonic: action.nemonic,
      };
    case 'SET_MODAL_OPEN':
      return {
        msgOpen: true,
        message: action.message,
      };

    case 'SET_MODAL_CLOSE':
      return {
        msgOpen: false,
      };
    default:
      return state;
  }
}

const initialState: State = {
  isLogin: false,
  msgOpen: false,
  message: '',
};

export const GlobalContext = createContext<ContextType>({
  state: initialState,
  setLogin: () => {},
  setModalOpen: () => {},
  setModalClose: () => {},
});

const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setLogin = (nemonic: string) => {
    dispatch({ type: 'SET_LOGIN', nemonic });
  };

  const setModalOpen = (message: string) => {
    dispatch({ type: 'SET_MODAL_OPEN', message });
  };

  const setModalClose = () => {
    dispatch({ type: 'SET_MODAL_CLOSE' });
  };

  return (
    <GlobalContext.Provider
      value={{ state, setLogin, setModalOpen, setModalClose }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
