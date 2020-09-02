<?php
include("../res/x5engine.php");
$nameList = array("hu4","uz2","3rs","wn3","d67","mdk","c37","6ac","d4c","l3j");
$charList = array("W","Z","8","D","E","5","W","K","C","D");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
