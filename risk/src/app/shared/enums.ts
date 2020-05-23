export const configAPI = {
  urlUsersDatabase: 'https://5e9162352810f4001648b889.mockapi.io/api/v1/users/',
  urlRisksDatabase: 'https://5e9162352810f4001648b889.mockapi.io/api/v1/risks/',
};

export const sessionStorageKey = {
  id: 'id',
  userName: 'userName',
};

export const defaultUser = {
  id: null,
  username: null,
  password: null,
};

export const typeSwitchs = {
  name: 'name',
  time: 'time',
  probability: 'probability',
  minProb: 'minProb',
  maxProb: 'maxProb',
  minTime: 'minTime',
  maxTime: 'maxTime',
};

export const calc = {
  minProb: 0,
  maxProb: 0,
  likeProb: 0,
  minTime: 0,
  maxTime: 0,
  likeTime: 0,
};

export const defaultRisk = {
  id: null,
  userID: null,
  riskName: null,
  time: null,
  probability: null,
  description: null,
};

export const defaultAddRisk = {
  id: 'newRisk',
  userID: null,
  riskName: null,
  time: null,
  probability: null,
  description: null,
};

export const MOCK = `[
  {
  "riskName": "Some data here numder 1",
  "time": "1",
  "prob": "1",
  "description": "this is data numder 1 big desription here dfgd dfg dfg ddfg dfdg dfdg dfgd dfg "
},
  {
  "riskName": "Some data here numder 2",
  "time": "2",
  "prob": "2",
  "description": "this is data numder 2"
},
  {
  "riskName": "Some data here numder 3",
  "time": "3",
  "prob": "3",
  "description": "this is data numder 3"
},
  {
  "riskName": "Some data here numder 4",
  "time": "4",
  "prob": "4",
  "description": "this is data numder 4"
},
{
  "riskName": "INCREDIBLE TOOLING from ANGULAR desription",
  "time": "1",
  "prob": "1",
  "description": "Build features quickly with simple, declarative templates. Extend the template language with your own components and use a wide array of existing components. Get immediate Angular-specific help and feedback with nearly every IDE and editor. All this comes together so you can focus on building amazing apps rather than trying to make the code work."
}

],`;
