const list = new Map([
  [
    'skin',
    [
      {
        id: 'skin-001',
        title: 'Skin Color',
        values: [
          {
            id: 'skin.001.001',
            thumbnail:
              'https://htmlcolorcodes.com/assets/images/colors/light-blue-color-solid-background-1920x1080.png',
          },
          {
            id: 'skin.001.002',
            thumbnail: 'https://htmlcolorcodes.com/assets/images/colors/dark-red-color-solid-background-1920x1080.png',
          },
          {
            id: 'skin.001.003',
            thumbnail:
              'https://htmlcolorcodes.com/assets/images/colors/powder-blue-color-solid-background-1920x1080.png',
          },
          {
            id: 'skin.001.004',
            thumbnail: 'https://htmlcolorcodes.com/assets/images/colors/brass-color-solid-background-1920x1080.png',
          },
        ],
      },
    ],
  ],
  [
    'hair',
    [
      {
        id: 'hair-001',
        title: 'Hairstyles',
        values: [
          {
            id: 'hair.001.001',
            thumbnail: 'https://pbs.twimg.com/media/FD-Y3soVEAE9Sjj?format=jpg&name=900x900',
          },
          {
            id: 'hair.001.002',
            thumbnail: 'https://pbs.twimg.com/media/FD-Y3soVEAE9Sjj?format=jpg&name=900x900',
          },
        ],
      },
    ],
  ],
  [
    'upper',
    [
      {
        id: 'upper-001',
        title: 'Shirt',
        values: [
          {
            id: 'upper.001.001',
            thumbnail: 'https://pbs.twimg.com/media/FD-Y3soVEAE9Sjj?format=jpg&name=900x900',
          },
        ],
      },
      {
        id: 'upper-002',
        title: 'Jacket',
        values: [
          {
            id: 'upper.002.001',
            thumbnail: 'https://pbs.twimg.com/media/FD-Y3soVEAE9Sjj?format=jpg&name=900x900',
          },
        ],
      },
    ],
  ],
  [
    'lower',
    [
      {
        id: 'lower-001',
        title: 'Short',
        values: [
          {
            id: 'lower.001.001',
            thumbnail: 'https://pbs.twimg.com/media/FD-Y3soVEAE9Sjj?format=jpg&name=900x900',
          },
        ],
      },
      {
        id: 'lower-002',
        title: 'Jean',
        values: [
          {
            id: 'lower.002.001',
            thumbnail: 'https://pbs.twimg.com/media/FD-Y3soVEAE9Sjj?format=jpg&name=900x900',
          },
        ],
      },
    ],
  ],
  [
    'shoe',
    [
      {
        id: 'shoe-001',
        title: 'Sneaker',
        values: [
          {
            id: 'shoe.001.001',
            thumbnail: 'https://pbs.twimg.com/media/FD-Y3soVEAE9Sjj?format=jpg&name=900x900',
          },
        ],
      },
    ],
  ],
  [
    'accessory',
    [
      {
        id: 'accessory-001',
        title: 'Hat',
        values: [
          {
            id: 'accessory.001.001',
            thumbnail: 'https://pbs.twimg.com/media/FD-Y3soVEAE9Sjj?format=jpg&name=900x900',
          },
          {
            id: 'accessory.001.002',
            thumbnail: 'https://pbs.twimg.com/media/FD-Y3soVEAE9Sjj?format=jpg&name=900x900',
          },
        ],
      },
    ],
  ],
])

const dummyData = {
  skin: {
    subCategories: {
      'skin.001': {
        title: 'Skin',
        list: {
          'skin.001.001': {
            title: '',
            values: [
              {
                id: 'skin.001.001.001',
                thumbnail:
                  'https://htmlcolorcodes.com/assets/images/colors/light-blue-color-solid-background-1920x1080.png',
                material: {
                  color: '#0000ff',
                  shader: '',
                  texture: '',
                },
              },
              {
                id: 'skin.001.001.002',
                thumbnail:
                  'https://htmlcolorcodes.com/assets/images/colors/dark-red-color-solid-background-1920x1080.png',
                material: {
                  type: 'texture',
                  value: '{"color": "#ff00ff", "roughness": "0:, "metalness": "0"}',
                },
              },
              {
                id: 'skin.001.003',
                thumbnail:
                  'https://htmlcolorcodes.com/assets/images/colors/powder-blue-color-solid-background-1920x1080.png',
                material: {
                  type: 'texture',
                  value: '{"color": "#ff00ff", "roughness": "0:, "metalness": "0"}',
                },
              },
              {
                id: 'skin.001.004',
                thumbnail: 'https://htmlcolorcodes.com/assets/images/colors/brass-color-solid-background-1920x1080.png',
                material: {
                  type: 'texture',
                  value: '{"color": "#ff00ff", "roughness": "0:, "metalness": "0"}',
                },
              },
            ],
          },
        },
      },
    },
  },
  hair: {
    subCategories: {
      'hair.001': {
        title: 'Hair',
        list: {
          'hair.001.001': {
            title: '',
            values: [
              {
                id: 'hair.001.001.001',
                thumbnail: 'https://pbs.twimg.com/media/FD-Y3soVEAE9Sjj?format=jpg&name=900x900',
                material: {
                  type: 'texture',
                  value: '{"color": "#ff00ff", "roughness": "0:, "metalness": "0"}',
                },
              },
              {
                id: 'hair.001.001.002',
                thumbnail: 'https://pbs.twimg.com/media/FD-Y3soVEAE9Sjj?format=jpg&name=900x900',
                material: {
                  type: 'texture',
                  value: '{"color": "#ff00ff", "roughness": "0:, "metalness": "0"}',
                },
              },
            ],
          },
        },
      },
    },
  },
  upper: {
    subCategories: {
      'upper.001': {
        title: 'In',
        list: {
          'upper.001.001': {
            title: '',
            values: [
              {
                id: 'upper.001.001.001',
                thumbnail: 'https://pbs.twimg.com/media/FD-Y3soVEAE9Sjj?format=jpg&name=900x900',
                material: {
                  type: 'texture',
                  value: '{"color": "#ff00ff", "roughness": "0:, "metalness": "0"}',
                },
              },
            ],
          },
        },
      },
      'upper.002': {
        title: 'Out',
        list: {
          'upper.002.001': {
            title: 'Jacket',
            values: [
              {
                id: 'upper.002.001.001',
                thumbnail: 'https://pbs.twimg.com/media/FD-Y3soVEAE9Sjj?format=jpg&name=900x900',
                material: {
                  type: 'texture',
                  value: '{"color": "#ff00ff", "roughness": "0:, "metalness": "0"}',
                },
              },
            ],
          },
          'upper.002.002': {
            title: 'Bomber',
            values: [
              {
                id: 'upper.002.002.001',
                thumbnail: 'https://pbs.twimg.com/media/FD-Y3soVEAE9Sjj?format=jpg&name=900x900',
                material: {
                  type: 'texture',
                  value: '{"color": "#ff00ff", "roughness": "0:, "metalness": "0"}',
                },
              },
            ],
          },
        },
      },
    },
  },
  lower: {
    subCategories: {
      'lower.001': {
        title: 'Lower',
        list: {
          'lower.001.001': {
            title: 'Shorts',
            values: [
              {
                id: 'lower.001.001.001',
                thumbnail: 'https://pbs.twimg.com/media/FD-Y3soVEAE9Sjj?format=jpg&name=900x900',
                material: {
                  type: 'texture',
                  value: '{"color": "#ff00ff", "roughness": "0:, "metalness": "0"}',
                },
              },
            ],
          },
          'lower.001.002': {
            title: 'Jeans',
            values: [
              {
                id: 'lower.001.002.001',
                thumbnail: 'https://pbs.twimg.com/media/FD-Y3soVEAE9Sjj?format=jpg&name=900x900',
                material: {
                  type: 'texture',
                  value: '{"color": "#ff00ff", "roughness": "0:, "metalness": "0"}',
                },
              },
            ],
          },
        },
      },
    },
  },
  shoe: {
    subCategories: {
      'shoe.001': {
        title: 'Sneakers',
        list: {
          'shoe.001.001': {
            title: '',
            values: [
              {
                id: 'shoe.001.001.001',
                thumbnail: 'https://pbs.twimg.com/media/FD-Y3soVEAE9Sjj?format=jpg&name=900x900',
                material: {
                  type: 'texture',
                  value: '{"color": "#ff00ff", "roughness": "0:, "metalness": "0"}',
                },
              },
            ],
          },
        },
      },
    },
  },
  accessory: {
    subCategories: {
      'accessory.001': {
        title: 'Accessory',
        list: {
          'accessory.001.001': {
            title: 'Hat',
            values: [
              {
                id: 'accessory.001.001.001',
                thumbnail: 'https://pbs.twimg.com/media/FD-Y3soVEAE9Sjj?format=jpg&name=900x900',
                material: {
                  type: 'texture',
                  value: '{"color": "#ff00ff", "roughness": "0:, "metalness": "0"}',
                },
              },
              {
                id: 'accessory.001.001.002',
                thumbnail: 'https://pbs.twimg.com/media/FD-Y3soVEAE9Sjj?format=jpg&name=900x900',
                material: {
                  type: 'texture',
                  value: '{"color": "#ff00ff", "roughness": "0:, "metalness": "0"}',
                },
              },
            ],
          },
        },
      },
    },
  },
}

export { dummyData, list }
