/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { PasswordForgotDto } from '../models/password-forgot-dto';

@Injectable({
  providedIn: 'root',
})
export class PasswordForgotControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation processForgotPasswordForm
   */
  static readonly ProcessForgotPasswordFormPath = '/forgot-password';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `processForgotPasswordForm()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  processForgotPasswordForm$Response(params?: {
    body?: PasswordForgotDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PasswordForgotControllerService.ProcessForgotPasswordFormPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `processForgotPasswordForm$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  processForgotPasswordForm(params?: {
    body?: PasswordForgotDto
  },
  context?: HttpContext

): Observable<void> {

    return this.processForgotPasswordForm$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}