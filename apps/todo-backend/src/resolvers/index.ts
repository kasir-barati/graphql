import {
  createTodo,
  deleteTodo,
  getTodo,
  updateTodo,
} from './todo.resolver';
import { createUser } from './user.resolver';

export const rootResolvers = {
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
  createUser,
};
