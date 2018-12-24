/* Data Types */

export type question = {
  id: number;
  text: string;
};

export type answer = {
  id: number;
  text: string;
};

export type quizz = {
  headline: string;
  question: question;
  answerId: number;
  answers: answer[];
};
