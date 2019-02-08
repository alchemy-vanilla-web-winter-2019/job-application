function removeWhiteSpace(string) {
    let newString = string.split(' ').join('');
    return newString;
}

export default removeWhiteSpace;