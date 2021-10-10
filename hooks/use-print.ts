import { useEffect, useRef, useState } from 'react';

function useWindowPrint(options: {
  onBeforePrint: () => void;
  onAfterPrint: () => void;
}) {
  type State = "Ready" | "Printing" | "Printed";
  const [state, setState] = useState<State>("Ready");

  const onAfterCurrentPrint = useRef<() => void>(options.onAfterPrint);
  useEffect(() => {
    switch (state) {
      case "Ready":
        break;
      case "Printing":
        window.print();
        break;
      case "Printed":
        if (onAfterCurrentPrint.current) {
          onAfterCurrentPrint.current();
        }
        setState("Ready");
        break;
      default: {
        const _: never = state;
        throw new Error("switch is not exhaustive");
      }
    }
  }, [state, setState]);

  useEffect(() => {
    const handleAfterPrint = () => {
      setState("Printed");
    };
    window.addEventListener("afterprint", handleAfterPrint);

    return () => {
      window.removeEventListener("afterprint", handleAfterPrint);
    };
  }, []);

  return function print() {
    options.onBeforePrint();
    onAfterCurrentPrint.current = options.onAfterPrint;
    setState("Printing");
  };
}

export default useWindowPrint
