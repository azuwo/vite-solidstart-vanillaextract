import { Character, Lang, Logo, Moon, Sun } from "~/ui/assets/icons";

import { DropdownMenu } from "@kobalte/core";
import { useI18n } from "@solid-primitives/i18n";
import { Show, createSignal } from "solid-js";
import { LangRecord } from "~/ui/i18n/context";
import { useTheme } from "../contexts/theme_context/theme_context";
import Styled from "./navbar.css";

const Navbar = () => {
  const [theme, { toggleTheme, isLightTheme }] = useTheme();
  const [t, { locale }] = useI18n();
  const [open, setOpen] = createSignal(false);

  const handleLanguageChange = (lang: string) => {
    locale(lang);
    setOpen(false);
  };

  return (
    <div class={Styled.Wrapper}>
      <Logo class={Styled.Logo} />
      <h3>{`${theme()} --- ${locale()}`}</h3>
      <div class={Styled.IconContainer}>
        <DropdownMenu.Root open={open()} onOpenChange={setOpen}>
          <DropdownMenu.Trigger class={Styled.LanguagePicker}>
            <DropdownMenu.Icon>
              <Lang class={Styled.Logo} />
            </DropdownMenu.Icon>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content class={Styled.LanguagePickerContent}>
              <DropdownMenu.RadioGroup
                value={locale()}
                onChange={handleLanguageChange}
              >
                <Show when={locale() !== LangRecord.en}>
                  <DropdownMenu.RadioItem
                    class={Styled.LanguagePickerItem}
                    value={LangRecord.en}
                  >
                    EN
                  </DropdownMenu.RadioItem>
                </Show>
                <Show when={locale() !== LangRecord.es}>
                  <DropdownMenu.RadioItem
                    class={Styled.LanguagePickerItem}
                    value={LangRecord.es}
                  >
                    ES
                  </DropdownMenu.RadioItem>
                </Show>
              </DropdownMenu.RadioGroup>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
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
