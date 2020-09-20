<?php
include("../res/x5engine.php");
$nameList = array("hyz","uwt","ptv","y3f","s87","86u","85e","6p4","nuw","n24");
$charList = array("C","6","K","F","U","C","M","U","N","N");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
