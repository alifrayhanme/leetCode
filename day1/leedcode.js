/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */

/**
 * স্ট্রিং এর length হিসাব করব
 * k এর মান দিয়ে ভাগ করব 
 * ভাগফল কে দশমিকের পরের পূর্ণ সংখ্যা বের করব 
 * পূর্ণ সংখ্যা টি নতুন array  এর lenght হবে
 * 
 */


const divideString = function(s, k, fill) {
    const newLength = Math.ceil(s.length / k)
    const output = []
    for (let i = 0; i < newLength; i++) {
        let test = s.slice((i * k), (i * k) + k)
        
        if (test.length < k) {
            test += fill.repeat(k - test.length)
        }
        output.push(test)
    }
    return output
};

console.log(divideString("abcdefg", 3, "x"));
console.log(divideString("ctoyjrwtngqwt", 8, "n"));







const divideStringWriteChatGTP = (s, k, fill) => {
    const result = [];
    for (let i = 0; i < s.length; i += k) {
        let chunk = s.slice(i, i + k);
        if (chunk.length < k) {
            chunk = chunk + fill.repeat(k - chunk.length);
        }
        result.push(chunk);
    }
    return result;
};

console.log(divideStringWriteChatGTP("abcdefg", 3, "x"));
console.log(divideStringWriteChatGTP("ctoyjrwtngqwt", 8, "n"));