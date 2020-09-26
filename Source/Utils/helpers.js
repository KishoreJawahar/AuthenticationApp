export const isValidElement = (data) => {
    return (data !== null && data !== undefined);
};

export const checkRegexPatternTest = (pattern, data) => {
    let testPattern = new RegExp(pattern);
    return testPattern.test(data);
};

export const isValidString = (data) => {
    return data !== null && data !== undefined && data !== '';
};

