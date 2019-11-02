const Promise = require('bluebird');
const axios = require('axios');
const crypto = require('crypto');

exports.sourceNodes = ({ actions }, { appId, collections, perPage = 10 }) => {
  const { createNode } = actions;
  return Promise.all(
    collections.map(collection => {
      return axios
        .get(`https://api.unsplash.com/collections/${collection}/photos`, {
          params: {
            client_id: appId,
            per_page: perPage
          }
        })
        .then(res => {
          res.data.map(photo => {
            const digest = crypto
              .createHash('md5')
              .update(JSON.stringify(photo))
              .digest('hex');

            const node = Object.assign(photo, {
              parent: '__SOURCE__',
              children: [],
              internal: {
                type: 'UnsplashPhoto',
                contentDigest: digest,
                mediaType: 'application/json'
              }
            });

            createNode(node);
            return true;
          });
        });
    })
  ).catch(error => {
    console.error(error);
  });
};
