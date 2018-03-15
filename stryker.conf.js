module.exports = function(config){
    config.set({
        files: [
            { pattern: 'src/**/*.js', mutated: true, included: false },
            'test/*.js'
        ],
        testRunner: 'mocha',
        testFramework: 'mocha',
        logLevel: 'debug',
        reporter: ['clear-text', 'progress', 'html'],
        coverageAnalysis: 'perTest',
        plugins: ['stryker-mocha-runner', 'stryker-mocha-framework', 'stryker-html-reporter']
    });
}