import {NgModule} from '@angular/core';
import {CapPipe} from './cap.pipe';

@NgModule({
  declarations: [ CapPipe ],
  exports: [ CapPipe ]
})
export class SharedModule {
}
