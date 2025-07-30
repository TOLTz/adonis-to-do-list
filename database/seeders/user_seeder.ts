import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await User.createMany([{
      name:'Meg',
      email:'megagata@gmail.com',
      password: 'secret',
    },
  { 
      name:'Lubby',
      email:'lubbyogato@gmail.com',
      password: 'secret',
    },
  ])
  }
}