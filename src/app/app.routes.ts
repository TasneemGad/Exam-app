import { Routes } from '@angular/router';
import { LoginComponent } from './component/auth/login/login';
import { EmailStep } from './component/auth/register/steps/email-step/email-step';
import { Diploma } from './component/diploma/diploma';
import { ExamDetail } from './component/exam/exam';

export const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },
   {
    path: 'register',
    component: EmailStep
  },
     {
    path: 'diploma',
    component: Diploma
  },
  { path: 'exams/:id', component: ExamDetail },
  {
    path: '**',
    redirectTo: 'login'
  }
];
