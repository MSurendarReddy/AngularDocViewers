<!doctype html>
<html lang="en">

<head>
    <!-- <title>Bootstrap</title> -->
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="mystyle.css">
</head>

<body>
    <div class="header">
        <p>Header</p>
    </div>
    <div class="content">
        <div class="sidebar">
            <p>menu asdsddfsdfdfsfsfsfd </p>
        </div>
        <div class="mainpage">
            <p>surendar reddy</p>
        </div>
    </div>
    <div class="footer">
        <p>Footer</p>
    </div>
</body>



</html>


// CSS
* {
    display: block;
    margin: 0px;
    overflow-x: hidden;
    overflow-y: hidden;
    margin: 0%;
}

.header {
    background: #16a085;
    position: absolute;
    height: 5%;
    width: 100%;
    display: flex;
    /* align-items: center  to display text in center highview */
    align-items: center;
    /* text-align: center; to display text in center widthview*/
    justify-content: center;
}

.content {
    top: 5%;
    height: 90%;
    /* background: thistle; */
    width: 100%;
    position: absolute;
    /* border: 1px solid black; */
}

.sidebar {
    background: powderblue;
    height: 100%;
    width: 20%;
    margin: 0%;
    /* display: flex; */
    position: absolute;
}

.mainpage {
    background: blueviolet;
    height: 100%;
    left: 20%;
    width: 100%;
    position: absolute;
    /* display: flex; */
}

.footer {
    background: #16a085;
    height: 5%;
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    /* align-items: center  to display text in center highview */
    align-items: center;
    /* text-align: center; to display text in center widthview*/
    justify-content: center;
}
