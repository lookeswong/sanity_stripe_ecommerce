import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

import product from './schemas/product'
import banner from './schemas/banner'

export default defineConfig({
  name: 'default',
  title: 'ecommerce',

  projectId: '44ihiupj',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes
  },
})
