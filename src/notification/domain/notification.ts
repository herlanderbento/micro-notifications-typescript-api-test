import { AggregateRoot, EntityID, Optional } from '~/_shared/domain';

export interface NotificationProps {
  recipientId: EntityID;
  title: string;
  content: string;
  isRead?: Boolean | null;
  createdAt: Date;
  updatedAt: Date
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

  get isRead() {
    return this.props.isRead;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  read() {
    this.props.isRead = true;
    this.touch()
  }

  touch(){
    this.props.updatedAt = new Date()
  }

  static create(
    props: Optional<NotificationProps, 'createdAt' | 'updatedAt'>,
    id?: EntityID
  ): Notification {
    const notification = new Notification(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
        updatedAt: props.updatedAt ?? new Date(),
        isRead: props.isRead ?? false,
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
      isRead: this.props.isRead,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
