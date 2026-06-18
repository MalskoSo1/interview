import { Component } from '@angular/core';

interface Champion {
  name: string;
  difficulty: string;
  isEnchanter: boolean;
}

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.html',
  styleUrl: './user-card.scss',
})
export class UserCard {
  name: string = 'Liza';
  favouriteGame: string = 'league of legends';
  amountOfCats: string = 'two cats';
  loveToAngular: boolean = true;

  // favouriteChampions: string[] = ['Nami', 'Janna', 'Yuumi'];
  favouriteChampions: Champion[] = [
    {
      name: 'Nami',
      difficulty: 'Hard',
      isEnchanter: true,
    },
    {
      name: 'Janna',
      difficulty: 'Hard',
      isEnchanter: true,
    },
    {
      name: 'Leona',
      difficulty: 'Medium',
      isEnchanter: false,
    },
    {
      name: 'Yuumi',
      difficulty: 'Medium',
      isEnchanter: true,
    },
  ];
}
