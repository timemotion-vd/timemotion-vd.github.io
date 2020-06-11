<?php
include("../res/x5engine.php");
$nameList = array("6d8","ruc","cef","t2v","uky","y7h","pwd","ak4","gpj","yw7");
$charList = array("R","G","5","3","N","2","4","Z","E","E");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
