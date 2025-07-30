import UsersController from '#controllers/users_controller'
import SessionController from '#controllers/session_controller'
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
import TasksController from '#controllers/tasks_controller'

router.post('session', [SessionController, 'store'])


router.resource('user', UsersController).apiOnly()

router.group(() => {
  router.resource('tasks', TasksController)
    .apiOnly()
}).use(middleware.auth())