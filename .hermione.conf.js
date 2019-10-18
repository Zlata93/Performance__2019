module.exports = {
    baseUrl: `http://localhost:9000`,
    gridUrl: 'http://0.0.0.0:4444/wd/hub',
    compositeImage: true,

    sets: {
        common: {
            files: './tests/index.js'
        }
    },

    browsers: {
        chrome: {
            desiredCapabilities: {
                browserName: 'chrome'
            },
            windowSize: '1920x1080'
            // windowSize: '2560x3000'
        },
        firefox: {
            desiredCapabilities: {
                browserName: 'firefox'
            }
        }
    },

    plugins: {
        'html-reporter/hermione': {
            path: './tests/hermione-html-report',
            defaultView: 'all'
        }
    },

    screenshotsDir: "./tests/hermione/screens"
};
