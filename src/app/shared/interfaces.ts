export interface User {
  id: string;
  username: string;
  password: string;
  risks: any;
}

export interface Risk {
  riskName: string;
  time: string;
  prob: string;
  description: string;
}

export interface Cals {
  minProb: number;
  maxProb: number;
  likeProb: number;
  minTime: number;
  maxTime: number;
  likeTime: number;
}
