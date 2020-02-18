<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>E-Store</title>
    <link rel="stylesheet" type="text/css" href="/src/css/bootstrap.min.css"/>
    <link rel="stylesheet" type="text/css" href="/src/css/app.css"/>
    <link rel="stylesheet" type="text/css" href="/src/css/fontawesome/css/all.css"/>
    <script src="/dist/main.js" defer></script>
</head>
<body>
<?php
    if(isset($_SESSION["logged_in"]) && $_SESSION["logged_in"])
        echo '<div id="root"></div>';
    else
        echo '<div id="guest"></div>';
?>
</body>
</html>
