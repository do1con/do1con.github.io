/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import CommonLayout from 'components/Layouts/CommonLayout';

export const wrapRootElement = ({ element }) => (
  <CommonLayout>{element}</CommonLayout>
);
