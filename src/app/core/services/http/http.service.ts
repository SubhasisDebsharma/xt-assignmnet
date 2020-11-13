import { Injectable } from '@angular/core';
import {
  HttpHeaders,
  HttpParams,
  HttpClient,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, finalize } from 'rxjs/operators';
import { LoaderService } from './../loader/loader.service';
import { IApiEndpointModel } from '../../models/api-endpoint.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(
    private http: HttpClient,
    private loaderService: LoaderService
  ) {}

  constructUrl(apiData: IApiEndpointModel): string {
    if (apiData && apiData.url) {
      return apiData.url;
    }
    const apiEndPoint = apiData.api;
    const host = apiData.version || environment.apiHost;
    const version = apiData.version || environment.apiversion;
    const newHost = host;
    const newUrl = (newHost + '/' + apiEndPoint).replace(
      '{version}',
      version.toString()
    );
    return newUrl;
  }

  public get<T>(
    url: string,
    options?: {
      body?: any;
      headers?:
        | HttpHeaders
        | {
            [header: string]: string | string[];
          };
      params?:
        | HttpParams
        | {
            [param: string]: string | string[];
          };
      observe?: any;
      reportProgress?: boolean;
      responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
      withCredentials?: boolean;
    },
    customOptions?: CustomHttpServiceOption
  ): Observable<T> {
    return this.request<T>('GET', url, options, customOptions);
  }

  public request<T>(
    method: string,
    url: string,
    options?: {
      body?: any;
      headers?:
        | HttpHeaders
        | {
            [header: string]: string | string[];
          };
      params?:
        | HttpParams
        | {
            [param: string]: string | string[];
          };
      observe?: any;
      reportProgress?: boolean;
      responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
      withCredentials?: boolean;
    },
    customOptions?: CustomHttpServiceOption
  ): Observable<T> {
    return this.sendRequest<T>(
      () => this.http.request(method, url, options),
      customOptions
    );
  }

  private sendRequest<T>(
    callback: () => Observable<T>,
    customOptions: CustomHttpServiceOption = {}
  ): Observable<T> {
    if (customOptions.loader) {
      this.loaderService.startLoader();
    }
    return callback().pipe(
      finalize(() => {
        if (customOptions.loader) {
          this.loaderService.stopLoader();
        }
      }),
      catchError((err: HttpErrorResponse) => {
        throw err;
      })
    );
  }
}

export interface CustomHttpServiceOption {
  loader?: boolean;
}
