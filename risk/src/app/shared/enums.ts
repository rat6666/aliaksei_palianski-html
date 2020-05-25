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
