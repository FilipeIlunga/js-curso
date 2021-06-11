/* 
Function Description

Complete the function matchingStrings in the editor below.
The function must return an array of integers representing
the frequency of occurrence of each query string in strings.

matchingStrings has the following parameters:

string strings[n] - an array of strings to search
string queries[q] - an array of query strings
Returns
        int[q]: an array of results for each query */
    
function matchingStrings(strings, queries) {
    var count
    var arrOutPut = []

    for (let i = 0; i < queries.length; i++) {
        count = 0
        for (let j = 0; j < strings.length; j++) {
            if (queries[i] == strings[j]) {
                count++
            }
        }
        arrOutPut.push(count)
    }
    return arrOutPut
}
