<?php
include("../res/x5engine.php");
$nameList = array("gfu","fx4","zau","wfx","3h4","cg8","say","npy","dgr","ath");
$charList = array("D","8","7","P","E","A","L","5","G","L");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
