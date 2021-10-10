import path from 'path';

export async function createPages({ actions, graphql }) {
  const { createPage } = actions;

  const { data, errors } = await graphql(`
    {
      allMarkDownRemark {
        edges {
          node {
            html
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  if (errors) {
    throw errors;
  }

  data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.title,
      context: {
        html: node.html,
        title: node.frontmatter.title,
      },
      component: path.resolve(__dirname, '../templates/PostTemplate.tsx'),
    });
  });
}
