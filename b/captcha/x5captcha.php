<?php
include("../res/x5engine.php");
$nameList = array("mjw","n3w","j88","c5y","cg7","gkt","fna","a53","te4","leg");
$charList = array("7","G","N","R","5","Y","M","W","P","S");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
