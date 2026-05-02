import { Component, inject, signal } from '@angular/core';
import { RegisterService } from '../../../../../api/auth/register';

@Component({
  selector: 'app-email-step',
  imports: [],
  templateUrl: './email-step.html'
})
export class EmailStep {
  private registerService = inject(RegisterService);

  email = signal<string>('');

  onSubmit() {
    if (!this.email()) return;

    this.registerService.sendVerification(this.email())
  }
}
