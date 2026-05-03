import { type SchemaTypeDefinition } from 'sanity'
import { updateSchema } from './update'
import { exhibitorSchema } from './exhibitor'


export const schema: { types: SchemaTypeDefinition[] } = {
    types: [updateSchema, exhibitorSchema],
}