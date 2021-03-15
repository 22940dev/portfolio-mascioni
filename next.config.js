const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
})

// Change some of our NextJS config if we're building on Netlify (production):
// We want to make sure we're using Cloudinary in production, but not necessary
// for local development
if (process.env.NETLIFY) {
    module.exports = withMDX({
        pageExtensions: ['js', 'jsx', 'mdx'],
        target: "serverless",
        images: {
            loader: 'cloudinary',
            path: 'https://res.cloudinary.com/daprhszgn/image/upload/'
        }
    });
} else {
    module.exports = withMDX({
        pageExtensions: ['js', 'jsx', 'mdx'],
        target: "serverless"
    });
}


