import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { informationChannelsPage } from './informationChannels.page';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: informationChannelsPage }]),
    MatExpansionModule
  ],
  declarations: [informationChannelsPage]
})
export class informationChannelsPageModule {}
