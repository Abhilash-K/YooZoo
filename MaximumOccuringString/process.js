/**
 * Created by Abhilash K on 3/18/2017.
 */
function takeRawinput(text)
{
    var splitArray = [];
    var solnArray = [];
    var outputTextString = "";
    splitArray = text.split('\n');
    outputTextString = findSolution(splitArray);
    solnArray = outputTextString.split('\n');
    var outputField = document.getElementById("OutputText");

    var sizeOfTextArea = (solnArray.length) * 20;
    /*for(var i=0;i<solnArray.length;i++)
    {
        if(outputTextString == "")
        {
            outputTextString += solnArray[i];
        }
        else
        {
            outputTextString += '\n' + solnArray[i];
        }
    }*/
    outputField.value = outputTextString;
    outputField.style.height = String(sizeOfTextArea)+"px";


}