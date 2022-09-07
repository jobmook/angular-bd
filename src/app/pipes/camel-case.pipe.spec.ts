/*
describe(string, function) = testsuite
it(string, function) = individual test
expect(actualValue).toBe(expectedValue)
                    ☝ = matcher
*/

import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CamelCasePipe } from './camel-case.pipe';

@Component({
  template: '<div>{{ value | camelcase }}</div>'
})
export class CamelCasePipeHostComponent {
  value!: string;
}

describe('Pipe: CamelCasePipe', () => {
  describe('CamelCasePipe in isolation', () => {
    let sut: CamelCasePipe;
    beforeEach(() => {
      sut = new CamelCasePipe();
    });
  
    it('should camelcase a single word', () => {
      const output = sut.transform('hAlLO');
      expect(output).toBe('hallo');
    });
  
    it('should camelcase a line of text', () => {
      const output = sut.transform('hallo DAAR even iETs testen');
      expect(output).toBe('halloDaarEvenIetsTesten');
    });
  
    it('should handle multiple space gracefully', () => {
      const output = sut.transform('hallo DAAR     even iETs    testen');
      expect(output).toBe('halloDaarEvenIetsTesten');
    });
  
    it('should replace an undefined value wityh an empty string', () => {
      const output = sut.transform(undefined)
      expect(output).toBe('');
    });
  });

  describe('CamelCasePipe inside a Component', () => {
    // 🛏 ATB = Angular TestBed

    // wrapper om component heen (zo kom je bij template en class)
    let fixture: ComponentFixture<CamelCasePipeHostComponent>;
    // wrapper om de template heen, met veel methodes, bijv. query()
    let debugElement: DebugElement;
    // de gebruikte class
    let component: CamelCasePipeHostComponent;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [CamelCasePipe, CamelCasePipeHostComponent]
      });

      fixture = TestBed.createComponent(CamelCasePipeHostComponent);
      debugElement = fixture.debugElement;
      component = fixture.componentInstance;
    });

    it('should create an instance', () => {
      expect(fixture).toBeTruthy();
    });

    it('should display "halloDaar"', () => {
      component.value = 'Hallo      dAAr';
      fixture.detectChanges();    // 🔍 vraag Angular om change-detection te doen:
                                  // update data bindings

      const div: HTMLDivElement = debugElement.query(By.css('div')).nativeElement;
      expect(div.innerText.trim()).toBe('halloDaar');
    });
  });
});
