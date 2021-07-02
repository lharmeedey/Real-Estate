import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertiesSliderComponent } from './properties-slider/properties-slider.component';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { ShowcaseEstateComponent } from './body/showcase-estate/showcase-estate.component';

const routes: Routes = [
  {
    path:'property',
    component:PropertiesSliderComponent
  },
  {
    path:'',
    component:BodyComponent
  },
  {
    path:'home',
    component:BodyComponent
  },
  {
    path:'showcase',
    component:ShowcaseEstateComponent
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
