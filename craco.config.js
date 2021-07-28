// eslint-disable-next-line import/no-extraneous-dependencies
const CracoAntDesignPlugin = require("craco-antd");

module.exports = {
    plugins: [
        {
            plugin: CracoAntDesignPlugin,
            options: {
                customizeTheme: {
                    "@primary-color": "#1DA57A",
                    "@link-color": "#1DA57A",
                },
            },
        },
    ],
};
