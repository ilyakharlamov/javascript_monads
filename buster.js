var config = module.exports;
 
config["Nettuts Tests"] = {
    rootPath: "./",
    environment: "node",
    sources: [
        "js/mymonad/*.js"
    ],
    tests: [
        "js/mymonad/*test.js",
        "js/monad/*test.js",

    ]
}