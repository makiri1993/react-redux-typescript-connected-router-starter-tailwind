const purgecss = require("@fullhuman/postcss-purgecss")({
    // Specify the paths to all of the template files in your project
    content: ["./src/**/*.ts", "./src/**/*.tsx", "./public/index.html"],

    // Include any special characters you're using in this regular expression
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/%.]+/g) || []
})

module.exports = {
    plugins: [
        require("tailwindcss"),
        require("autoprefixer"),
        ...(process.env.REACT_APP_BUILD_ENV === "production" ||
        process.env.REACT_APP_BUILD_ENV === "sandbox"
            ? [purgecss]
            : [])
    ]
}
