import { config, fields, collection } from '@keystatic/core';

export default config({
  // Local files while running `astro dev`; Keystatic Cloud on the deployed site.
  storage: import.meta.env.DEV ? { kind: 'local' } : { kind: 'cloud' },
  cloud: {
    // TODO: replace with the identifier from your Keystatic Cloud project's settings page.
    project: 'your-team/your-project',
  },
  ui: {
    brand: { name: 'Photo Gallery' },
  },
  collections: {
    galleries: collection({
      label: 'Galleries',
      slugField: 'title',
      path: 'src/content/galleries/*',
      format: { contentField: 'description' },
      entryLayout: 'content',
      columns: ['title', 'date'],
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        date: fields.date({
          label: 'Date',
          defaultValue: { kind: 'today' },
        }),
        cover: fields.image({
          label: 'Cover image',
          directory: 'src/assets/galleries',
          publicPath: '../../assets/galleries/',
          validation: { isRequired: true },
        }),
        coverAlt: fields.text({ label: 'Cover alt text' }),
        photos: fields.array(
          fields.object({
            image: fields.image({
              label: 'Photo',
              directory: 'src/assets/galleries',
              publicPath: '../../assets/galleries/',
              validation: { isRequired: true },
            }),
            alt: fields.text({ label: 'Alt text' }),
            caption: fields.text({ label: 'Caption', multiline: true }),
          }),
          {
            label: 'Photos',
            itemLabel: (props) =>
              props.fields.caption.value || props.fields.alt.value || 'Photo',
          }
        ),
        description: fields.markdoc({ label: 'Description' }),
      },
    }),
  },
});
