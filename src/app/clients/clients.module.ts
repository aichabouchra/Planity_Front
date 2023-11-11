import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllClientsComponent } from './components/all-clients/all-clients.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AllClientsComponent,
    ClientDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClientsModule { }
