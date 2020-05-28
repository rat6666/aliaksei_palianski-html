export interface User {
  id: string;
  password: string;
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

export interface Calc {
  likeProb: number;
  likeTime: number;
  maxProb: number;
  maxTime: number;
  minProb: number;
  minTime: number;
}
