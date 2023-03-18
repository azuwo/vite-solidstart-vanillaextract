
import Styled from "./Counter.css";
import { useCounter } from "./counter_context";


export default function Counter() {
  const [count,{increment}] = useCounter();

  return (
    <>
      <button class={Styled.myStyle} onClick={() => increment()}>
        Clicks: {count()}
      </button>
    </>
  );
}
