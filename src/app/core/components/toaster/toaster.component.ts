import { Component, OnInit } from '@angular/core';
import { ToasterService } from '../../services/toaster/toaster.service';
import { Message } from '../../services/toaster/Message';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss']
})
export class ToasterComponent implements OnInit {
  public messages: Message[];
  constructor(private toastService: ToasterService) {}

  ngOnInit() {
    this.messages = this.toastService.getMessages();
  }

  public dismiss(index: number) {
    this.toastService.dismissMessage(index);
  }
}
