import { Component, inject } from '@angular/core';
import { DiplomaService } from '../../api/diploma/diploma-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { CardModule } from 'primeng/card';
import { SkeletonModule } from 'primeng/skeleton';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diploma',
  imports: [CardModule, SkeletonModule],
  templateUrl: './diploma.html'
})
export class Diploma {
  private diplomaService = inject(DiplomaService);
  private router = inject(Router);

  diplomas = toSignal(this.diplomaService.getList());

  diplomasDetail(id: string): void {
    this.router.navigate(['/exams', id]);
  }
}
