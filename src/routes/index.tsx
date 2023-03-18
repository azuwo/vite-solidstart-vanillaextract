import { useTheme } from "~/ui/components/contexts/theme_context/theme_context";
import Counter from "~/ui/components/Counter/Counter";

export default function Home() {
  const [theme, { toggleTheme }] = useTheme();
  return (
    <main class={ theme() }>
      <Counter />
      <button onClick={ () => toggleTheme() }>Change Theme</button>
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
