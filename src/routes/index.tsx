import { Button } from "@kobalte/core";
import { useI18n } from "@solid-primitives/i18n";
import { useTheme } from "~/ui/components/contexts/theme_context/theme_context";
import Counter from "~/ui/components/Counter/Counter";

export default function Home() {
  const [theme, { toggleTheme }] = useTheme();
  const [t] = useI18n();
  return (
    <main class={theme()}>
      <Counter />
      <Button.Root onClick={() => toggleTheme()}>Change Theme</Button.Root>
      <p>{t("common.hello")}</p>
    </main>
  );
}
