/**
 * Created by Abhilash K on 5/30/2020.
 */

function MaximumOccusinrString(arr) 
{
    var countArray = {};
    var maxValue = arr[0];
    var maxCount = 0;
    for (var i = 0; i < arr.length; i++) 
    {
        if (countArray[arr[i]] == null) {
            countArray[arr[i]] = 1;
        }
        else {
            countArray[arr[i]]++;
        }
        if (countArray[arr[i]] > maxCount)
        {
            maxValue = arr[i];
            maxCount = countArray[arr[i]];
        }
    }
    return maxValue;
}




function findSolution(inputArray) {
    var numtestCases = inputArray[0];
    var testString = [];
    var testArray = [];
    var solutionString = "";

    for (var i = 1; i <= numtestCases; i++) {
        testString[i - 1] = inputArray[i]
    }

    for (var j = 0; j < testString.length; j++) {
        testArray = testString[j].split(",");
        solutionString += "Case #" + String(j + 1) + ": ";
        solutionString += String(MaximumOccusinrString(testArray));
        solutionString += "\n";
    }

    return solutionString;
}