import {Injectable} from '@angular/core'
import {Observable, Subject} from 'rxjs'


@Injectable({
   providedIn: 'root',
})
export class MessageService
{
  message : string
  // use subject to send out notifications
  // RecievMessageComponent is subscriber when
  // subject recievees (using next())new notification.
  private subject = new Subject<any>();

  sendMessage(message : string)
  {
     this.subject.next(message);
  }

  getMessage() : Observable<any>
  {
    return this.subject.asObservable();
  }

}