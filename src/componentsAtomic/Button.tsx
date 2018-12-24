//import * as React from "react";
//import React, { Component, AllHTMLAttributes } from "react";
import * as React from "react";

// extends AllHTMLAttributes<HTMLButtonElement>
interface ButtonProps {
  text: string;
}

export class Button extends React.Component<ButtonProps> {
  render() {
    const { text } = this.props;

    return (
      <React.Fragment>
        <button>{text}</button>
        <style jsx>
          {`
            button {
              padding: 0;
              margin: 2px 0;
              border: none;
              width: 100%;
              height: 50px;
              font-size: 24px;
              border-radius: 5px;
            }
            button:hover {
              background: red;
              color: white;
            }
            button:focus {
              outline: 0;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}
