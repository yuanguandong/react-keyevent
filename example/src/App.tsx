import React from "react";
import "./App.css";
import withKeyevent from './lib';

interface IProps {}

const App:React.FunctionComponent<any>= () =>{
  return <div className="App">1fdafdasfdasfd</div>;
}

export default withKeyevent({
  onMetaShiftU: ()=>{alert(1)}
})(App)
