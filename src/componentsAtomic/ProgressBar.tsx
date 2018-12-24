import * as React from 'react';

export type ProgressBarProps = {
  progress: number;
  text: string;
};

export class ProgressBar extends React.Component<ProgressBarProps> {
  render() {
    const { progress, text } = this.props;
    return (
      <React.Fragment>
        <div className="progress-bar-frame">
          <div className="progress-bar" />
          <div className="progress-bar-info">
            {text} ({progress}%)
          </div>
        </div>
        <style jsx>
          {`
            .progress-bar-frame {
              position: relative;
              background: black;
            }
            .progress-bar-info {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              display: flex;
              color: white;
              font-weight: bold;
              font-size: 26px;
              height: 50px;
              justify-content: center;
              align-items: center;
              background-color: transparent;
            }
            .progress-bar {
              display: flex;
              align-items: center;
              width: ${progress}%;
              height: 50px;
              background: red;
              padding-left: 10px;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}
