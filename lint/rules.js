const headerPattern = (parsed, _when, _value) => {
    const { scope } = parsed;
    if (!scope) return [false, 'commit scope must be an AID number (e.g., AID-123)'];

    const matches = scope.match(/^AID-\d+$/);
    if (!matches) return [false, 'commit scope must match format "AID-XXX"'];

    return [true];
};

const bodyPattern = (parsed, _when, _value) => {
    const { body } = parsed;
    if (!body) return [false, 'commit body must start with "Summary of changes:"'];

    if (body.match(/^Summary of changes:.+/m)) return [true];
    return [false, 'commit body must start with "Summary of changes:" followed by content'];
};

module.exports = {
    headerPattern,
    bodyPattern
}; 