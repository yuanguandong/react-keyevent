import KeyCodes from './keyCodes';


export const keyReg = /^on(Alt|Ctrl|Meta|Shift){0,4}([A-Z][a-z]*)+$/;

export const splitKey = (str: string): Array<string> | null => {
  let reg = /[A-Z][a-z]*/g;
  return str.match(reg);
};

export const isSpecialKey = (key: string) => {
  return ["Alt", "Ctrl", "Meta", "Shift"].includes(key);
};

export const validatKey = (e: any, ename: string) => {
  // check、split
  const keys = splitKey(ename);
  if (!keys) return;
  for (let index = 0; index < keys.length; index++) {
    const key: string = keys[index];
    if (isSpecialKey(key)) {
      // Alt Ctrl Meta Shift
      if (!e[`${key.toLowerCase()}Key`]) return false;
    } else {
      // A-Z 0-9 ESC
      if (e.keyCode !== KeyCodes[key.toUpperCase()]) return false;
    }
  }
  return true;
};


export const validPropName = (e: KeyboardEvent, keyName: string) => {
  if (keyReg.test(keyName) && validatKey(e, keyName)) {
    return true;
  }
  return false;
};

