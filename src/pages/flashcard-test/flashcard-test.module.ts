import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlashcardTestPage } from './flashcard-test';

@NgModule({
  declarations: [
    FlashcardTestPage,
  ],
  imports: [
    IonicPageModule.forChild(FlashcardTestPage),
  ],
})
export class FlashcardTestPageModule {}
