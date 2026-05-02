import { Injectable } from '@angular/core';
import { Exams } from './model/exams';
import { ApiService } from '../../core/service/api-service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ExamsService extends ApiService<Exams> {
  protected override endpoint: string = 'exams';
    constructor(http: HttpClient) {
    super(http);
  }

}
