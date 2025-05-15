import Image from "next/image";
import LightMode from "../i/light-mode.png";
import DarkMode from "../i/dark-mode.png";
import { useIsDarkMode } from "../hooks/useIsDarkMode";

const DisplayModeButton = () => {
  const { isDarkMode, toggleDarkMode } = useIsDarkMode();

  return (
    <Image
      className="w-[25px] h-[25px]"
      src={isDarkMode ? LightMode : DarkMode}
      alt="light mode"
      onClick={() => {
        toggleDarkMode();
      }}
    />
  );
};

export default DisplayModeButton;
