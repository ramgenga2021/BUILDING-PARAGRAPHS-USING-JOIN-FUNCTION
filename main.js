function getparagraph1()
{
     var inputs =[];
     for(var i = 1 ; i <=6 ; i++)
     {
         inputs.push(document.getElementById("Input box " + i).value);
     }
     document.getElementById("show_paragraph_1").innerHTML = inputs.join(",");
}

function getparagraph2()
{
     var inputs =[];
     for(var i = 1 ; i <=6 ; i++) 
     {
         inputs.push(document.getElementById("Input box " + i).value);
     }
     document.getElementById("show_paragraph_2").innerHTML = inputs.join(",");
}