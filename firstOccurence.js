/**
 * Takes in two strings, one to search within the other for.
 * 
 * @param {string} haystack - The string to search within for the other string (needle)
 * @param {string} needle - the string to search for within the other string
 * 
 * @return {int} - The value of the index of the start of the search string (needle). This will be -1 if the string is not located within the other string (haystack).
 */

function indexOfString(haystack, needle) {
    return haystack.indexOf(needle);
}