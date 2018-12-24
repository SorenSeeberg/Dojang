import * as React from "react";

export type HeadlineProps = {
  size: number;
  text: string;
};

export class Headline extends React.Component<HeadlineProps> {
  render() {
    const { size, text } = this.props;

    return (
      <React.Fragment>
        {size === 1 ? (
          <h1> {text}</h1>
        ) : size === 2 ? (
          <h2>{text}</h2>
        ) : (
          <h3>{text}</h3>
        )}
        <style jsx>
          {`
            h1,
            h2,
            h3 {
              margin: 10px 0;
              padding-left: 5px;
              text-align: left;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}
