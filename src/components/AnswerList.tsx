import * as React from "react";
import { Button } from "../componentsAtomic/Button";
import { quizz, answer } from "../typing/dataTypes";

export type AnswerListProps = {
  quizz: quizz;
};

export type AnswerProps = {
  answer: answer;
};

export class AnswerList extends React.Component<AnswerListProps> {
  render() {
    const { quizz } = this.props;

    return (
      <React.Fragment>
        {quizz.answers.map((a, i) => (
          <Answer key={i} answer={a} />
        ))}
      </React.Fragment>
    );
  }
}

class Answer extends React.Component<AnswerProps> {
  render() {
    const { answer } = this.props;

    return (
      <React.Fragment>
        <Button text={answer.text} />
      </React.Fragment>
    );
  }
}
