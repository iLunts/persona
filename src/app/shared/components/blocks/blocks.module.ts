import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { CameraComponent } from './camera/camera.component';
import { FaceFilterComponent } from './face-filter/face-filter.component';
import { FunMasksComponent } from './fun-masks/fun-masks.component';
import { ModelsFavoriteAppComponent } from './models-favorite-app/models-favorite-app.component';
import { NgxParallaxScrollModule } from 'ngx-parallax-scroll';

@NgModule({
  declarations: [
    MainComponent,
    CameraComponent,
    FaceFilterComponent,
    FunMasksComponent,
    ModelsFavoriteAppComponent,
  ],
  imports: [CommonModule, NgxParallaxScrollModule],
  exports: [
    MainComponent,
    CameraComponent,
    FaceFilterComponent,
    FunMasksComponent,
    ModelsFavoriteAppComponent,
  ],
})
export class BlocksModule {}
