<?php
include("../res/x5engine.php");
$nameList = array("dxr","h7c","zx3","4pa","k4d","mxz","48x","nx3","s6u","wu3");
$charList = array("A","V","G","V","V","E","Y","7","C","W");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
