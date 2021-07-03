// Change some of our NextJS config if we're building on Netlify (production):
// We want to make sure we're using Cloudinary in production, but not necessary
// for local development
if (process.env.NETLIFY) {
    module.exports = {
        pageExtensions: ['js', 'jsx'],
        target: "serverless",
        images: {
            loader: 'cloudinary',
            path: 'https://res.cloudinary.com/daprhszgn/image/upload/'
        },
        i18n: {
            locales: ["en"],
            defaultLocale: "en"
        }
    };
} else {
    module.exports = {
        pageExtensions: ['js', 'jsx'],
        target: "serverless",
        i18n: {
            locales: ["en"],
            defaultLocale: "en"
        }
    };
}


