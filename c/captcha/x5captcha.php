<?php
include("../res/x5engine.php");
$nameList = array("337","gel","2xh","k7r","p37","kfl","ghz","2g2","kyy","mte");
$charList = array("T","A","G","3","6","H","6","W","4","Z");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
