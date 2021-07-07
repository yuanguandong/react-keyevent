import React, { useCallback, useLayoutEffect, useRef } from 'react';
import KeyCode from "./validate";
const KEY_EVENT = 'keydown';

const keyReg = /^on(Alt|Ctrl|Meta|Shift){0,4}([A-Z][a-z]*)+$/;

const withKeyEvent = (bindKeys: any, needFouce?: boolean) => {

  const ref = useRef<HTMLDivElement>(null);

  const validPropName = useCallback((e:KeyboardEvent, keyName:string) => {
    if (keyReg.test(keyName) && KeyCode.validatKey(e, keyName)) {
      return true
    }
    return false
  }, []);
  
  return (WrapedComponent: React.ReactNode) => {
    if (!bindKeys) return WrapedComponent;

    useLayoutEffect(() => {
      const dom = ref.current || window;
      const callback:any = (ev: KeyboardEvent) => {
        Object.keys(bindKeys).filter((keyName) => validPropName(ev, keyName)).forEach(key => {
          bindKeys[key](ev);
        })
      }
      if (dom) dom.addEventListener(KEY_EVENT, callback);
      return () => {
        if (dom) dom.removeEventListener(KEY_EVENT, callback);
      };
    }, [ref, bindKeys]);

    return needFouce? <div ref={ref} tabIndex={-1}>
      {WrapedComponent}
    </div> : WrapedComponent
  }
}

export default withKeyEvent;