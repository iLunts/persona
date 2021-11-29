import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonAppComponent } from './button-app/button-app.component';

@NgModule({
  declarations: [ButtonAppComponent],
  imports: [CommonModule],
  exports: [ButtonAppComponent],
})
export class ButtonsModule {}
