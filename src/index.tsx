import React, { useLayoutEffect, useRef } from "react";
import { validPropName } from "./utils";
const KEY_EVENT = "keydown";

const KeyEvent = (props: any) => {
  const {
    children: WrapedComponent,
    needFocusing,
    bindKeys,
    className,
    style,
    ...restProps
  } = props;

  const ref = useRef<any>(null);
  console.log("WrapedComponent", WrapedComponent);
  useLayoutEffect(() => {
    const dom = ref.current || window;
    const callback: any = (ev: KeyboardEvent) => {
      Object.keys(bindKeys)
        .filter((keyName) => validPropName(ev, keyName))
        .forEach((key) => {
          bindKeys[key](ev);
        });
    };
    if (dom) dom.addEventListener(KEY_EVENT, callback);
    return () => {
      if (dom) dom.removeEventListener(KEY_EVENT, callback);
    };
  }, [bindKeys]);

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
