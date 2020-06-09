<?php
include("../res/x5engine.php");
$nameList = array("8z8","tlp","va5","les","rvc","3xu","k4c","5rd","7jt","rj4");
$charList = array("G","F","3","P","P","7","4","Z","F","G");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
