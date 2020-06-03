export interface User {
  id: string;
  password: string;
  setUser(password: string, name: string): void;
  username: string;
}

export interface Risk {
  description: string;
  id: string;
  probability: number;
  riskName: string;
  time: number;
  userID: string;
}

export interface RiskCalculator {
  likeProb: number;
  likeTime: number;
  maxProb: number;
  maxTime: number;
  minProb: number;
  minTime: number;
  setProbNull(): void;
  setTimeNull(): void;
  sumProb(): number;
  sumTime(): number;
}

export interface CalculatorErrors {
  maxProb: boolean;
  maxTime: boolean;
  minProb: boolean;
  minTime: boolean;
  setFalse(): void;
}
