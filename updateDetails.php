<?php

$emi=$_GET['emi'];
$tenure=$_GET['tenure'];
$cus=$_GET['cus'];

$con = mysqli_connect("localhost","root", "","loandb");
/*if (!$con) 
{
	die('Not able to connect: ' . mysqli_error());
}*/
//mysqli_select_db("loandb", $con);

$sql="UPDATE loan_table SET EMI=" . $emi . "," . "Tenure=" . $tenure . " WHERE Customer_Id='" . $cus . "';";

$result=mysqli_query($con, $sql);
echo 1;
?>