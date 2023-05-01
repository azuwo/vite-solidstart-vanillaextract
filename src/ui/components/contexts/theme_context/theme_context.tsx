import {
  Accessor,
  createContext,
  createSignal,
  JSX,
  useContext,
} from "solid-js";
import { themesRecord } from "~/ui/styles/themes";

type TStore = [
  Accessor<string>,
  {
    toggleTheme(): void;
    changeTheme(newTheme: string): void;
    isLightTheme(): boolean;
  }
];

const ThemeContext = createContext<TStore>();

type ThemeProviderProps = {
  theme: string;
  children: JSX.Element;
};

export const ThemeProvider = (props: ThemeProviderProps) => {
  const [theme, setTheme] = createSignal<string>(
    props.theme || themesRecord.CoreLightTheme
  );
  const store: TStore = [
    theme,
    {
      toggleTheme: () =>
        setTheme(
          theme() === themesRecord.CoreLightTheme
            ? themesRecord.CoreDarkTheme
            : themesRecord.CoreLightTheme
        ),
      changeTheme: (newTheme) => setTheme(newTheme),
      isLightTheme: () =>
        theme() === themesRecord.CoreLightTheme ? true : false,
    },
  ];

  return (
    <ThemeContext.Provider value={store}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return themeContext;
};
