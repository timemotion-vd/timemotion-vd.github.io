<?php
include("../res/x5engine.php");
$nameList = array("xzy","lln","576","vwf","wtt","354","eaz","ahn","7cm","xdd");
$charList = array("T","W","W","3","M","Z","M","Y","X","T");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
