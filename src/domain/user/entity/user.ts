import { UserRole } from "../enum/user-role";

export type UserProps = {
  id: number;
  name: string;
  email: string;
  passwordHash: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
};

export class User {
  private constructor(private props: UserProps) {}

  public static create(
    name: string,
    email: string,
    passwordHash: string,
    role: UserRole,
    createdAt: Date,
    updatedAt: Date
  ) {
    return new User({
      id: 0,
      name,
      email,
      passwordHash,
      role,
      createdAt,
      updatedAt,
    });
  }

  public static with(props: UserProps) {
    return new User(props);
  }

  public get id() {
    return this.props.id;
  }

  public get name() {
    return this.props.name;
  }

  public get email() {
    return this.props.email;
  }

  public get passwordHash() {
    return this.props.passwordHash;
  }

  public get role() {
    return this.props.role;
  }

  public get createdAt() {
    return this.props.createdAt;
  }

  public get updatedAt() {
    return this.props.updatedAt;
  }
}
