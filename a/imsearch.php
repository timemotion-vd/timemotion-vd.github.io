<?php require_once("res/x5engine.php"); ?>
<!DOCTYPE html><!-- HTML5 -->
<html prefix="og: http://ogp.me/ns#" lang="zh-tw" dir="ltr">
	<head>
		<title>Search - 自然裡童心未泯的創作家ㄧ邱傑</title>
		<meta charset="utf-8" />
		<!--[if IE]><meta http-equiv="ImageToolbar" content="False" /><![endif]-->
		<meta name="author" content="Time Motion visual design" />
		<meta name="generator" content="Incomedia WebSite X5 Pro 2019.3.14 - www.websitex5.com" />
		<meta property="og:locale" content="tw" />
		<meta property="og:type" content="website" />
		<meta property="og:url" content="https://timemotion-vd.github.io/a/imsearch.php" />
		<meta property="og:title" content="Search" />
		<meta property="og:site_name" content="自然裡童心未泯的創作家ㄧ邱傑" />
		<meta property="og:image" content="https://timemotion-vd.github.io/a/favImage.png" />
		<meta property="og:image:type" content="image/png">
		<meta property="og:image:width" content="3013">
		<meta property="og:image:height" content="1659">
		<meta name="viewport" content="width=1150" />
		
		<link rel="stylesheet" href="style/reset.css?2019-3-14-0" media="screen,print" />
		<link rel="stylesheet" href="style/print.css?2019-3-14-0" media="print" />
		<link rel="stylesheet" href="style/style.css?2019-3-14-0" media="screen,print" />
		<link rel="stylesheet" href="style/template.css?2019-3-14-0" media="screen" />
		<link rel="stylesheet" href="pcss/imsearch.css?2019-3-14-0-637187879084862465" media="screen,print" />
		<script src="res/jquery.js?2019-3-14-0"></script>
		<script src="res/x5engine.js?2019-3-14-0" data-files-version="2019-3-14-0"></script>
		<script>
			window.onload = function(){ checkBrowserCompatibility('Your browser does not support the features necessary to display this website.','Your browser may not support the features necessary to display this website.','[1]Update your browser[/1] or [2]continue without updating[/2].','http://outdatedbrowser.com/'); };
			x5engine.utils.currentPagePath = 'imsearch.php';
			x5engine.boot.push(function () { x5engine.imPageToTop.initializeButton({}); });
		</script>
		<link rel="icon" href="favicon.png?2019-3-14-0-637187879084862465" type="image/png" />
	</head>
	<body>
		<div id="imPageExtContainer">
			<div id="imPageIntContainer">
				<div id="imHeaderBg"></div>
				<div id="imFooterBg"></div>
				<div id="imPage">
					<header id="imHeader">
						<h1 class="imHidden">Search - 自然裡童心未泯的創作家ㄧ邱傑</h1>
						<div id="imHeaderObjects"><div id="imHeader_imObjectImage_01_wrapper" class="template-object-wrapper"><div id="imHeader_imObjectImage_01"><div id="imHeader_imObjectImage_01_container"><img src="images/header.png" title="" alt="" />
</div></div></div></div>
					</header>
					<div id="imStickyBarContainer">
						<div id="imStickyBarGraphics"></div>
						<div id="imStickyBar">
							<div id="imStickyBarObjects"><div id="imStickyBar_imObjectImage_01_wrapper" class="template-object-wrapper"><div id="imStickyBar_imObjectImage_01"><div id="imStickyBar_imObjectImage_01_container"><img src="images/header.png" title="" alt="" />
</div></div></div></div>
						</div>
					</div>
					<a class="imHidden" href="#imGoToCont" title="Skip the main menu">Go to content</a>
					<div id="imSideBar">
						<div id="imSideBarObjects"></div>
					</div>
					<div id="imContentGraphics"></div>
					<main id="imContent">
						<a id="imGoToCont"></a>
						<div id="imSearchPage">
						<h2 id="imPgTitle">Search results</h2>
						<?php
						$search = new imSearch();
						$keys = isset($_GET['search']) ? @htmlspecialchars($_GET['search']) : "";
						$page = isset($_GET['page']) ? @htmlspecialchars($_GET['page']) : 0;
						$type = isset($_GET['type']) ? @htmlspecialchars($_GET['type']) : "pages"; ?>
						<div class="searchPageContainer">
						<?php echo $search->search($keys, $page, $type); ?>
						</div>
						</div>
						
					</main>
					<footer id="imFooter">
						<div id="imFooterObjects"><div id="imFooter_imObjectImage_01_wrapper" class="template-object-wrapper"><div id="imFooter_imObjectImage_01"><div id="imFooter_imObjectImage_01_container"><img src="images/footer_bg.png" title="" alt="" />
</div></div></div></div>
					</footer>
				</div>
				<span class="imHidden"><a href="#imGoToCont" title="Read this page again">Back to content</a></span>
			</div>
		</div>
		
		<noscript class="imNoScript"><div class="alert alert-red">To use this website you must enable JavaScript.</div></noscript>
	</body>
</html>
