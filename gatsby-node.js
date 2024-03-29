const path = require('path');

// Setup Import Alias
exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const output = getConfig().output || {};

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        utils: path.resolve(__dirname, 'src/utils'),
        hooks: path.resolve(__dirname, 'src/hooks'),
        images: path.resolve(__dirname, 'src/images'),
        posts: path.resolve(__dirname, 'posts'),
        lib: path.resolve(__dirname, 'src/lib'),
        context: path.resolve(__dirname, 'src/context'),
      },
    },
  });
};

const { createFilePath } = require(`gatsby-source-filesystem`);
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
