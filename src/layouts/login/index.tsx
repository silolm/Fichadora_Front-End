import React from "react";

//import "./App.css";

interface IProps {
  children: any
}

function Main({ children }: IProps) {
  return (
    <div>
      {children}
    </div>
  );
}

export default Main;
