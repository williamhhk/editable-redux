import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './todo/reducers/todo.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { appStore } from './app.stores';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,  
    StoreModule.forRoot(appStore),
    FormsModule,
    StoreDevtoolsModule.instrument()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
