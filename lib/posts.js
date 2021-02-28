function importAll(r) {
    return r.keys().map((fileName) => ({
      link: fileName.substr(1).replace(/\.mdx$/, ""),
      module: r(fileName)
    }));
}
  
const posts = importAll(
    require.context("../pages/posts/", true, /\.mdx$/)
);

/**
 * Returns a list of objects representing all posts, sorted
 * by date (descending)
 */
export function getAllPosts() {
    return posts.map(post => {
        return {
            link: post.link,
            slug: post.link.replace('/', ''),
            ...post.module.meta
        }
    })
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
};