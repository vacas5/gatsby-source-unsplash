# gatsby-source-unsplash

Source plugin for pulling photo data by collection into Gatsby from the official [Unsplash API](https://unsplash.com/developers).

## Install

`npm install --save gatsby-source-unsplash`

## How to use

Before using the Unsplash API, you need to [register as a developer](https://unsplash.com/developers) and read the [API Guidelines](https://help.unsplash.com/api-guidelines/unsplash-api-guidelines).

**Note:** Every application must abide by the [API Guidelines](https://help.unsplash.com/api-guidelines/unsplash-api-guidelines). Specifically, remember to [hotlink images](https://help.unsplash.com/api-guidelines/more-on-each-guideline/guideline-hotlinking-images), [attribute photographers](https://help.unsplash.com/api-guidelines/more-on-each-guideline/guideline-attribution), and [trigger a download when appropriate](https://help.unsplash.com/api-guidelines/more-on-each-guideline/guideline-triggering-a-download).

```javascript
// In your gatsby-config.js
// appId refers to the access token provided by Unsplash
// Collections must be public to return photos
plugins: [
  {
    resolve: `gatsby-source-unsplash`,
    options: {
      appId: `12345678`,
      collections: [`098765`],
      // optional: will only get page 1, so increase this count to include > 10 photos
      perPage: `100`,
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
