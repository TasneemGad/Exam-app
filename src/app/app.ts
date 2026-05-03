import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastMsg } from "./shared/forms/toast-msg/toast-msg";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToastMsg],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('exam-app');
}
