import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Test } from './components/test/test';
import { UserCard } from './components/user-card/user-card';

@Component({
  selector: 'app-root',
  imports: [Test, UserCard],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('interview');
}
