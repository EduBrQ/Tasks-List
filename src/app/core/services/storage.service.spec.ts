import { TestBed } from '@angular/core/testing';
import { StorageService } from './storage.service';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageService);
    spyOn(localStorage, 'setItem').and.callFake(() => {});
    spyOn(localStorage, 'getItem').and.callFake(() => null);
    spyOn(localStorage, 'removeItem').and.callFake(() => {});
    spyOn(localStorage, 'clear').and.callFake(() => {});
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should save data to localStorage', () => {
    service.setItem('key', { test: 'value' });
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'key',
      JSON.stringify({ test: 'value' })
    );
  });

  it('should retrieve data from localStorage', () => {
    const mockData = JSON.stringify({ test: 'value' });
    (localStorage.getItem as jasmine.Spy).and.returnValue(mockData);

    const result = service.getItem<{ test: string }>('key');
    expect(localStorage.getItem).toHaveBeenCalledWith('key');
    expect(result).toEqual({ test: 'value' });
  });

  it('should remove data from localStorage', () => {
    service.removeItem('key');
    expect(localStorage.removeItem).toHaveBeenCalledWith('key');
  });

  it('should clear all data from localStorage', () => {
    service.clear();
    expect(localStorage.clear).toHaveBeenCalled();
  });
});
