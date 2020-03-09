<?php
include("../res/x5engine.php");
$nameList = array("kv2","n4l","xnt","8ne","d5m","7fl","j4j","hjg","mdk","aka");
$charList = array("3","Y","2","T","F","V","Y","N","5","L");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
