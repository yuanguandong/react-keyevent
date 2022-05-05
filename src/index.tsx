import React, { useLayoutEffect, useRef } from "react";
import { validPropName } from "./utils";
const KEY_EVENT = "keydown";

interface KeyEventProps {
  events: { [key: string]: (e: KeyboardEvent) => void };
  needFocusing?: boolean;
  [key: string]: any;
}

const KeyEvent = (props: KeyEventProps) => {
  const {
    children: WrapedComponent,
    needFocusing,
    events,
    className,
    style,
    ...restProps
  } = props;

  const ref = useRef<any>(null);

  useLayoutEffect(() => {
    const dom = ref.current || window;
    const callback: any = (ev: KeyboardEvent) => {
      const validEvents = Object.keys(events).filter((keyName) =>
        validPropName(ev, keyName)
      );
      let finalKey = "";
      validEvents.forEach((key) => {
        ev.stopPropagation();
        ev.preventDefault();
        if (key.length > finalKey.length) {
          finalKey = key;
        }
      });
      if (finalKey) {
        events[finalKey](ev);
      }
    };
    if (dom) dom.addEventListener(KEY_EVENT, callback);
    return () => {
      if (dom) dom.removeEventListener(KEY_EVENT, callback);
    };
  }, [events]);

  return (
    <>
      <div
        ref={needFocusing ? ref : null}
        tabIndex={-1}
        className={className}
        style={style}
        {...restProps}
      >
        {WrapedComponent}
      </div>
    </>
  );
};

export default KeyEvent;
