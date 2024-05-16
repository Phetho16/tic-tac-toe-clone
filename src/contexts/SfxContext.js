import { createContext} from "react";
import useSound from "../hooks/UseSound";

export const  SfxContext = createContext({});

export const   SfxContextProvider = ({ children }) => {

const options = {
  volume: 0.05

}
  const hoverPath ="https://zaiocontent.s3.eu-west-2.amazonaws.com/sound-effects/tick.mp3"
  const hoverSfx = useSound(hoverPath, options)

  return (
  < SfxContext.Provider value={{hoverSfx}}>
      {children}
    </ SfxContext.Provider>
  );
};
