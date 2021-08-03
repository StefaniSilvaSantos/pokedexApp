import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 // Criamos um array de pokemons
 // [] => representa um array (Lista)
 // {} => representa um objeto (Item)
  listaPokemon = [
  {
    numero: '001',
    nome: 'Bulbasaur',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    tipos: [
      'Grass', 'Poison'
    ]
  },
  {
    numero: '002',
    nome: 'Ivysaur',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png',
    tipos: [
      'Grass', 'Posion'
    ]
  },
  {
    numero: '003',
    nome: 'IVenusaur',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png',
    tipos: [
      'Grass', 'Posion'
    ]
  },
  {
    numero: '004',
    nome: 'Charmander',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
    tipos: [
      'Fire'
    ]
  },
  {
    numero: '005',
    nome: 'Charmeleon',
    foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png',
    tipos: [
      'Fire'
    ]
  },
  ];

  constructor() {}

}
