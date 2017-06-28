// import { Component } from '@angular/core';
// import {UploadService} from './app.service';

// @Component({
// 	selector: 'my-app',
// 	template: `
// 	  <div>
// 	    <input type="file" (change)="onChange($event)"/>
// 	  </div>
// 	`,
// 	providers: [ UploadService ]
// })
// export class AppComponent {
//   constructor(private service:UploadService) {
//     this.service.progress$.subscribe(
//       data => {
//         console.log('progress = '+data);
//       });
//   }
  
//   onChange(event) {
//     console.log('onChange');
//     var files = event.srcElement.files;
//     console.log(files);
//     this.service.makeFileRequest('http://localhost:8182/upload', [], files).subscribe(() => {
//       console.log('sent');
//     });
//   }
// }