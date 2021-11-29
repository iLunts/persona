import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BlocksModule } from './blocks/blocks.module';
import { ButtonsModule } from './buttons/buttons.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, RouterModule, BlocksModule, ButtonsModule],
  exports: [FooterComponent, BlocksModule],
})
export class ComponentsModule {}
