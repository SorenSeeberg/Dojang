import * as React from "react";
import { AnswerList } from "./AnswerList";
import { ProgressBar } from "../componentsAtomic/ProgressBar";
import { Headline } from "../componentsAtomic/Headline";
import { quizz } from "../typing/dataTypes";

export class Quizz extends React.Component<{}, quizz> {
  state = {
    quizz: {
      headline: "Håndteknikker",
      question: { id: 1, text: "Arae Makki" },
      answerId: 2,
      answers: [
        { id: 0, text: "mep" },
        { id: 1, text: "bok bok 2" },
        { id: 2, text: "Blokering i lav sektion" },
        { id: 3, text: "hep" }
      ]
    }
  };

  render() {
    return (
      <React.Fragment>
        <Headline size={2} text={this.state.quizz.headline} />
        <ProgressBar key={0} progress={35} text={"7 / 20"} />
        <ProgressBar key={1} progress={75} text={"7 / 20"} />
        <Headline size={3} text={this.state.quizz.question.text} />
        <AnswerList quizz={this.state.quizz} />
      </React.Fragment>
    );
  }
}
