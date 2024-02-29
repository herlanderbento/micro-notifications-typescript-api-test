import { AggregateRoot, EntityID, Optional } from '~/_shared/domain';

export interface NotificationProps {
  recipientId: EntityID;
  title: string;
  content: string;
  readAt?: Date | null;
  createdAt: Date;
}

export class Notification extends AggregateRoot<NotificationProps> {
  constructor(props: NotificationProps, id?: EntityID) {
    super(props, id);
  }

  get recipientId() {
    return this.props.recipientId;
  }

  get title() {
    return this.props.title;
  }

  get content() {
    return this.props.content;
  }

  get readAt() {
    return this.props.readAt;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  read() {
    this.props.readAt = new Date();
  }

  static create(
    props: Optional<NotificationProps, 'createdAt'>,
    id?: EntityID
  ): Notification {
    const notification = new Notification(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
        readAt: props.readAt ?? null,
      },
      id
    );

    return notification;
  }

  toJSON() {
    return {
      id: this.id.toString(),
      recipientId: this.props.recipientId.toString(),
      title: this.props.title,
      content: this.props.content,
      readAt: this.props.readAt,
      createdAt: this.createdAt,
    };
  }
}
