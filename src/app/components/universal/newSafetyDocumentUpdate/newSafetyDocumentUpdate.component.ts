import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-Safety-Document-Update',
  templateUrl: './newSafetyDocumentUpdate.component.html',
  styleUrls: ['./newSafetyDocumentUpdate.component.scss']
})
export class NewSafetyDocumentUpdateComponent implements OnInit{
  public safetyDocumentUpdated: boolean;

  @Input() data: {
    heading: string;
    body: string;
    alertType: string;
    addLink?: boolean;
  };


  public alertIconStyle: {[key: string]: string};

  // TODO: Implement the checkSafetyDocumentUpdated method
  /**
   * @description This method is called when the safety document has been updated. It will display an alert to the user on the homepage view using newSafetyDocumentUpdate component.
   * @param {boolean} event
   * @returns {void}
   * @todo This method requires implementation, now that the safety document update has been moved to the back end. Will require back end changes as well, requesting the back end to update the safety document.
   *
   */
  public checkSafetyDocumentUpdated(event: boolean): void {
    this.safetyDocumentUpdated = event;
    if (this.safetyDocumentUpdated) {
      this.data.alertType = 'success';
      this.data.heading = 'Safety Document Updated';
      this.data.body = 'The safety document has been successfully updated.';
    }
  };

  constructor() { }

  ngOnInit() {
    this.safetyDocumentUpdated = true;

  }

}
