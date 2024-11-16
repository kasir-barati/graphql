import { TodoRepository } from '../repositories/todo.repository';
import { CreateTodoArg } from '../types/resolvers.type';

export class TodoService {
  constructor(private readonly todoRepository: TodoRepository) {}

  async getTodo(id: string) {
    const todo = await this.todoRepository.read(id);

    return todo;
  }
  async createTodo(data: CreateTodoArg['input']) {
    const todo = await this.todoRepository.create(data);

    return todo;
  }
}
