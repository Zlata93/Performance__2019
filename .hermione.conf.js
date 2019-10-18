module.exports = {
    baseUrl: 'http://localhost:9000',
    gridUrl: 'http://localhost:4444/wd/hub',
    sets: {
        common: {
            files: './tests/index.js'
        }
    },
    browsers: {
        full: {
            desiredCapabilities: {
                browserName: 'chrome'
            }
        },
        1000: {
            windowSize: '1000x2000',
            desiredCapabilities: {
                browserName: 'chrome'
            }
        }
    },
    plugins: {
        'html-reporter/hermione': {
            path: './tests/hermione-html-report'
        }
    }
};
