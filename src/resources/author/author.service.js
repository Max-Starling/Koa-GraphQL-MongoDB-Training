const createService = require('../../helpers/createService');

const service = createService('author');

// service.createPost = async (document) => {
//   const post = await service.create(document);
//   return post;
// };

module.exports = service;
