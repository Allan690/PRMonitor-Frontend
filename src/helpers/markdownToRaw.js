const replaceLineBreaks = function(string) {
    string = string.replace(/\\n/g, String.fromCharCode(13, 10) );
    return string;
};

export default replaceLineBreaks;
