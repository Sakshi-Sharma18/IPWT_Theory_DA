function validate()
{
    var cust= document.getElementById("cusid").value;
    var loan= document.getElementById("loanid").value;

    if(cust=="")
    {
        alert("Customer ID reqired!");
        return false;
    }
    
    if(loan=="")
    {
        alert("Loan ID reqired!");
        return false;
    }


    xmlHttp=GetXmlHttpObject();
    //xmlHttp=new XMLHttpRequest();
	if (xmlHttp==null)
	{
		alert ("Browser does not support HTTP Request");
		return false;
	}
    
    xmlHttp.open("GET","checkID.php?cust=" + cust + "&loan=" + loan, true);
	xmlHttp.send(); 

    xmlHttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            try {
                if (this.responseText == 1) {
                    window.location.href = "http://localhost/DA1/loanDetailsSuccess.php?cust=" + cust + "&loan=" + loan , true;
                }
                else
                {
                    throw "Invalid";
                }
                
            }
            catch (err) {
                window.location.href = "http://localhost/DA1/loanDetailsFailed.php", true;
                console.log(err);
            }
        }
    };
}

function GetXmlHttpObject()
{
	var xmlHttp=null;
	try
	{
		// Firefox, Opera 8.0+, Safari
		xmlHttp=new XMLHttpRequest();
	}
	catch (e)
	{
		//Internet Explorer
		try
		{
			xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch (e)
		{
			xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
	}
	return xmlHttp;
}

function updateDetails()
{
    /*var cus= getElementById("customerid").value;
    var emi= getElementById("emi").value;
    var tenure= getElementById("tenure").value;
    var s= getElementById("status").value;*/
    if($("#emi").val()<=10000 && $("#emi").val()>=1000)
    {
        xmlHttp=GetXmlHttpObject();
        //xmlHttp=new XMLHttpRequest();
	    if (xmlHttp==null)
	    {
		    alert ("Browser does not support HTTP Request");
		    return false;
	    }
    
        xmlHttp.open("GET","updateDetails.php?emi=" + $("#emi").val() + "&tenure=" + $("#tenure").val() + "&cus=" + $("#customerid").val(), true);
	    xmlHttp.send(); 

        xmlHttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                try {
                    if ($("#status").val()=="New" && this.responseText == 1) {
                        window.location.href = "http://localhost/DA1/updateSuccess.php", true;
                    }
                    else
                    {
                        throw "Invalid";
                    }
                }   
                catch (err) {
                    window.location.href = "http://localhost/DA1/updateFailed.php", true;
                    console.log(err);
                }   
            }
        };
    }
    else
    {
        alert("Emi should be in rtange 1000-10000");
        return false;
    }
}