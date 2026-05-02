import { Component, inject } from '@angular/core';
import { ExamsService } from '../../api/exams/exams-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Exams } from '../../api/exams/model/exams';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-exam',
  imports: [SkeletonModule],
  templateUrl: './exam.html'
})
export class ExamDetail {
  private examsService = inject(ExamsService);
  private route = inject(ActivatedRoute);


  exams = toSignal(
    this.route.paramMap.pipe(
      switchMap(params =>   this.examsService.getList({ diplomaId: params.get('id')! }))
    )
  );
}
