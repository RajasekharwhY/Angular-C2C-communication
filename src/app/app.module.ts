import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SendMessageComponent } from './Sendmessagecomponent'
import { RecieveMessageComponent } from './Recievemessagecomponent'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,SendMessageComponent, RecieveMessageComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
