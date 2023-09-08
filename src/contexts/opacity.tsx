import React, {
  Dispatch,
  SetStateAction,
  createContext,
  ReactNode,
  useState,
  useContext,
} from "react";

export const OpacityContext = createContext<{
  opacity: number;
  setOpacity: Dispatch<SetStateAction<number>>;
}>({ opacity: 1, setOpacity: () => {} });

export const OpacityContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [opacity, setOpacity] = useState(1);

  return (
    <OpacityContext.Provider value={{ opacity, setOpacity }}>
      {children}
    </OpacityContext.Provider>
  );
};

export const useOpacityValue = () => useContext(OpacityContext);
