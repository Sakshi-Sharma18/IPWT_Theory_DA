<?php

$cust=$_GET['cust'];
$loan=$_GET['loan'];

$con = mysqli_connect("localhost","root", "","loandb");
/*if (!$con) 
{
	die('Not able to connect: ' . mysqli_error());
}*/
//mysqli_select_db("loandb", $con);

$sql="SELECT * FROM loan_table WHERE Customer_Id='" . $cust . "' AND Loan_Id='" . $loan . "';";

$result=mysqli_query($con, $sql);

if(mysqli_num_rows($result)>0)
    {
        echo 1;
    }

?>