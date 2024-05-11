'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('dropdown')
      .service('myService')
      .getWelcomeMessage();
  },
});
