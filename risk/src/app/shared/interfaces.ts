export interface User {
  id: string;
  username: string;
  password: string;
}

export interface Risk {
  id: string;
  userID: string;
  riskName: string;
  time: number;
  probability: number;
  description: string;
}

export interface Calc {
  minProb: number;
  maxProb: number;
  likeProb: number;
  minTime: number;
  maxTime: number;
  likeTime: number;
}
