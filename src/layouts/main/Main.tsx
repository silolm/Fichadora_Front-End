import React from "react";
import Sidebar from "./components/sidebar";

//import "./App.css";

interface IProps {
  children: any
}

function Main({ children }: IProps) {
  return (
    <div>
      <Sidebar open={true} variant={"persistent"}/>
      {children}
    </div>
  );
}

export default Main;
