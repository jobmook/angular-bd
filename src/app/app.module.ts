import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CamelCasePipe } from './pipes/camel-case.pipe';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';

@NgModule({
  declarations: [         // components, directives, pipes
    AppComponent,
    CamelCasePipe,
    LifecycleComponent
  ],
  imports: [              // modules waarvan je de components,
                          // directives en pipes hier wilt gebruiken
    BrowserModule,
    FormsModule,          // voor template-driven forms: ngModel
    ReactiveFormsModule,  // voor model-driven forms: formGroup
  ],
  providers: [],          // services, globale settings, ...
  bootstrap: [AppComponent]
})
export class AppModule { }
