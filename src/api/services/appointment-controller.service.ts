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

import { Appointment } from '../models/appointment';
import { AppointmentCreateModel } from '../models/appointment-create-model';
import { AppointmentUpdateModel } from '../models/appointment-update-model';

@Injectable({
  providedIn: 'root',
})
export class AppointmentControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation findById1
   */
  static readonly FindById1Path = '/appointment/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById1()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById1$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Appointment>> {

    const rb = new RequestBuilder(this.rootUrl, AppointmentControllerService.FindById1Path, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Appointment>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById1(params: {
    id: number;
  },
  context?: HttpContext

): Observable<Appointment> {

    return this.findById1$Response(params,context).pipe(
      map((r: StrictHttpResponse<Appointment>) => r.body as Appointment)
    );
  }

  /**
   * Path part for operation update1
   */
  static readonly Update1Path = '/appointment/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `update1()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update1$Response(params: {
    id: number;
    body: AppointmentUpdateModel
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Appointment>> {

    const rb = new RequestBuilder(this.rootUrl, AppointmentControllerService.Update1Path, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Appointment>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `update1$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  update1(params: {
    id: number;
    body: AppointmentUpdateModel
  },
  context?: HttpContext

): Observable<Appointment> {

    return this.update1$Response(params,context).pipe(
      map((r: StrictHttpResponse<Appointment>) => r.body as Appointment)
    );
  }

  /**
   * Path part for operation delete1
   */
  static readonly Delete1Path = '/appointment/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete1()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete1$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AppointmentControllerService.Delete1Path, 'delete');
    if (params) {
      rb.path('id', params.id, {});
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
   * To access the full response (for headers, for example), `delete1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete1(params: {
    id: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.delete1$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation cancelAppointment
   */
  static readonly CancelAppointmentPath = '/appointment/appointment/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cancelAppointment()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  cancelAppointment$Response(params: {
    id: number;
    body: AppointmentUpdateModel
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AppointmentControllerService.CancelAppointmentPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
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
   * To access the full response (for headers, for example), `cancelAppointment$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  cancelAppointment(params: {
    id: number;
    body: AppointmentUpdateModel
  },
  context?: HttpContext

): Observable<void> {

    return this.cancelAppointment$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation create2
   */
  static readonly Create2Path = '/appointment';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `create2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create2$Response(params: {
    body: AppointmentCreateModel
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Appointment>> {

    const rb = new RequestBuilder(this.rootUrl, AppointmentControllerService.Create2Path, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Appointment>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `create2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create2(params: {
    body: AppointmentCreateModel
  },
  context?: HttpContext

): Observable<Appointment> {

    return this.create2$Response(params,context).pipe(
      map((r: StrictHttpResponse<Appointment>) => r.body as Appointment)
    );
  }

  /**
   * Path part for operation findAll1
   */
  static readonly FindAll1Path = '/appointment/findAll';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll1()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll1$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Appointment>>> {

    const rb = new RequestBuilder(this.rootUrl, AppointmentControllerService.FindAll1Path, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Appointment>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll1(params?: {
  },
  context?: HttpContext

): Observable<Array<Appointment>> {

    return this.findAll1$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Appointment>>) => r.body as Array<Appointment>)
    );
  }

}
