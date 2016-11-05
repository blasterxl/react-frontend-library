const data = [
  {
    name: 'Angular',
    description: 'Angular Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio a, totam voluptates inventore laudantium suscipit sed id voluptas, quod hic.',
    items: [
      {
        name: 'Switching to Angular 2',
        posterUrl: 'http://lorempixel.com/300/300/cats/'
      },
      {
        name: 'ng-book 2',
        posterUrl: 'http://lorempixel.com/300/300/cats/'
      },
      {
        name: 'ng-book 2',
        posterUrl: 'http://lorempixel.com/300/300/cats/'
      }
    ]
  },
  {
    name: 'CSS',
    description: 'CSS Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur minus, veritatis voluptatum cupiditate dolore fugit, neque ad? Modi, perferendis, voluptatem!',
    items: [
      {
        name: 'Switching to Angular 2',
        posterUrl: 'http://lorempixel.com/300/300/cats/'
      },
      {
        name: 'ng-book 2',
        posterUrl: 'http://lorempixel.com/300/300/cats/'
      },
      {
        name: 'ng-book 2',
        posterUrl: 'http://lorempixel.com/300/300/cats/'
      }
    ]
  },
  {
    name: 'HTML',
    description: 'HTML Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quae, fuga dicta tenetur, perspiciatis atque reiciendis ad ducimus. Soluta, odit.',
    items: [
      {
        name: 'Switching to Angular 2',
        posterUrl: 'http://lorempixel.com/300/300/cats/'
      },
      {
        name: 'ng-book 2',
        posterUrl: 'http://lorempixel.com/300/300/cats/'
      },
      {
        name: 'ng-book 2',
        posterUrl: 'http://lorempixel.com/300/300/cats/'
      }
    ]
  },
  {
    name: 'JavaScript',
    description: 'JavaScript Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi delectus doloremque mollitia nulla voluptatum minima excepturi a, facilis adipisci quisquam!',
    items: [
      {
        name: 'Switching to Angular 2',
        posterUrl: 'http://lorempixel.com/300/300/cats/'
      },
      {
        name: 'ng-book 2',
        posterUrl: 'http://lorempixel.com/300/300/cats/'
      },
      {
        name: 'ng-book 2',
        posterUrl: 'http://lorempixel.com/300/300/cats/'
      }
    ]
  },
  {
    name: 'React',
    description: 'React Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates molestiae quisquam rem aliquam qui. Maiores fugiat deleniti accusamus assumenda totam.',
    items: [
      {
        name: 'Switching to Angular 2',
        posterUrl: 'http://lorempixel.com/300/300/cats/'
      },
      {
        name: 'ng-book 2',
        posterUrl: 'http://lorempixel.com/300/300/cats/'
      },
      {
        name: 'ng-book 2',
        posterUrl: 'http://lorempixel.com/300/300/cats/'
      }
    ]
  },
  {
    name: 'NodeJS',
    description: 'Node.js Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia recusandae fugiat repudiandae reiciendis eius consequatur iste dolorum natus, odit aliquam.',
    items: [
      {
        name: 'Switching to Angular 2',
        posterUrl: 'http://lorempixel.com/300/300/cats/'
      },
      {
        name: 'ng-book 2',
        posterUrl: 'http://lorempixel.com/300/300/cats/'
      },
      {
        name: 'ng-book 2',
        posterUrl: 'http://lorempixel.com/300/300/cats/'
      }
    ]
  }
]

const dataMap = data.reduce(function (map, category) {
  category.itemsMap = category.items.reduce(function (itemsMap, item) {
    itemsMap[item.name] = item
    return itemsMap
  }, {})
  map[category.name] = category
  return map
}, {})

exports.getAll = function () {
  return data
}

exports.lookupCategory = function (name) {
  return dataMap[name]
}

exports.lookupItem = function (category, item) {
  return dataMap[category].itemsMap[item]
}
