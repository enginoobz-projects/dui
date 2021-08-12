<!DOCTYPE html>
<html lang="en">

<?php include_once __DIR__ . "/../_index.php";
Head(title: "Dyanmic UI Framework")
        ->meta(
                author: "enginoobz",
                description: "Demo page for Dynamic UI Framework",
                keywords: "ui, dynamic, bootstrap, framework, jquery, php",
        )
        ->init(
                highlightColor: '#eb4034'
        )
        ->show();
?>
<!-- <head>
        <link rel="preload" href="../fonts/agency-fb-regular/AgencyFB-Reg.woff2" as="font" type="font/woff2" crossorigin>
        <link rel="preload" href="../fonts/agency-fb-bold/AgencyFB-Bold.woff2" as="font" type="font/woff2" crossorigin>
</head> -->

<body class="neu-style ">
        <!-- TODO: Add preloader to hide FOUC + Use a few indentical CSS as loading style sheet (e.g. Bootstrap) to reduce FOUC-->
        <?php include_once "index-injectable.php"; ?>
        <script async src="../js/main.js" type="module"></script>
        <!-- <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script> -->
        <!-- <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script> -->
        <!-- TOFIX: Error if only include bootstrap js since framework uses jquery & popper which MUST be loaded beforehand -->
        <!-- <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script> -->
</body>

</html>