import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-newSafetyDocumentUpdate',
  templateUrl: './newSafetyDocumentUpdate.component.html',
  styleUrls: ['./newSafetyDocumentUpdate.component.css']
})
export class NewSafetyDocumentUpdateComponent implements OnInit{

  safetyDocumentUpdated: boolean;

  @Input() heading: string;
  @Input() body: string;
  @Input() alertType: string; // Should be either warning, ??? or ???
  @Input() addLink: boolean = false; // When no value is given, default to false
  public alertIconStyle: {[key: string]: string};

  checkSafetyDocumentUpdated(event: boolean) {

    this.safetyDocumentUpdated = event;

    if (this.safetyDocumentUpdated) {
      this.alertType = "success";
      this.heading = "Safety Document Updated";
      this.body = "The safety document has been successfully updated.";
    }

  }

  constructor() { }

  ngOnInit() {
    this.safetyDocumentUpdated = true;
  }

}
