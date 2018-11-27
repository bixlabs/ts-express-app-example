module.exports = {
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: [
        "src/**/*",
        "!src/app/*"
    ],
    coverageDirectory: 'coverage',
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.json',
        },
    },
    moduleFileExtensions: [
        'js',
        'ts',
        'tsx',
    ],
    testPathIgnorePatterns: [
        "node_modules",
        "dist"
    ],
    testEnvironment: 'node',
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    preset: 'ts-jest',
};
