import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitDetailsComponent } from './components/produit-details/produit-details.component';
import { AllProduitsComponent } from './components/all-produits/all-produits.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProduitDetailsComponent,
    AllProduitsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ProduitsModule { }
