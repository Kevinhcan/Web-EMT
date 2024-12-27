import React, { useState } from "react";
import styled from "styled-components";
import BurguerButton from "./BurguerButton";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  //En true lo pasa a false y vicerversa
  return (
    <>
      <NavContainer>
        <h2></h2>
        <div className={`links ${clicked ? "active" : ""}`}>
          <a onClick={handleClick} href="#h">
            Inicio
          </a>
          <a onClick={handleClick} href="#h">
            Calibraciones acréditadas
          </a>
          <a onClick={handleClick} href="#h">
            Termometros
          </a>
          <a onClick={handleClick} href="#h">
            Alcoholimetros
          </a>
          <a onClick={handleClick} href="#h">
            Detectores de gas
          </a>
          <a onClick={handleClick} href="#h">
            Medidores ambientales
          </a>
          <a onClick={handleClick} href="#h">
            Contactanos
          </a>
          {/* Cambiar a 
          -Nuestros productos
          -Nuestros servicios
          -Nosotros

          -- En listas desplegables
          */}
        </div>
        <div className="burguer">
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? "active" : ""}`}></BgDiv>
      </NavContainer>
    </>
  );
}

export default Navbar;

const NavContainer = styled.nav`
  height:4.5rem;
  background: rgb(28, 31, 76);
  background: rgb(212, 19, 90);
  background: linear-gradient(
    90deg,
    rgba(212, 19, 90, 1) 0%,
    rgba(28, 31, 76, 1) 69%
  );
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: #e8e8e8;
    text-decoration: none;
    margin-right: 1rem;
    font-size: larger;
  }
  .links {
    position: absolute;
    top: -70px;
    left: -2000px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;

    a {
      color: #e5e5e5/0;
      display: block;
      transition:1000ms;
      &:hover {
        background-color: #ffffff11;
        transition: 500ms;
        padding-left:10px;
        padding-right:10px;
        border-radius: 7px;
      }
    }

    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      a {
        font-size: 1rem;
        color: white;
        display: inline;
      }
    }
  }

  .links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 25%;
    left: 0;
    right: 0;
    text-align: center;
    a {
      &:hover {
        font-size: 2rem;
        transition: 200ms;
      }
      transition: 200ms;
      margin-top: 1rem;
      font-size: 1.5rem;
      color: #eaeaea;
    }
  }

  .burguer {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

const BgDiv = styled.div`
  transition: 500ms;
  background-color: #e5e5e5;
  width: 100%;
  height: 100%;
  top: -700px;
  left: -1000px;
  position: absolute;
  z-index: -1;
  &.active {
    border-radius: 0 0 80% 0;
    background: rgb(212, 19, 90);
    background: linear-gradient(
      90deg,
      rgba(212, 19, 90, 1) 0%,
      rgba(28, 31, 76, 1) 69%
    );
    transition: 300ms;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`;
