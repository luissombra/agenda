const stringifyArgument = (value) => {
    if (typeof value === 'object')
        return Object.values(value).join(' ');

    return value + "";
}

export default stringifyArgument;