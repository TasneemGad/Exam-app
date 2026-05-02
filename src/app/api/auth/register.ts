import { HttpClient } from "@angular/common/http";
import { ApiService } from "../../core/service/api-service";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class RegisterService extends ApiService<Register> {
  protected endpoint: string = "auth/send-email-verification";
  constructor(http: HttpClient) {
    super(http);
  }

  sendVerification(email: string): void {
    this.http.post(`${this.baseUrl}/${this.endpoint}`, { email })
  }
}
