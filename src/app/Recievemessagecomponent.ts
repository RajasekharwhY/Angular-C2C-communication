import {Component, OnInit, OnDestroy} from '@angular/core'
import {MessageService} from './messageService'
import {Subscription} from 'rxjs'

@Component({
  selector : 'app-recieveMessage',
  templateUrl : './Recievemessagecomponent.html'

})
export class RecieveMessageComponent implements OnInit
{
 displayMessage : string
 subscription :Subscription
 constructor(private messageService : MessageService) 
 {
  this.subscription = this.messageService.getMessage().subscribe(msg => {this.displayMessage = msg});
 }

 ngOnInit()
 {
  
 }

 ngOnDestroy()
 {
  this.subscription.unsubscribe();
 }

} 