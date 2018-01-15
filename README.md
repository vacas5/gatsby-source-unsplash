# gatsby-source-unsplash

Source plugin for pulling photo data by collection into Gatsby from the official [Unsplash API](https://unsplash.com/developers).

## Install

`npm install --save gatsby-source-unsplash`

## How to use

```javascript
// In your gatsby-config.js
// Application id provided by Unsplash
// Collections must be public to return photos
plugins: [
  {
    resolve: `gatsby-source-unsplash`,
    options: {
      appId: `12345678`,
      collections: [
        `098765`
      ]
    },
  },
];
```

## How to query

Get all photo urls in reverse chronological order with the photographer's name:

```graphql
query PhotosQuery {
    allUnsplashPhoto(sort: { fields: [created_at], order: DESC }) {
      edges {
        node {
          id
          user {
            id
            name
          }
          urls {
            full
            regular
            small
          }
          description
          created_at
        }
      }
    }
}
```

Get a specific photo's urls by id with links to photographer's Unsplash profile:

```graphql
query PhotoQuery {
    unsplashPhoto(id: { eq: "GnY_mW1Q6Xc" }) {
        id
        description
        urls {
            full
            regular
            small
        }
        user {
            name
            links {
                html
            }
        }
    }
}
```
