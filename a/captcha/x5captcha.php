<?php
include("../res/x5engine.php");
$nameList = array("u3a","z4l","x3k","mr8","lew","ay2","nz7","ffr","mpy","pju");
$charList = array("D","T","F","P","5","D","2","U","M","4");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
