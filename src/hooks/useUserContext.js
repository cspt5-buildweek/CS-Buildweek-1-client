import React, { createContext, useState, useCallback } from 'react';

export const UserContext = createContext(null);

const UserContextProvider = (value) => ({ children }) => {
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

const useUserData = () => {
  const [value, setValue] = useState({ name: 'test_1' });
  
  const UserProvider = useCallback(UserContextProvider(value), [value]);

  return { UserProvider, setValue };
};

export default useUserData;