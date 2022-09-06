import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CamelCasePipe } from './pipes/camel-case.pipe';

@NgModule({
  declarations: [         // components, directives, pipes
    AppComponent,
    CamelCasePipe
  ],
  imports: [              // modules waarvan je de components,
                          // directives en pipes hier wilt gebruiken
    BrowserModule,
    FormsModule
  ],
  providers: [],          // services, globale settings
  bootstrap: [AppComponent]
})
export class AppModule { }
