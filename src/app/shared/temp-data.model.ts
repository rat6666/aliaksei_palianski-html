export class TempData {
  riskName: string;

  time: string;

  prob: string;

  description: string;

  constructor(
    _riskName: string,
    _time: string,
    _prob: string,
    _description: string
  ) {
    this.riskName = _riskName;
    this.time = _time;
    this.prob = _prob;
    this.description = _description;
  }
}
