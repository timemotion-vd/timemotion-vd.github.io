<?php
include("../res/x5engine.php");
$nameList = array("a3s","jg4","mnl","tja","72s","4l8","nzz","jns","c4t","zpc");
$charList = array("Y","V","H","P","T","H","Z","H","R","2");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
