import { Injectable } from '@angular/core';
import { Message } from './Message';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  public MessageArray: Message[];
  constructor() {
    this.MessageArray = [];
  }

  public getMessages(): any[] {
    return this.MessageArray;
  }

  public showError(content: string) {
    this.createMessage(content, 'error');
  }

  createMessage(content: string, msg) {
    const message = new Message(content, msg);
    this.MessageArray.push(message);
    this.dismissAfterSomeTime();
  }

  public dismissAfterSomeTime() {
    setTimeout(() => {
      this.dismissMessage(0);
    }, 4 * 1000);
  }

  public dismissMessage(index: number) {
    this.MessageArray.splice(index, 1);
  }
}
