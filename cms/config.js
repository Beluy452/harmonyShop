export default {
  cms_manual_init: true,
  backend: {
    name: 'github', //#git-gateway #test-repo #github,
    repo: 'Beluy452/harmonyShop',
  },
  media_folder: 'public/img',
  public_folder: 'img',
  collections: [
    {
      name: 'posts',
      label: 'Posts',
      folder: 'content/posts',
      create: true,
      slug: 'index',
      path: '{{title}}/index',
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
          widget: 'datetime',
        },
        {
          label: 'Body',
          name: 'body',
          widget: 'markdown',
        },
        {
          label: 'Cats',
          name: 'cats',
          widget: 'list',
          fields: [
            {
              label: 'Name',
              name: 'name',
              widget: 'string',
            },
            {
              label: 'Description',
              name: 'description',
              widget: 'text',
            },
          ]
        }
      ],
    },
  ],
};