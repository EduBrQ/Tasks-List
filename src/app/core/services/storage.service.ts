import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  // Save data to localStorage
  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // Retrieve data from localStorage
  getItem<T>(key: string): T | null {
    const data = localStorage.getItem(key);
    return data ? (JSON.parse(data) as T) : null;
  }

  // Remove data from localStorage
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  // Clear all data from localStorage
  clear(): void {
    localStorage.clear();
  }
}