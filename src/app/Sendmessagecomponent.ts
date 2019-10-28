import {Component} from '@angular/core'
import {MessageService} from './messageService'


@Component({
  selector : 'app-sendMessage',
  templateUrl : './Sendmessagecomponent.html'

})
export class SendMessageComponent
{
  constructor(private messageService : MessageService) { }  
  sendMessage(messageTxt: string) : void
  {        
    this.messageService.sendMessage(messageTxt);
    console.log(messageTxt);
  }
} 