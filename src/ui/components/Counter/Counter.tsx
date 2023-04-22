import { Button } from "@kobalte/core";
import Styled from "./Counter.css";
import { useCounter } from "./counter_context";

export default function Counter() {
  const [count, { increment }] = useCounter();

  return (
    <>
      <Button.Root class={Styled.myStyle} onClick={() => increment()}>
        Clicks: {count()}
      </Button.Root>
    </>
  );
}
