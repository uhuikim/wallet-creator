export type State = {
  isLogin?: boolean;
  msgOpen?: boolean;
  message?: string;
  nemonic?: string;
};

export type Action =
  | { type: 'SET_LOGIN'; nemonic?: string }
  | { type: 'SET_MODAL_OPEN'; message?: string }
  | { type: 'SET_MODAL_CLOSE' };

export interface ContextType {
  state: State;
  setLogin: (nemonic: string) => void;
  setModalOpen: (message: string) => void;
  setModalClose: () => void;
}
