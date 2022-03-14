import { createContext, useState, ReactNode, useContext } from "react";

interface SessionContextData {}

interface SessionProviderProps {
  children: ReactNode;
}

const SessionsContext = createContext<SessionContextData>(
  {} as SessionContextData
);

export function SessionProvider({ children }: SessionProviderProps) {
  return(
    <SessionsContext.Provider value={{  }}>
      {children}
    </SessionsContext.Provider>
  )
}
