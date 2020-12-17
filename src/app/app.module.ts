import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from '../components/Movie/movie.compoment';
import { AddDashPipe } from '../shared/Pipes/add-dash.pipe';

@NgModule({
  declarations: [AppComponent, MovieComponent, AddDashPipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
