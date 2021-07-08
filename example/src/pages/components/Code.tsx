import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import typescript from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

SyntaxHighlighter.registerLanguage('javascript', typescript);

export default () => (
  <div className="code">
    <SyntaxHighlighter
      language="typescript"
      // showLineNumbers={true}
      wrapLines={true}
      style={atomOneDark}
    >
      {str}
    </SyntaxHighlighter>
  </div>
);


const str = `import Keyevent from "@/lib";
import React, { useState } from "react";

const TopSide = () => {
  const [count, setCount] = useState(0);
  const onAltT = () => {
    setCount(count + 1);
  };
  return (
    <Keyevent
      className="TopSide"
      events={{
        onAltT,
      }}
      needFocusing
    >
      <span className="tip">Click To Focusing</span>
      <div className="group">
        <span className="key">Alt</span>
        <span className="key">T</span>
        <span className="count">{count}</span>
      </div>
    </Keyevent>
  );
};
export default TopSide`