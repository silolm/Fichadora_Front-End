import React from "react";
import "./styles.scss";
import avatar from "../../assets/avatar.png";

interface IProps {
  DNI: string
  name: string
  lastName: string
}

export function ListItem({ DNI, name, lastName }: IProps) {
  return (
    <div className="listEmployees">
      <div className="containerEmployee">
        <img src={avatar} alt={""}/>
        <span className='info'>{DNI}</span>
        <span className='info'>{name}</span>
        <span className='info'>{lastName}</span>
      </div>
    </div>
  );
}