function check()
{
 let name = document.getElementById("name").value;
     if (name.length < 2 || name.length == 0)
     {
 alert("אנא מלא את שמך");
 return false;
}
alert("הטופס נשלח בהצלחה");
return true;
 }


