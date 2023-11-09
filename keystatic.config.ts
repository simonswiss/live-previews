import { config, collection, fields } from '@keystatic/core'

export default config({
  storage: {
    kind: 'github',
    repo: 'simonswiss/live-previews',
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'posts/*',
      previewUrl: `/preview/start?branch={branch}&to=/{slug}`,
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    }),
  },
})
