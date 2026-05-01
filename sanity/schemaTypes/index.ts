import { type SchemaTypeDefinition } from 'sanity'
import { speaker } from './speaker'
import { exhibitor } from './exhibitor'
import { session } from './session'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [speaker, exhibitor, session],
}