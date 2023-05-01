import Character from "~/ui/assets/icons/character.svg?component-solid";
import Logo from "~/ui/assets/icons/logo.svg?component-solid";
import Moon from "~/ui/assets/icons/theme_moon.svg?component-solid";
import Sun from "~/ui/assets/icons/theme_sun.svg?component-solid";

import { useTheme } from "../contexts/theme_context/theme_context";
import Styled from "./navbar.css";

const Navbar = () => {
  const [theme, { toggleTheme, isLightTheme }] = useTheme();
  return (
    <div class={Styled.Wrapper}>
      <Logo class={Styled.Logo} />
      <h1>{theme()}</h1>
      <div>
        <Character class={Styled.Logo} />
        {isLightTheme() ? (
          <Moon class={Styled.Logo} onClick={toggleTheme} />
        ) : (
          <Sun class={Styled.Logo} onClick={toggleTheme} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
