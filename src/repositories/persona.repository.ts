import {DefaultCrudRepository} from '@loopback/repository';
import {Persona, PersonaRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PersonaRepository extends DefaultCrudRepository<
  Persona,
  typeof Persona.prototype.Name,
  PersonaRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Persona, dataSource);
  }
}
