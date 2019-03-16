import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule,} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTreeModule, MatIconModule, MatButtonModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacturesComponent } from './factures/factures.component';
import { FactureComponent } from './factures/facture/facture.component';
import { FactureDetailsComponent } from './factures/facture-details/facture-details.component';
import { FactureService } from './shared/facture.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { PageAccuielComponent } from './page-accuiel/page-accuiel.component';
import {MatNativeDateModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    FacturesComponent,
    FactureComponent,
    FactureDetailsComponent,
    PageAccuielComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    MatTreeModule, MatIconModule, MatButtonModule,
    MatTabsModule,
    MatTableModule,
    MatNativeDateModule,
    ReactiveFormsModule

  ],
  entryComponents:[FactureDetailsComponent],
  providers: [FactureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
