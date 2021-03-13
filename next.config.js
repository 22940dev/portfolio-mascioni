const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
})
module.exports = withMDX({
    pageExtensions: ['js', 'jsx', 'mdx'],
    target: "serverless",
    // images: {
    //     loader: 'cloudinary',
    //     path: 'https://res.cloudinary.com/daprhszgn/image/upload/'
    // }
})