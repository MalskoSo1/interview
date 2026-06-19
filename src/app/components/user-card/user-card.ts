import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Champion {
  name: string;
  difficulty: string;
  isEnchanter: boolean;
}

@Component({
  selector: 'app-user-card',
  imports: [FormsModule],
  templateUrl: './user-card.html',
  styleUrl: './user-card.scss',
})
export class UserCard {
  name: string = 'Liza';
  favouriteGame: string = 'league of legends';
  amountOfCats: string = 'two cats';
  loveToAngular: boolean = true;
  championForAdd: string = '';

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

  addChampion() {
    if (this.championForAdd === '') {
      alert('Name can not be empty!');
      return;
    }
    if (this.favouriteChampions.some((champion) => champion.name === this.championForAdd)) {
      alert('A champion with that name already exists in the list.');
      return;
    }

    this.favouriteChampions.push({
      name: this.championForAdd,
      difficulty: 'Medium',
      isEnchanter: true,
    });
    this.championForAdd = '';
  }

  // removeLastChampion() {
  //   if (this.favouriteChampions.length !== 0) {
  //     this.favouriteChampions = this.favouriteChampions.slice(
  //       0,
  //       this.favouriteChampions.length - 1,
  //     );
  //   }
  // }

  removeLastChampion() {
    if (this.favouriteChampions.length !== 0) {
      this.favouriteChampions.splice(this.favouriteChampions.length - 1, 1);
    }
  }

  // removeLastChampion() {
  //   if (this.favouriteChampions.length !== 0) {
  //     this.favouriteChampions.pop();
  //   }
  // }
}
