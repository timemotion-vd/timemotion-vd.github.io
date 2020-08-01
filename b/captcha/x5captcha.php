<?php
include("../res/x5engine.php");
$nameList = array("smf","lpj","5hr","esz","c4r","xpu","5jl","x32","mhz","j5c");
$charList = array("P","T","M","3","V","7","3","H","D","A");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
