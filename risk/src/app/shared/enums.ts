import { User } from './interfaces';

export const configAPI = {
  urlUsersDatabase: 'https://5e9162352810f4001648b889.mockapi.io/api/v1/users/',
  urlRisksDatabase: 'https://5e9162352810f4001648b889.mockapi.io/api/v1/risks/'
};

export const sessionStorageKey = {
  id: 'id',
  userName: 'userName'
};

export const defaultUser: User = {
  id: null,
  username: null,
  password: null,
  setUser(password: string, name: string): void {
    this.username = name;
    this.password = password;
  }
};

export const typeSwitchs = {
  name: 'name',
  time: 'time',
  probability: 'probability',
  minProb: 'minProb',
  maxProb: 'maxProb',
  minTime: 'minTime',
  maxTime: 'maxTime'
};

export const defaultRiskCalculator = {
  minProb: null,
  maxProb: null,
  likeProb: null,
  minTime: null,
  maxTime: null,
  likeTime: null,
  sumTime(): number {
    this.likeTime = (this.minTime + this.maxTime) / 2;
    return this.likeTime;
  },
  sumProb(): number {
    this.likeProb = (this.minProb + this.maxProb) / 2;
    return this.likeProb;
  },
  setTimeNull(): void {
    this.minTime = null;
    this.maxTime = null;
  },
  setProbNull(): void {
    this.minProb = null;
    this.maxProb = null;
  }
};

export const defaultRisk = {
  id: null,
  userID: null,
  riskName: null,
  time: null,
  probability: null,
  description: null
};

export const defaultAddRisk = {
  id: 'newRisk',
  userID: null,
  riskName: null,
  time: null,
  probability: null,
  description: null
};

export const defaultCalculatorErrors = {
  maxProb: false,
  maxTime: false,
  minProb: false,
  minTime: false,
  setFalse(): void {
    this.maxProb = false;
    this.maxTime = false;
    this.minProb = false;
    this.minTime = false;
  }
};
