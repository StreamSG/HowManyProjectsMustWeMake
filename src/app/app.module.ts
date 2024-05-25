import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './components/views/homepage/homepage.component';
import { TicketGeneratorComponent } from './components/views/ticket-generator/ticket-generator.component';
import { HelpComponent } from './components/views/help/help.component';
import { OfficeInfoComponent } from './components/views/office-info/office-info.component';
import { TouchNGoComponent } from './components/touch-n-go/touch-n-go.component';
import { WeTrackComponent } from './components/views/we-track/we-track.component';
import { WeTrackItemComponent } from './components/we-track/we-track-item/we-track-item.component';
import { WeTrackListComponent } from './components/we-track/we-track-list/we-track-list.component';
import { WeTrackEditComponent } from './components/we-track/we-track-edit/we-track-edit.component';
import { WeTrackCommentComponent } from './components/we-track/we-track-comment/we-track-comment.component';
import { QcTimerComponent } from './components/views/qc-timer/qc-timer.component';
import { UniversalDropdownDotsComponent } from './components/universal/universal-dropdown-dots/universal-dropdown-dots.component';
import { UniversalTicketTypeComponent } from './components/universal/universal-ticket-type/universal-ticket-type.component';
import { UniversalFullScreenModalComponent } from './components/universal/universal-full-screen-modal/universal-full-screen-modal.component';
import { UniversalDropdownInputFieldComponent } from './components/universal/universal-dropdown-input-field/universal-dropdown-input-field.component';
import { UniversalPeBoxComponent } from './components/universal/proof-of-concept/universal-pe-box/universal-pe-box.component';
import { WeatherAlertComponent } from './components/weather-alert/weather-alert.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { JobViewComponent } from './components/views/job-view/job-view.component';
import { UniversalInlineAlertComponent } from './components/universal/universal-inline-alert/universal-inline-alert.component';
import { UniversalNavTabComponent } from './components/universal/universal-nav-tab/universal-nav-tab.component';
import { JobSubviewComponent } from './components/views/job-view/subviews/job-subview/job-subview.component';
import { CustomerSubviewComponent } from './components/views/job-view/subviews/customer-subview/customer-subview.component';
import { HistorySubviewComponent } from './components/views/job-view/subviews/history-subview/history-subview.component';
import { FacilitiesSubviewComponent } from './components/views/job-view/subviews/facilities-subview/facilities-subview.component';
import { TestsSubviewComponent } from './components/views/job-view/subviews/tests-subview/tests-subview.component';
import { UniversalFacilitiesCardComponent } from './components/universal/universal-facilities-card/universal-facilities-card.component';
import { WeatherViewComponent } from './components/views/weather-view/weather-view.component';
import { SidebarListComponent } from './components/header/sidebar-list/sidebar-list.component';
import { NewSafetyDocumentUpdateComponent } from "./components/universal/newSafetyDocumentUpdate/newSafetyDocumentUpdate.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    TicketGeneratorComponent,
    HelpComponent,
    OfficeInfoComponent,
    TouchNGoComponent,
    WeTrackComponent,
    WeTrackItemComponent,
    WeTrackListComponent,
    WeTrackEditComponent,
    WeTrackCommentComponent,
    QcTimerComponent,
    UniversalDropdownDotsComponent,
    UniversalTicketTypeComponent,
    UniversalFullScreenModalComponent,
    UniversalDropdownInputFieldComponent,
    UniversalPeBoxComponent,
    WeatherAlertComponent,
    JobListComponent,
    JobViewComponent,
    UniversalInlineAlertComponent,
    UniversalNavTabComponent,
    JobSubviewComponent,
    CustomerSubviewComponent,
    HistorySubviewComponent,
    FacilitiesSubviewComponent,
    TestsSubviewComponent,
    UniversalFacilitiesCardComponent,
    WeatherViewComponent,
    SidebarListComponent,
    NewSafetyDocumentUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
