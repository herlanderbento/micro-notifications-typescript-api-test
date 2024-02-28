export interface AppErrorProps {
  name: string;
  message: string;
  statusCode: number;
}
export class AppError extends Error {
  public readonly name: string;
  public readonly message: string;
  public readonly statusCode: number;

  constructor(props: AppErrorProps) {
    super(props.message);

    this.name = props.name;
    this.message = props.message;
    this.statusCode = props.statusCode;
  }
}