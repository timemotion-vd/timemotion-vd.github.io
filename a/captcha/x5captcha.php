<?php
include("../res/x5engine.php");
$nameList = array("8m7","mcc","gk3","cmu","ze2","lva","sy5","4av","c4k","x7m");
$charList = array("F","M","A","X","4","V","K","4","G","L");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
