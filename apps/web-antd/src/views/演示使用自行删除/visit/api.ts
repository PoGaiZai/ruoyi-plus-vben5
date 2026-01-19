import { alovaInstance } from '#/utils/http';

export interface Temp {
  name: string;
  value: number;
}

export function visitList() {
  return alovaInstance.get<Temp[]>('/monitor/logininfor/visitsMap');
}

export function deviceInfoList() {
  return alovaInstance.get<Temp[]>('/monitor/logininfor/deviceInfoList');
}

export function browserInfoList() {
  return alovaInstance.get<Temp[]>('/monitor/logininfor/browserInfoList');
}

export function ispInfoList() {
  return alovaInstance.get<Temp[]>('/monitor/logininfor/ispInfoList');
}

export interface LoginLineResp {
  date: string[];
  fail: number[];
  success: number[];
}

export function loginLine() {
  return alovaInstance.get<LoginLineResp>('/monitor/logininfor/loginLine');
}
