import React, { useLayoutEffect, useRef } from "react";
import { validPropName } from './utils';
const KEY_EVENT = "keydown";

const WrapComp = (props:any) => {
  const {WrapedComponent,bindKeys,needFouce} = props

  const ref = useRef<any>(null);

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
      {needFouce ? (
        <div ref={ref} tabIndex={-1}>
          <WrapedComponent/>
        </div>
      ) : (
        <WrapedComponent/>
      )}
    </>
  );
};

const withKeyEvent = (bindKeys: any, needFouce?: boolean): any => {
  return (WrapedComponent:any)=>{
    if (!bindKeys) return WrapedComponent;
    return WrapComp.bind(null,{WrapedComponent,bindKeys, needFouce})
  }
};

export default withKeyEvent;
