import { Injectable } from '@angular/core';
import { Diploma } from './model/diploma';
import { ApiService } from '../../core/service/api-service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DiplomaService extends ApiService<Diploma> {
  protected override endpoint: string = 'diplomas';
    constructor(http: HttpClient) {
    super(http);
  }

}
