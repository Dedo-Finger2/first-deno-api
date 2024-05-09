import { IUser } from "../model/user.ts";

let users: Array<IUser> = [
  {
    id: "1",
    name: "Nome 1",
    email: "Email 1",
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: "2",
    name: "Nome 2",
    email: "Email 2",
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: "3",
    name: "Nome 3",
    email: "Email 3",
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: "4",
    name: "Nome 4",
    email: "Email 4",
    created_at: new Date(),
    updated_at: new Date(),
  }
];

export const getUsers = ({ response }: { response: any }) => {
  response.body = users;
}

export const getUser = ({ params, response }: { params: { id: string }; response: any }) => {
  const user: IUser | undefined = users.find((user) => user.id === params.id);

  if (!user) {
    response.status = 400;
    response.body = { message: "User not found." }
    return;
  }

  response.body = user;
}

export const createUser = async ({ request, response }: { request: any, response: any }) => {
  const data = await request.body();
  const user: IUser = data.value;

  user.created_at = new Date();
  user.updated_at = new Date();

  users.push(user);

  response.status = 201;
  response.body = { message: "Created." };
}

export const updateUser = async ({ params, request, response }: { params: { id: string }; request: any, response: any }) => {
  let user: IUser | undefined = users.find((user) => user.id === params.id);

  if (!user) {
    response.status = 400;
    response.body = { message: "User not found." }
    return;
  }

  const data = await request.body();
  const updatedUser: { name?: string; email?: string } = data.values;

  user = { ...user, ...updatedUser, updated_at: new Date() };
  users = [...users.filter((user) => user.id !== params.id), user];

  response.status = 200;
  response.body = { message: "Updated." };
}

export const deleteUser = ({ params, response }: { params: { id: string }; response: any }) => {
  users = users.filter((user) => user.id !== params.id);

  response.status = 200;
  response.body = { message: "Deleted." };
}