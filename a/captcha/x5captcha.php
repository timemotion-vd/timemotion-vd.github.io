<?php
include("../res/x5engine.php");
$nameList = array("v4r","wmu","6u4","lh3","4ev","da6","hlm","myc","e6r","sj4");
$charList = array("C","R","5","N","Y","X","L","5","T","6");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
