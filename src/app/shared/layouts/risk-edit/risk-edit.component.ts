import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Risk } from '../../interfaces';
import { defaultRisk } from '../../enums';
import { RisksDataService } from '../../services/risks-data.service';

@Component({
  selector: 'app-risk-edit',
  templateUrl: './risk-edit.component.html',
  styleUrls: ['./risk-edit.component.scss'],
})
export class RiskEditComponent implements OnInit {
  childMessage: Risk = defaultRisk;

  @ViewChild('descriptionInput') descriptionInput: ElementRef;

  constructor(private dataService: RisksDataService) {}

  ngOnInit(): void {
    this.dataService.getRisk().subscribe((data: Risk) => {
      this.childMessage = data;
    });
  }

  updateRisk(): void {
    console.log(this.descriptionInput.nativeElement.value);
  }

  resetRisk(): void {
    this.descriptionInput.nativeElement.value = this.childMessage.description;
  }
}
