import { Accessor, createContext, createSignal, JSX, useContext } from "solid-js";

type TStore = [
  Accessor<number>,
  {
    increment(): void;
    decrement(): void;
  }
]

const CounterContext = createContext<TStore>();

type CounterProviderProps = {
  count: number;
  children: JSX.Element;
};

export function CounterProvider(props:CounterProviderProps ) {
  const [count, setCount] = createSignal<number>(props.count || 0);
  const store: TStore = [
    count,
    {
      increment() {
        setCount(c => c + 1);
      },
      decrement() {
        setCount(c => c - 1);
      }
    }
  ];

  return (
    <CounterContext.Provider value={store}>
      {props.children}
    </CounterContext.Provider>
  );
}

export const useCounter = () => {
  const counter = useContext(CounterContext);
  if (!counter) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return counter;
}