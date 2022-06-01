import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'info-popup',
  templateUrl: './info-popup.component.html',
  styleUrls: ['./info-popup.component.css']
})
export class InfoPopupComponent implements OnInit {

  
  @Input() title = "Title";
  @Input() desc = "Description";
  @Input() visible="false";
  @Output() infoPopupClosed:EventEmitter<any> = new EventEmitter<any>();

  private elemt;

  constructor() { 
  }

  ngOnInit() {
  }

  public onClose(evt)
  {
    this.infoPopupClosed.emit();
  }


}
