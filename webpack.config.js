const path = require("path");
const dotEnv = require("dotenv");
dotEnv.config();

module.exports = {
    mode: process.env.ENV_MODE,
    target: "node",
    entry: "./main.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "server.bundle.js", 
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.js?$/,
                include: [
                path.resolve(__dirname)
                ],
                exclude: [
                path.resolve(__dirname, "./node_modules")
                ],
                // flags to apply these rules, even if they are overridden (advanced option)
                loader: "babel-loader",
                // the loader which should be applied, it'll be resolved relative to the context
                options: {
                presets: ["@babel/preset-env"]
                },
            },
        ]
    }
}