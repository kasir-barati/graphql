import axios from 'axios';
import { CreateUserBuilderResponse } from '../types/user.type';

export class UserBuilder {
  private username: string;

  constructor() {
    this.username = 'some_random_' + Math.random();
  }

  async build() {
    const query = /* GraphQL */ `
      mutation CreateUser($input: UserInput!) {
        createUser(input: $input) {
          id
        }
      }
    `;
    const {
      data: {
        data: {
          createUser: { id },
        },
      },
    } = await axios.post<CreateUserBuilderResponse>('/graphql', {
      query,
      variables: { input: { username: this.username } },
    });

    return id;
  }
}
