/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let s = str1.length >= str2.length ? str2 : str1;
    let l = str1.length >= str2.length ? str1 : str2;
    console.log("L length: " + l.length);
    console.log("S length: " + s.length)
    
    let w = "";

    if (l.replaceAll(s, "") === "" && l.length % s.length === 0) {
        w = s;
    } else {
        for (let i = Math.ceil(s.length/2); i > 0; i--) {
            let n = s.slice(0, i);
            if (l.replaceAll(n, "") === "") {
                if (s.replaceAll(n, "") === "") {
                    if (l.length % n.length === 0 
                    && s.length % n.length === 0) {
                        w = n;
                        break;
                    }
                    w = n;
                }
            }
        }
    }
    
    return w;
};