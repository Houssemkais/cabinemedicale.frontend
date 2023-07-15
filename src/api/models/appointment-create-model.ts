/* tslint:disable */
/* eslint-disable */
export interface AppointmentCreateModel {
  available?: boolean;
  date: string;
  doctor_id: number;
  patient_id: number;
  reason: string;
  status: 'EN_COURS' | 'ANNULE';
}
