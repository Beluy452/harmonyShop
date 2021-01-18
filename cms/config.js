export default {
  cms_manual_init: true,
  backend: {
    name: 'github',
    repo: 'Beluy452/harmonyShop',
  },
  media_folder: 'public/static',
  public_folder: 'static',
  collections: [
    {
      name: 'posts',
      label: 'Posts',
      folder: 'content/posts',
      media_folder: 'static/images',
      create: true,
      slug: 'index',
      path: '{{title}}/{{title}}',
      editor: {
        preview: true
      },
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string',
        },
        {
          label: 'Publish Date',
          name: 'date',
          widget: 'date',
          format: "MM/DD/YYYY"
        },
        {
          label: 'Body',
          name: 'body',
          widget: 'markdown',
        },
      ],
    },
    {
      name: 'Nut pastes',
      label: 'Nut pastes',
      folder: 'content/nutPastes',
      media_folder: 'static/images',
      create: true,
      slug: 'index',
      path: '{{title}}/{{title}}',
      editor: {
        preview: true
      },
      fields: [
        {
          label: 'Title',
          name: 'title',
          widget: 'string',
        },
        {
          label: 'Image',
          name: 'img',
          widget: 'image',
        },
        {
          label: 'Description',
          name: 'description',
          widget: 'text',
        },
        {
          label: 'Category',
          name: 'category',
          widget: 'select',
          options: ["солодкі", "солені", "змішані"]
        },
        {
          label: 'Volume',
          name: 'volume',
          widget: 'string',
        },
        {
          label: 'Price',
          name: 'price',
          widget: 'number',
        }
      ],
    },
  ],
};