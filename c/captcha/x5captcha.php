<?php
include("../res/x5engine.php");
$nameList = array("hlr","655","2vg","szv","npx","s24","2h5","jwa","vxw","gwr");
$charList = array("P","W","D","6","5","F","F","Y","J","X");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
