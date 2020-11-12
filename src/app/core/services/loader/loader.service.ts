import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loadCount = 0;
  constructor() {
    this.loadCount = 0;
  }

  public startLoader() {
    this.loadCount++;
  }

  public stopLoader() {
    if (this.loadCount) {
      this.loadCount--;
    }
  }

  public stopLoaderHard() {
    this.loadCount = 0;
  }

  public get loading(): boolean {
    return !!this.loadCount;
  }
}
