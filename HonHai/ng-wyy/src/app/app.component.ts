import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'ng-wyy';
  navList:Array<any> = [
    { name: '發現音樂' },
    { name: '我的音樂' },
    { name: '朋友' },
    { name: '商城' },
    { name: '音樂人' },
    { name: '下載客戶端' },
  ]
}
