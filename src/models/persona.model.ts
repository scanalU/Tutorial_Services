import {Entity, model, property} from '@loopback/repository';

@model()
export class Persona extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
    generated: false,
  })
  Name: string;

  @property({
    type: 'string',
    required: true,
  })
  pass: string;

  @property({
    type: 'string',
    required: true,
  })
  role: string;


  constructor(data?: Partial<Persona>) {
    super(data);
  }
}

export interface PersonaRelations {
  // describe navigational properties here
}

export type PersonaWithRelations = Persona & PersonaRelations;
