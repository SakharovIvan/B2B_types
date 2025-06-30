import { Observable } from 'rxjs';
import { CliInfo, Roles } from '../common/client.types';
import { ASCInfo } from '../common/client.types';
export default interface ValidUser {
  id: string;
  email: string;
  user: string;
}

export interface GRPC_Client {
  FindOneByJWT(data: { accessToken: string }): Observable<ValidUser>;
  getCliInfoArray(data: CliInfo): Observable<string>;
  GetUserRole(data: { accessToken: string }): Observable<Roles>;
  UpdateUserRole(data: Roles): Observable<Roles>;
  GetClientInfoByJWT(data: { accessToken: string }): Observable<CliInfo>;
  GetClientInfo(data: CliInfo): Observable<CliInfo>;
  getASCInfo(data: CliInfo): Observable<ASCInfo>;
  UpsertASCInfo(data: ASCInfo): Observable<ASCInfo>;
  CheckClientASCInfo(data: Partial<CliInfo>): Observable<ASCInfo>;
  CommitClientASCInfo(data: Partial<CliInfo>): Observable<ASCInfo>;
}
