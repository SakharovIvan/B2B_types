import { Observable } from 'rxjs';
import { Roles } from '../common/client.types';
import { ASCInfo } from '../common/client.types';
export default interface ValidUser {
  id: string;
  email: string;
  user: string;
}

export interface GRPC_Client {
  FindOneByJWT(data: { accessToken: string }): Observable<ValidUser>;
  UserRole(data: { accessToken: string }): Observable<Roles>;
  CLientInfo(data: { accessToken: string }): Observable<ASCInfo>;
  UpdateUserRole(data: Roles): Observable<Roles>;
  UpsertClientInfo(data: ASCInfo): Observable<ASCInfo>;
}
