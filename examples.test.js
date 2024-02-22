const randomAny = require('./index');

// Testing randomNumber function
describe('randomNumber', () => {
    test('generates a random number with specified digit count', () => {
        const result = randomAny.randomNumber(3);
        expect(result).toBeGreaterThanOrEqual(100);
        expect(result).toBeLessThanOrEqual(999);
    });

    test('generates a random integer between min and max', () => {
        const result = randomAny.randomNumber(10, 20);
        expect(result).toBeGreaterThanOrEqual(10);
        expect(result).toBeLessThanOrEqual(20);
    });

    test('generates a random number with decimal places', () => {
        const result = randomAny.randomNumber(1, 2, 2);
        expect(result).toMatch(/^\d+\.\d{2}$/);
    });
});

// Testing randomString function
describe('randomString', () => {
    test('generates a string of correct length', () => {
        const length = 10;
        const result = randomAny.randomString(length);
        expect(result).toHaveLength(length);
    });

    test('generates a string including numbers when asked', () => {
        const length = 10;
        const result = randomAny.randomString(length, true);
        expect(result).toMatch(/^[A-Za-z0-9]+$/);
        expect(result).toHaveLength(length);
    });
});

// Testing randomUserAgent function
describe('randomUserAgent', () => {
    test('generates a random user agent string', () => {
        const result = randomAny.randomUserAgent();
        expect(result).toMatch(/^Mozilla\/5.0/);
    });

    test('generates a user agent string for specified browser', () => {
        const browsers = ['Chrome', 'Firefox', 'Safari', 'Edge'];
        browsers.forEach(browser => {
            const result = randomAny.randomUserAgent(browser);
            expect(result).toMatch(new RegExp(browser));
        });
    });
});