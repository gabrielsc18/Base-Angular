import { ExampleContryService } from './example-country.service';
import { TestBed } from '@angular/core/testing';


describe('ExampleWeatherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExampleContryService = TestBed.get(ExampleContryService);
    expect(service).toBeTruthy();
  });
});
