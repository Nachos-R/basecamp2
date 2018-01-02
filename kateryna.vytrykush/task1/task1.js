function calculate(){
	var string1,NumberW, lengthMaxW,lengthMinW,lengthAverageW, re, arr,i;
	NumberW =  lengthAverageW = 0;
	string1 = document.getElementById('text').value;
	re = /\s+,?\s?\.?\s?\-?\s?/;
    arr = string1.split(re);
    lengthMaxW = lengthMinW = arr[0].length;
    
    for ( i = 0; i < arr.length-1; i++)
    {
    		NumberW++;
    		if(arr[i].length > lengthMaxW) lengthMaxW = arr[i].length;
    		if(arr[i].length < lengthMinW) lengthMinW = arr[i].length;
    		lengthAverageW += arr[i].length;
    }
    lengthAverageW = lengthAverageW/NumberW;

document.getElementById("outNumberWords").innerHTML = NumberW;
document.getElementById("outMaxWord").innerHTML = lengthMaxW ;
document.getElementById("outMinWord").innerHTML = lengthMinW;
document.getElementById("outAverageLenght").innerHTML = lengthAverageW;
}
