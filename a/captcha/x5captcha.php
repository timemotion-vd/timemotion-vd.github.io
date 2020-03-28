<?php
include("../res/x5engine.php");
$nameList = array("2yy","64t","vs7","cde","huw","dne","kvh","fs8","xmh","7yf");
$charList = array("P","Y","J","R","M","A","L","Z","W","Y");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
