import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext(undefined);

export function AppProvider({ children }) {
  const [region, setRegion] = useState('Global');
  return (
    <AppContext.Provider value={{ region, setRegion }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used inside an AppProvider');
  return ctx;
};