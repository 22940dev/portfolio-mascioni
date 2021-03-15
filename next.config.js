const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
})

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


