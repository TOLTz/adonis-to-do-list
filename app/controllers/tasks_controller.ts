import Task from '#models/task'
import { createTaskValidator, updateTaskValidator } from '#validators/task'
import type { HttpContext } from '@adonisjs/core/http'

export default class TasksController {
  async index({ auth }: HttpContext) {
    const user = auth.user!
    await user.load('tasks')
    return user.tasks
  }
  async store({ request, response, auth }: HttpContext) {
    try {
      const { title, description } = await request.validateUsing(createTaskValidator)
      const user = auth.user!
      await user.related('tasks').create({ title, description })
      return user
    } catch (error) {
      return response.status(400).json({ error: 'Error' })
    }
  }

  async show({ params, response, auth }: HttpContext) {
    try {
      const task = await Task.query()
        .where('id', params.id)
        .andWhere('user_id', auth.user!.id)
        .first()
      if (!task) {
        return response.status(404).json({ error: 'task not found' })
      }
      return task
    } catch (error) {
      return response.status(400).json({ error: 'task not found' })
    }
  }
  async update({ request, params, response, auth }: HttpContext) {
    try {
      const task = await Task.query()
        .where('id', params.id)
        .andWhere('user_id', auth.user!.id)
        .first()
      if (!task) {
        return response.status(404).json({ error: 'task not found' })
      }
      const { title, description, done } = await request.validateUsing(updateTaskValidator)
      task.merge({ title, description, done })
      await task.save()
      return task
    } catch (error) {
      return response.status(400).json({ error: 'task not found' })
    }
  }
  async destroy({ params, response, auth }: HttpContext) {
    try {
      const task = await Task.query()
        .where('id', params.id)
        .andWhere('user_id', auth.user!.id)
        .first()
      if (!task) {
        return response.status(404).json({ error: 'task not found' })
      }
      await task.delete()
      return { message: 'task deleted successfully' }
    } catch (error) {
      return response.status(400).json({ error: 'task not found' })
    }
  }
}
