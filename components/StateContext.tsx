import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type SharedStateType = {
  message?: string;
};

type StateContextType = {
  sharedState: SharedStateType;
  setSharedState: React.Dispatch<React.SetStateAction<SharedStateType>>;
};

const StateContext = createContext<StateContextType | undefined>(undefined);

type StateProviderProps = {
  children: ReactNode;
};
export const StateProvider: React.FC<StateProviderProps> = ({ children }) => {
  const initialState = () => {
    if (typeof window !== 'undefined') {
      const storedState = localStorage.getItem('sharedState');
      return storedState ? JSON.parse(storedState) : {};
    } else {
      return {};
    }
  };

  const [sharedState, setSharedState] = useState<SharedStateType>(initialState);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('sharedState', JSON.stringify(sharedState));
    }
  }, [sharedState]);

  return (
    <StateContext.Provider value={{ sharedState, setSharedState }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = (): StateContextType => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error('useStateContext must be used within a StateProvider');
  }
  return context;
};
