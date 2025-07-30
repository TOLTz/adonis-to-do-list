import Task from '#models/task'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Task.createMany([
      {
        title:'dormir a tarde toda',
        description: 'dormir de lado não de barriga pra cima',
        userId: 2,
      },

      {
        title:'miar pedindo comida',
        description:'Pra qualquer um que não pedi hoje',
        userId: 2,

      },
      {
        title:'bater no lubby',
        description:'Sem qualquer motivo aparente',
        userId:1
      },

      {
        title:'dormir em lugar que não pode',
        description: 'Dormir na caixa de lã',
        userId: 5, 
      }
    ])
  }
}