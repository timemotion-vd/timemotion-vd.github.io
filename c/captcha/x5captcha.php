<?php
include("../res/x5engine.php");
$nameList = array("mrc","gsh","y5n","yhj","6we","jkv","hc8","cyd","j6l","nz3");
$charList = array("H","C","F","P","7","8","F","K","5","5");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
