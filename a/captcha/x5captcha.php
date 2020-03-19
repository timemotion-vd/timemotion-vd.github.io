<?php
include("../res/x5engine.php");
$nameList = array("r46","7af","rlc","jln","fe4","ngg","86c","4pa","66t","2zw");
$charList = array("2","D","8","F","S","7","M","E","S","3");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
