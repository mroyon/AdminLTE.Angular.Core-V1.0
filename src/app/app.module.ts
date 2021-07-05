import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenubarComponent } from './menubar/menubar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { InfoboxesComponent } from './infoboxes/infoboxes.component';
import { FooterComponent } from './footer/footer.component';
import { ReportdataComponent } from './reportdata/reportdata.component';
import { StatisticsdataComponent } from './statisticsdata/statisticsdata.component';
import { MembersstatisticsdataComponent } from './membersstatisticsdata/membersstatisticsdata.component';
import { ProductordersComponent } from './productorders/productorders.component';
import { ControlsidebarComponent } from './controlsidebar/controlsidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenubarComponent,
    BreadcrumbsComponent,
    InfoboxesComponent,
    FooterComponent,
    ReportdataComponent,
    StatisticsdataComponent,
    MembersstatisticsdataComponent,
    ProductordersComponent,
    ControlsidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
