import { Entity } from '~/_shared/domain/entities/entity';
import { NotFoundError } from '~/_shared/domain/_errors';
import { IRepository } from '~/_shared/domain/repository/repository-interface';
import { EntityID } from '~/_shared/domain/value-object/entity-id.vo';

export abstract class InMemoryRepository<E extends Entity>
  implements IRepository<E>
{
  items: E[] = [];

  async insert(entity: E): Promise<void> {
    this.items.push(entity);
  }

  async bulkInsert(entities: E[]): Promise<void> {
    this.items.push(...entities);
  }

  async findById(id: string): Promise<E | null> {
    const item = this.items.find((item) => item.id.equals(new EntityID(id)));
    return typeof item === 'undefined' ? null : item;
  }

  async findAll(): Promise<E[]> {
    return this.items;
  }

  async update(entity: E): Promise<void> {
    const indexFound = this.items.findIndex((item) =>
      item.id.equals(entity.id)
    );

    if (indexFound === -1) {
      throw new NotFoundError(entity.id.toValue(), this.getEntity());
    }

    this.items[indexFound] = entity;
  }

  async delete(id: string): Promise<void> {
    const indexFound = this.items.findIndex((item) =>
      item.id.equals(new EntityID(id))
    );

    if (indexFound === -1) {
      throw new NotFoundError(id, this.getEntity());
    }

    this.items.splice(indexFound, 1);
  }

  abstract getEntity(): new (...args: any[]) => E;
}
