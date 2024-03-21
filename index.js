const readLines = require('readfile-syskey');

/**
 * Generates a random number based on provided arguments.
 * 
 * @param {number} minNum If it's the only argument, represents the number of digits for the random number.
 *                        If used with maxNum, represents the minimum value for the random range.
 * @param {number} [maxNum] Represents the maximum value for the random range. Used only if minNum is also provided.
 * @param {number} [decimalNum] If provided, the random number will have this many decimal places.
 * @return {number|string} A random number. If decimalNum is provided, the return value is a string to retain the specified number of decimal places.
 * 
 * Single argument: Generates a random number with specified digit count.
 * Two arguments: Generates a random integer between minNum and maxNum, inclusive.
 * Three arguments: Generates a random number between minNum and maxNum, inclusive, and with decimalNum decimal places.
 */
function randomNumber(minNum, maxNum, decimalNum) {
    let randomNumber;

    if (arguments.length === 1) {
        // When there is one argument, interpret it as the number of digits for the random integer
        const digitNum = parseInt(minNum, 10);
        if (isNaN(digitNum) || digitNum <= 0) {
            throw new Error('When using one argument, it must be a positive integer that represents the number of digits.');
        };
        const min = Math.pow(10, digitNum - 1);
        const max = Math.pow(10, digitNum) - 1;
        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    } else if (arguments.length === 2) {
        // With two arguments, generate a random integer within the specified range
        minNum = Number(minNum);
        maxNum = Number(maxNum);
        if (isNaN(minNum) || isNaN(maxNum)) {
            throw new Error('Invalid number input for range.');
        };
        const min = Math.min(minNum, maxNum);
        const max = Math.max(minNum, maxNum);
        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    } else if (arguments.length === 3) {
        // With three arguments, generate a random number within the range and with specified decimal places
        minNum = Number(minNum);
        maxNum = Number(maxNum);
        decimalNum = parseInt(decimalNum, 10);
        if (isNaN(minNum) || isNaN(maxNum) || isNaN(decimalNum) || decimalNum < 0) {
            throw new Error('Invalid number input for range or decimal places.');
        };
        const min = Math.min(minNum, maxNum);
        const max = Math.max(minNum, maxNum);
        randomNumber = (Math.random() * (max - min) + min).toFixed(decimalNum);
    } else {
        // If the arguments are not within the expected count, generate a random number between 0 inclusive and 1 exclusive
        randomNumber = Math.random();
    };

    return randomNumber;
};

/**
 * Generates a random string of a given length, with an option to include numbers.
 * 
 * @param {number} length - The number of characters in the random string.
 * @param {boolean} includeNumbers - Whether the string should include numbers.
 * @return {string} - A random string of the specified length, optionally including numbers.
 */
function randomString(length, includeNumbers) {
    if (typeof length !== 'number' || length <= 0) {
        throw new Error('Length must be a positive integer.');
    };

    let result = '';
    let characters = includeNumbers
        ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        : 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let charactersLength = characters.length;

    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    };

    return result;
};

/**
 * Helper function to generate a random browser version number.
 * 
 * @param {string} browser - The browser name for which to generate a version number.
 * @return {string} - A string representing a random browser version.
 */
function randomBrowserVersion(browser) {
    switch (browser) {
        case 'Chrome':
        case 'Edge':
            return `${randomNumber(70, 90)}.${randomNumber(0, 9)}.${randomNumber(1000, 9999)}.${randomNumber(0, 99)}`;
        case 'Firefox':
            return `${randomNumber(60, 80)}.${randomNumber(0, 9)}`;
        case 'Safari':
            return `${randomNumber(10, 13)}.${randomNumber(0, 3)}`;
        default:
            return `1.0`;
    };
};

/**
 * Generates a random user agent string for a specified browser or any if unspecified.
 * 
 * @param {string} [browserIdentifier] - The optional identifier of the browser ('Chrome', 'Firefox', 'Safari', 'Edge').
 * @return {string} - A random user agent string for the given or random browser.
 */
function randomUserAgent(browserIdentifier) {
    const browsers = {
        'Chrome': () => `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${randomBrowserVersion('Chrome')} Safari/537.36`,
        'Firefox': () => `Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:${randomBrowserVersion('Firefox')}) Gecko/20100101 Firefox/${randomBrowserVersion('Firefox')}`,
        'Safari': () => `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_${randomNumber(10, 15)}) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/${randomBrowserVersion('Safari')} Safari/605.1.15`,
        'Edge': () => `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${randomBrowserVersion('Edge')} Safari/537.36 Edge/${randomBrowserVersion('Edge')}`
    };

    if (browserIdentifier && browsers[browserIdentifier]) {
        return browsers[browserIdentifier]();
    } else {
        // Randomly select a browser if no identifier is provided
        const browserKeys = Object.keys(browsers);
        const randomBrowser = browserKeys[Math.floor(Math.random() * browserKeys.length)];
        return browsers[randomBrowser]();
    };
};

const randomAny = {
    randomNumber,
    randomString,
    randomUserAgent
};

module.exports = randomAny;