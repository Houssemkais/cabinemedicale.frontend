/* tslint:disable */
/* eslint-disable */
export interface AppointmentUpdateModel {
  available?: boolean;
  date: string;
  reason: string;
  status: 'EN_COURS' | 'ANNULE';
}
