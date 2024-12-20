interface Response<T> {
  data: T;
}

export type GetTodoResponse = Response<{
  getTodo: {
    id: string;
    content: string;
  };
}>;
export type GetTodoFinderResponse = Response<{
  getTodo: {
    id: string;
  };
}>;
export type CreateTodoBuilderResponse = Response<{
  createTodo: { id: string };
}>;
export type CreateTodoResponse = Response<{
  createTodo: {
    CreatedBy: {
      createdAt: number;
      id: string;
      username: string;
    };
    content: string;
    id: string;
  };
}>;
export type CreateTodoAssignedToSomeoneResponse = Response<{
  createTodo: {
    CreatedBy: {
      createdAt: number;
      id: string;
      username: string;
    };
    AssignedTo: {
      updatedAt: number;
      id: string;
      username: string;
    };
    title: string;
    id: string;
  };
}>;
export type UpdateTodoResponse = Response<{
  updateTodo: {
    id: string;
    title: string;
  };
}>;
export type UpdateTodoAndAssignedToResponse = Response<{
  updateTodo: {
    id: string;
    content: string;
    AssignedTo: {
      id: string;
    };
  };
}>;
export type DeleteTodoResponse = Response<{ deleteTodo: null }>;
