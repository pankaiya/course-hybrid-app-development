import { NgModule } from '@angular/core';
import { AComponent } from './a/a';
import { BComponent } from './b/b';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [AComponent,
    BComponent],
	imports: [
		IonicModule.forRoot(ComponentsModule)
	],
	exports: [AComponent,
    BComponent]
})
export class ComponentsModule {}
