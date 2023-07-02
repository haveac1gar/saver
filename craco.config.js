const config = {
    "webpack": {
        "configure": (webpackConfig) => ({
            ...webpackConfig,
            "module": {
                ...webpackConfig.module,
                "rules": [
                    ...webpackConfig.module.rules,
                    {
                        "test": /\.tsx?$/,
                        "use": "ts-loader"
                    }
                ]
            }
        })
    }
};

module.exports = config;
