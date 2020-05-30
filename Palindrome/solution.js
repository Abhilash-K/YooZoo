/**
 * Created by Abhilash K on 5/30/2020.
 */

function IsPalindrome(s,i)
{
    var longestPalindromLength = longestPalindrome(s,0,s.length-1);
    if( (longestPalindromLength + parseInt(i)) == s.length)
    {
        return "true";
    }  
    return "false";
}

function longestPalindrome(s,i,j)
{
    if (i > j)
        return 0;
    
    if (i == j)
        return 1;
    
    if (s[i] == s[j])
        return longestPalindrome(s, i + 1, j - 1) + 2;

    return Math.max(longestPalindrome(s, i, j - 1), longestPalindrome(s, i + 1, j));
}





function findSolution(inputArray)
{
    var numtestCases = inputArray[0];
    var testString = [];
    var numSymbolsRemoved = [];
    var splitLineArray = [];
    var solutionString = "";
    for(var i=1;i<=numtestCases;i++)
    {
        splitLineArray = (inputArray[i]).split(' ');
        testString[i-1] = splitLineArray[0];
        numSymbolsRemoved[i-1] = splitLineArray[1];
    }

    for(var j=0; j<testString.length;j++)
    {
        solutionString += "Case #" + String(j +1) + ": ";
        solutionString += String(IsPalindrome(testString[j], numSymbolsRemoved[j]));
        solutionString += "\n";
    }

    return solutionString;
}