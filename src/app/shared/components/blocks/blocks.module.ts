import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgwWowModule } from 'ngx-wow';
import { ButtonsModule } from '../buttons/buttons.module';

import { BeautyCameraComponent } from './beauty-camera/beauty-camera.component';
import { CameraComponent } from './camera/camera.component';
import { FaceFilterComponent } from './face-filter/face-filter.component';
import { FunMasksComponent } from './fun-masks/fun-masks.component';
import { MainComponent } from './main/main.component';
import { ModelsFavoriteAppComponent } from './models-favorite-app/models-favorite-app.component';

@NgModule({
  declarations: [
    BeautyCameraComponent,
    CameraComponent,
    FaceFilterComponent,
    FunMasksComponent,
    MainComponent,
    ModelsFavoriteAppComponent,
  ],
  imports: [CommonModule, NgwWowModule, ButtonsModule],
  exports: [
    BeautyCameraComponent,
    CameraComponent,
    FaceFilterComponent,
    FunMasksComponent,
    MainComponent,
    ModelsFavoriteAppComponent,
  ],
})
export class BlocksModule {}
