import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await User.createMany([{
      name:'Aneurisma',
      email:'aaaa@gmail.com',
      password: 'secret',
    },
  { 
      name:'Roberto carlos',
      email:'robcarl@gmail.com',
      password: 'secret',
    },
  ])
  }
}