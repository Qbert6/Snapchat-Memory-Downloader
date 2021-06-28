// Snapchat-Memory Downloader

var go = 0;
//0 is the start number

function download(){
    var links = document.getElementsByTagName("table")[0].getElementsByTagName("a");
    //Finds all of the "download" button entities and putting them under the variable 'links'
    eval(links[go].href);
    //Is evaluating the download button with the variable 0 so you start off with the first one
    go++;
    //Makes the variable 0 go up in 1 increment everytime it gets to this part
    console.log(go);
    //Keeps progress of how many downloads you have initated (Can run behind if you have it on a high setting)
    setTimeout(download, 5000);
    //If you don't have a timeout it will just try and download all of them at once. This is the optimum speed but obviously
    //feel free to increase or decrease.
    //it starts the script again every 5 seconds so you have plenty of time to download the files.
    };

download();
<!DOCTYPE html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title> </title>
    <style>
        body {
            font-size: 14px;
            font-family: 'Avenir Next','Helvetica Neue', Arial, Helvetica, sans-serif;
            margin: 20px auto;
            width: 1200px;
        }

        b {
            font-weight: 600;
        }

        table {
            width: 100%;
            table-layout: fixed;
        }

        .ghost {
            padding: 10px;
            height: 150px;
            width: 150px;
            background-color: #FFFE00;
            display: block;
            margin: auto;
            border-radius: 10px;
        }

        .leftpanel {
            float: left;
            width: 300px;
            color: #6c6c6c;
        }

        .leftpanel a {
            text-decoration: none;
            color: #6c6c6c;
        }

        .leftpanel ul {
            margin-left: 20px;
            padding: 0;
        }

        .leftpanel li {
            display: block;
            padding: 11px 16px;
        }

        .leftpanel li:hover {
            background-color: #f3f3f3;
        }

        .rightpanel th {
            text-align : left
        }

        .rightpanel {
            padding-left: 310px;
            padding-top: 5px;
        }

        .rightpanel th, td {
            padding: 15px;
            font-weight: normal;
        }

        .bold-headers th {
            font-weight: 600;
        }

    </style>
</head><html><body><div class="leftpanel"><img class="ghost" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MDAgNTAwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPjFBcnRib2FyZCAxIGNvcHkgMjwvdGl0bGU+PGcgaWQ9IlBSSU1BUllfLV9HSE9TVCIgZGF0YS1uYW1lPSJQUklNQVJZIC0gR0hPU1QiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTQxNy45MywzNDAuNzFjLTYwLjYxLTI5LjM0LTcwLjI3LTc0LjY0LTcwLjctNzgtLjUyLTQuMDctMS4xMS03LjI3LDMuMzgtMTEuNDEsNC4zMy00LDIzLjU0LTE1Ljg5LDI4Ljg3LTE5LjYxLDguODEtNi4xNiwxMi42OS0xMi4zMSw5LjgzLTE5Ljg3LTItNS4yMy02Ljg3LTcuMi0xMi03LjJhMjIuMywyMi4zLDAsMCwwLTQuODEuNTRjLTkuNjgsMi4xLTE5LjA4LDYuOTUtMjQuNTIsOC4yNmE4LjU2LDguNTYsMCwwLDEtMiwuMjdjLTIuOSwwLTQtMS4yOS0zLjcyLTQuNzguNjgtMTAuNTgsMi4xMi0zMS4yMy40NS01MC41Mi0yLjI5LTI2LjU0LTEwLjg1LTM5LjY5LTIxLTUxLjMyQzMxNi44LDEwMS40MywyOTQsNzcuMiwyNTAsNzcuMlMxODMuMjMsMTAxLjQzLDE3OC4zNSwxMDdjLTEwLjE4LDExLjYzLTE4LjczLDI0Ljc4LTIxLDUxLjMyLTEuNjcsMTkuMjktLjE3LDM5LjkzLjQ1LDUwLjUyLjIsMy4zMi0uODIsNC43OC0zLjcyLDQuNzhhOC42NCw4LjY0LDAsMCwxLTItLjI3Yy01LjQzLTEuMzEtMTQuODMtNi4xNi0yNC41MS04LjI2YTIyLjMsMjIuMywwLDAsMC00LjgxLS41NGMtNS4xNSwwLTEwLDItMTIsNy4yLTIuODYsNy41NiwxLDEzLjcxLDkuODQsMTkuODcsNS4zMywzLjcyLDI0LjU0LDE1LjYsMjguODcsMTkuNjEsNC40OCw0LjE0LDMuOSw3LjM0LDMuMzgsMTEuNDEtLjQzLDMuNDEtMTAuMSw0OC43MS03MC43LDc4LTMuNTUsMS43Mi05LjU5LDUuMzYsMS4wNiwxMS4yNCwxNi43Miw5LjI0LDI3Ljg1LDguMjUsMzYuNSwxMy44Miw3LjM0LDQuNzMsMywxNC45Myw4LjM0LDE4LjYxLDYuNTYsNC41MywyNS45NS0uMzIsNTEsNy45NSwyMSw2LjkyLDMzLjc2LDI2LjQ3LDcxLDI2LjQ3czUwLjM3LTE5LjY0LDcxLTI2LjQ3YzI1LTguMjcsNDQuNDMtMy40Miw1MS03Ljk1LDUuMzMtMy42OCwxLTEzLjg4LDguMzQtMTguNjEsOC42NS01LjU3LDE5Ljc3LTQuNTgsMzYuNS0xMy44MkM0MjcuNTIsMzQ2LjA3LDQyMS40OCwzNDIuNDMsNDE3LjkzLDM0MC43MVoiLz48cGF0aCBkPSJNNDQ0LjMsMzM3LjI2Yy0yLjcyLTcuNC03LjktMTEuMzYtMTMuOC0xNC42NC0xLjExLS42NS0yLjEzLTEuMTctMy0xLjU3LTEuNzYtLjkxLTMuNTYtMS43OS01LjM1LTIuNzItMTguMzktOS43NS0zMi43NS0yMi4wNS00Mi43MS0zNi42M2E4My4wNiw4My4wNiwwLDAsMS03LjMzLTEzYy0uODUtMi40My0uODEtMy44MS0uMi01LjA3YTguMjUsOC4yNSwwLDAsMSwyLjM1LTIuNDVjMy4xNi0yLjA5LDYuNDItNC4yMSw4LjYzLTUuNjQsMy45NC0yLjU1LDcuMDYtNC41Nyw5LjA3LTYsNy41NS01LjI4LDEyLjgzLTEwLjg5LDE2LjEzLTE3LjE2QTM0LjE3LDM0LjE3LDAsMCwwLDQwOS43OCwyMDRjLTUtMTMuMTYtMTcuNDMtMjEuMzMtMzIuNDktMjEuMzNhNDQuNzUsNDQuNzUsMCwwLDAtOS40NSwxYy0uODMuMTgtMS42Ni4zNy0yLjQ3LjU4LjE0LTktLjA2LTE4LjUtLjg2LTI3Ljg1LTIuODQtMzIuODctMTQuMzUtNTAuMS0yNi4zNS02My44NEExMDUsMTA1LDAsMCwwLDMxMS4zNyw3MUMyOTMuMTYsNjAuNiwyNzIuNTEsNTUuMzIsMjUwLDU1LjMyUzIwNi45NCw2MC42LDE4OC43MSw3MWExMDQuNjIsMTA0LjYyLDAsMCwwLTI2Ljg0LDIxLjZjLTEyLDEzLjc0LTIzLjUxLDMxLTI2LjM1LDYzLjg0LS44LDkuMzUtMSwxOC45LS44NywyNy44NS0uODEtLjIxLTEuNjMtLjQtMi40Ni0uNThhNDQuNzUsNDQuNzUsMCwwLDAtOS40NS0xYy0xNS4wNywwLTI3LjUyLDguMTctMzIuNSwyMS4zM2EzNC4yMSwzNC4yMSwwLDAsMCwxLjY1LDI4LjQxYzMuMzEsNi4yNyw4LjU5LDExLjg4LDE2LjE0LDE3LjE2LDIsMS40LDUuMTMsMy40Miw5LjA3LDYsMi4xMywxLjM4LDUuMjQsMy40LDguMjksNS40MmE4LjksOC45LDAsMCwxLDIuNjYsMi42N2MuNjQsMS4zMS42NiwyLjcyLS4yOSw1LjMyYTgyLjI5LDgyLjI5LDAsMCwxLTcuMjEsMTIuNzNjLTkuNzQsMTQuMjUtMjMuNjgsMjYuMzMtNDEuNDgsMzYtOS40Myw1LTE5LjIzLDguMzQtMjMuMzcsMTkuNTktMy4xMiw4LjQ5LTEuMDgsMTguMTUsNi44NSwyNi4yOWgwYTM5LjYzLDM5LjYzLDAsMCwwLDEwLDcuNTcsMTA4LjM1LDEwOC4zNSwwLDAsMCwyNC40Nyw5Ljc5LDE2LjE2LDE2LjE2LDAsMCwxLDQuOTQsMi4yMWMyLjg5LDIuNTMsMi40OCw2LjM0LDYuMzMsMTEuOTJhMjcuOCwyNy44LDAsMCwwLDcuMjQsNy4zNmM4LjA4LDUuNTgsMTcuMTYsNS45MywyNi43OCw2LjMsOC42OS4zMywxOC41NC43MSwyOS43OSw0LjQyLDQuNjYsMS41NCw5LjUsNC41MiwxNS4xMSw4LDEzLjQ3LDguMjgsMzEuOTEsMTkuNjEsNjIuNzcsMTkuNjFzNDkuNDMtMTEuMzksNjMtMTkuN2M1LjU3LTMuNDIsMTAuMzgtNi4zNywxNC45MS03Ljg3LDExLjI1LTMuNzIsMjEuMS00LjA5LDI5Ljc5LTQuNDIsOS42Mi0uMzcsMTguNy0uNzIsMjYuNzgtNi4zYTI3Ljg5LDI3Ljg5LDAsMCwwLDguMjQtOWMyLjc3LTQuNzEsMi43LTgsNS4zLTEwLjNhMTUuMzIsMTUuMzIsMCwwLDEsNC42NC0yLjEyLDEwOC43NiwxMDguNzYsMCwwLDAsMjQuOC05Ljg4QTM5LDM5LDAsMCwwLDQzNy45NCwzNjNsLjEtLjEyQzQ0NS40OCwzNTQuOTIsNDQ3LjM1LDM0NS41NCw0NDQuMywzMzcuMjZaTTQxNi44NywzNTJjLTE2LjczLDkuMjQtMjcuODUsOC4yNS0zNi41LDEzLjgyLTcuMzUsNC43My0zLDE0LjkzLTguMzQsMTguNjEtNi41Niw0LjUzLTI1Ljk1LS4zMi01MSw3Ljk1LTIwLjY2LDYuODMtMzMuODQsMjYuNDctNzEsMjYuNDdTMjAwLDM5OS4yNSwxNzksMzkyLjMzYy0yNS04LjI3LTQ0LjQzLTMuNDItNTEtNy45NS01LjMzLTMuNjgtMS0xMy44OC04LjM0LTE4LjYxQzExMSwzNjAuMiw5OS44OCwzNjEuMTksODMuMTYsMzUyYy0xMC42NS01Ljg4LTQuNjEtOS41Mi0xLjA2LTExLjI0LDYwLjYtMjkuMzQsNzAuMjctNzQuNjQsNzAuNy03OCwuNTItNC4wNywxLjEtNy4yNy0zLjM4LTExLjQxLTQuMzMtNC0yMy41NC0xNS44OS0yOC44Ny0xOS42MS04LjgyLTYuMTYtMTIuNy0xMi4zMS05Ljg0LTE5Ljg3LDItNS4yMyw2Ljg4LTcuMiwxMi03LjJhMjIuMywyMi4zLDAsMCwxLDQuODEuNTRjOS42OCwyLjEsMTkuMDgsNi45NSwyNC41MSw4LjI2YTguNjQsOC42NCwwLDAsMCwyLC4yN2MyLjksMCwzLjkyLTEuNDYsMy43Mi00Ljc4LS42Mi0xMC41OS0yLjEyLTMxLjIzLS40NS01MC41MiwyLjI5LTI2LjU0LDEwLjg0LTM5LjY5LDIxLTUxLjMyLDQuODgtNS41OSwyNy44MS0yOS44Miw3MS42Ni0yOS44MlMzMTYuOCwxMDEuNDMsMzIxLjY4LDEwN2MxMC4xNywxMS42MywxOC43MywyNC43OCwyMSw1MS4zMiwxLjY3LDE5LjI5LjIzLDM5Ljk0LS40NSw1MC41Mi0uMjMsMy40OS44Miw0Ljc4LDMuNzIsNC43OGE4LjU2LDguNTYsMCwwLDAsMi0uMjdjNS40NC0xLjMxLDE0Ljg0LTYuMTYsMjQuNTItOC4yNmEyMi4zLDIyLjMsMCwwLDEsNC44MS0uNTRjNS4xNSwwLDEwLDIsMTIsNy4yLDIuODYsNy41Ni0xLDEzLjcxLTkuODMsMTkuODctNS4zMywzLjcyLTI0LjU0LDE1LjYtMjguODcsMTkuNjEtNC40OSw0LjE0LTMuOSw3LjM0LTMuMzgsMTEuNDEuNDMsMy40MSwxMC4wOSw0OC43MSw3MC43LDc4QzQyMS40OCwzNDIuNDMsNDI3LjUyLDM0Ni4wNyw0MTYuODcsMzUyWiIvPjwvZz48L3N2Zz4="><ul><li><a href=account.html>Login History and Account Information</a></li><li><a href=snap_history.html>Snap History</a></li><li><a href=chat_history.html>Chat History</a></li><li><a href=shared_story.html>Our Story & Spotlight Content</a></li><li><a href=purchase_history.html>Purchase History</a></li><li><a href=shop_history.html>Shop History</a></li><li><a href=support_note.html>Snapchat Support History</a></li><li><a href=user_profile.html>User Profile</a></li><li><a href=snap_pro.html>Public Profiles</a></li><li><a href=friends.html>Friends</a></li><li><a href=ranking.html>Ranking</a></li><li><a href=story_history.html>Story History</a></li><li><a href=account_history.html>Account History</a></li><li><a href=location_history.html>Location</a></li><li><a href=search_history.html>Search History</a></li><li><a href=terms_history.html>Terms History</a></li><li><a href=subscriptions.html>Subscriptions</a></li><li><a href=bitmoji.html>Bitmoji</a></li><li><a href=in_app_surveys.html>In-app Surveys</a></li><li><a href=in_app_reports.html>Reported Content</a></li><li><a href=bitmoji_kit_user.html>Bitmoji Kit</a></li><li><a href=connected_apps.html>Connected Apps</a></li><li><a href=talk_history.html>Talk History</a></li><li><a href=snap_ads.html>Ads Manager</a></li><li><a href=snap_games_and_minis.html>Snap Games and Minis</a></li><li><a href=community_lenses.html>My Lenses</a></li><li><a href=memories_history.html>Memories</a></li><li><a href=cameos_metadata.html>Cameos</a></li><li><a href=email_campaign_history.html>Email Campaign History</a></li><li><a href=snap_tokens_order_history.html>Snap Tokens</a></li><li><a href=payouts.html>Payouts</a></li><li><a href=scans.html>Scans</a></li><li><a href=netsuite_orders.html>Orders</a></li><li><a href=snap_map_places_history.html>Snap Map Places</a></li><li><a href=faq.html>Frequently Asked Questions</a></li></ul></div><div class="rightpanel"><h1>Memories</h1><p>This section includes information about Memories you've saved in Snapchat. Download links below will expire 7 days from when your data file was made available to you.</p><p class="important"><script>function downloadMemories(url) {    var parts = url.split("?");    var xhttp = new XMLHttpRequest();    xhttp.open("POST", parts[0], true);    xhttp.onreadystatechange = function() {        if (xhttp.readyState == 4 && xhttp.status == 200) {            var a = document.createElement("a");            a.href = xhttp.responseText;            a.style.display = "none";            document.body.appendChild(a);            a.click();            document.getElementById("mem-info-bar").innerText = "";        } else if (xhttp.readyState == 4 && xhttp.status >= 400) {            document.getElementById("mem-info-bar").innerText = "Oops!                 Something went wrong. Status " + xhttp.status        }    };    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");    xhttp.send(parts[1]);}</script><div id='mem-info-bar' style='color:red'></div><table><tbody><tr><th style="white-space: nowrap; overflow: hidden;"><b>Date</b></th><th style="white-space: nowrap; overflow: hidden;"><b>Media Type</b></th><th style="white-space: nowrap; overflow: hidden;"><b> </b></th></tr><tr><td>2021-06-26 16:06:25 UTC</td><td>PHOTO</td><td><a href="javascript:downloadMemories('https://app.snapchat.com/dmd/memories?uid=6892f0c6-3693-4641-a3df-90afd91f74d1&sid=f824224a-4b04-4b32-d59c-925a54c8ca29&mid=f42b6e0e-e493-6a38-8917-849af421d7ad&ts=1624744146892&proxy=true&sig=1ff1c199f794163d5f3c41d981de15117ccdbe4aa4822dc94692932d7503de1c');">download</a></td></tr><tr><td>2021-06-26 16:05:52 UTC</td><td>VIDEO</td><td><a href="javascript:downloadMemories('https://app.snapchat.com/dmd/memories?uid=6892f0c6-3693-4641-a3df-90afd91f74d1&sid=1b4c2245-b787-a8e5-d88a-0bb580ab9fab&mid=dc7dab2d-c13c-5112-2492-9f039e84e22b&ts=1624743950842&proxy=true&sig=27a9cf991a11c5974d2542bb5ee8f5311bb3bfe4340c878f399f0c157d1f5292');">download</a></td></tr><tr><td>2021-06-26 16:05:14 UTC</td><td>VIDEO</td><td><a href="javascript:downloadMemories('https://app.snapchat.com/dmd/memories?uid=6892f0c6-3693-4641-a3df-90afd91f74d1&sid=3cf6c2fd-9a0a-c919-3a61-84b4a5af4357&mid=a8c651e3-ed75-9f68-7476-4104d40dbf4d&ts=1624743981467&proxy=true&sig=9bd515a080b6a8b30be3ead00f39a6cb3d862048b242f59d0aed7f09517c0914');">download</a></td></tr><tr><td>2021-06-26 16:05:03 UTC</td><td>PHOTO</td><td><a href="javascript:downloadMemories('https://app.snapchat.com/dmd/memories?uid=6892f0c6-3693-4641-a3df-90afd91f74d1&sid=31e3f043-34c3-1cc6-2ef7-f85d3991ab41&mid=5cbcd6ab-e34a-81f5-a96b-8aa7e106b6fd&ts=1624743971129&proxy=true&sig=32182b68679ddd17d82346300efd45d5cd37d3e2de86235edd49e9d954648ffe');">download</a></td></tr><tr><td>2021-06-26 16:04:53 UTC</td><td>PHOTO</td><td><a href="javascript:downloadMemories('https://app.snapchat.com/dmd/memories?uid=6892f0c6-3693-4641-a3df-90afd91f74d1&sid=491ed287-a800-ebb6-8f8d-2dd7136a227c&mid=853cf782-3c09-45e1-acc1-41ad1c51ef3d&ts=1624743994094&proxy=true&sig=cbb0941b82cd60959d7246a8093780dc638204ad864431196927276836226d40');">download</a></td></tr><tr><td>2021-06-14 18:09:45 UTC</td><td>VIDEO</td><td><a href="javascript:downloadMemories('https://app.snapchat.com/dmd/memories?uid=6892f0c6-3693-4641-a3df-90afd91f74d1&sid=e1a1cda4-cf71-af1c-4294-8e3856fd9b30&mid=54903886-667a-d631-e2b3-f1e326129323&ts=1624744127257&proxy=true&sig=43e4ac011fc83d0d3340f79cab654e927a43c4f6c071ba8f0f8f569fd84bc20e');">download</a></td></tr><tr><td>2021-06-14 18:09:35 UTC</td><td>VIDEO</td><td><a href="javascript:downloadMemories('https://app.snapchat.com/dmd/memories?uid=6892f0c6-3693-4641-a3df-90afd91f74d1&sid=3c0fe0a5-3295-aa61-8f58-143e1fe1ebd1&mid=853eef0c-a716-91aa-966a-460d4bb5d0a5&ts=1624743980122&proxy=true&sig=f7d8f60c726390d546d36125cd40acf0222d3941a97f874df3e4b33b5768e24f');">download</a></td></tr><tr><td>2021-06-14 18:09:04 UTC</td><td>VIDEO</td><td><a href="javascript:downloadMemories('https://app.snapchat.com/dmd/memories?uid=6892f0c6-3693-4641-a3df-90afd91f74d1&sid=37583d13-cad2-4857-4e09-a7f06f879421&mid=19a75c70-3faa-9c0c-edda-50f85095c555&ts=1624743975653&proxy=true&sig=0278509e1264a12e05d4942bedd0c6160951c687b4a85d0e26e073c8f71d31b6');">download</a></td></tr><tr><td>2021-06-14 18:07:43 UTC</td><td>VIDEO</td><td><a href="javascript:downloadMemories('https://app.snapchat.com/dmd/memories?uid=6892f0c6-3693-4641-a3df-90afd91f74d1&sid=3764953a-7bae-ed46-4165-c2c289a70486&mid=f76d5a13-7dc2-7bbb-f9d9-a6c35c49e4dc&ts=1624743975654&proxy=true&sig=05f346a453627175badf303c1894f800244760bb41616116043269a89d7ae2a6');">download</a></td></tr><tr><td>2021-06-14 18:07:28 UTC</td><td>VIDEO</td><td><a href="javascript:downloadMemories('https://app.snapchat.com/dmd/memories?uid=6892f0c6-3693-4641-a3df-90afd91f74d1&sid=722f0847-ab4b-38fe-b47e-871c0934752f&mid=8f086e66-a174-99f4-19aa-3b4722355422&ts=1624744028265&proxy=true&sig=f15763addaff5aa419cb68cac20e926b2b5703f858695e0d63c6c86eccb390d2');">download</a></td></tr><tr><td>2021-06-14 17:35:54 UTC</td><td>PHOTO</td><td><a href="javascript:downloadMemories('https://app.snapchat.com/dmd/memories?uid=6892f0c6-3693-4641-a3df-90afd91f74d1&sid=35bbd409-ed55-ddf6-fbe2-341df336fcef&mid=d6b178fc-7ba0-0c72-7f95-a75f5f574d1d&ts=1624743975653&proxy=true&sig=b2762246058450d88bc10f8a5f14c1eb45bd8414460eb6590440c33042f2a0c0');">download</a></td></tr><tr><td>2021-06-14 16:51:01 UTC</td><td>PHOTO</td><td><a href="javascript:downloadMemories('https://app.snapchat.com/dmd/memories?uid=6892f0c6-3693-4641-a3df-90afd91f74d1&sid=5e238dae-586a-ae5f-953f-1504b9f0a450&mid=08956f2e-5ead-fb8e-53a3-54ed2347343c&ts=1624744011062&proxy=true&sig=7f0679f33178f177bd3aa56b3ac6f563ffe4706f28d748f6a3c6a821b4b8f7df');">download</a></td></tr><tr><td>2021-06-14 16:50:59 UTC</td><td>PHOTO</td><td><a href="javascript:downloadMemories('https://app.snapchat.com/dmd/memories?uid=6892f0c6-3693-4641-a3df-90afd91f74d1&sid=7f381b55-1237-6d87-c5a1-3c329b0e891a&mid=2e81346c-48a6-f15a-100e-3e48d45bbb93&ts=1624744040004&proxy=true&sig=0a7d1604a7c246a887240370045a2cbd50990c43222df2107b268496b621e34f');">download</a></td></tr><tr><td>2021-06-14 16:50:57 UTC</td><td>PHOTO</td><td><a href="javascript:downloadMemories('https://app.snapchat.com/dmd/memories?uid=6892f0c6-3693-4641-a3df-90afd91f74d1&sid=a044150a-404c-cbc3-accd-0b7f869611fc&mid=90e08246-65f4-f20e-f3c2-b680d751eea1&ts=1624744071196&proxy=true&sig=036c5e03fb436676087d45d3bb8d419ad3d2b7ad72b2abe20cfac7a20f1b9aee');">download</a></td></tr><tr><td>2021-06-14 16:50:55 UTC</td><td>PHOTO</td><td><a href="javascript:downloadMemories('https://app.snapchat.com/dmd/memories?uid=6892f0c6-3693-4641-a3df-90afd91f74d1&sid=fde73ec0-2d51-2221-bbd4-70ee4bca0b47&mid=7be78116-50eb-c913-22e1-a42f30d4001f&ts=1624744150790&proxy=true&sig=2d51546c3be358ec6874c72ac25f9b8a4a946c02340b5ba770caa9de2293716d');">download</a></td></tr><tr><td>2021-06-14 16:50:53 UTC</td><td>PHOTO</td><td><a href="javascript:downloadMemories('https://app.snapchat.com/dmd/memories?uid=6892f0c6-3693-4641-a3df-90afd91f74d1&sid=6786932c-ec70-6cb4-71cc-a412de9be985&mid=b3bb2e4d-72d1-6195-83eb-df201bb2878c&ts=1624744018422&proxy=true&sig=820dbdbeb3eac8facf5601ec4ab17967031d5dec89ceae50e705b269e6f1c8c0');">download</a></td></tr><tr><td>2021-06-14 16:50:50 UTC</td><td>PHOTO</td><td><a href="javascript:downloadMemories('https://app.snapchat.com/dmd/memories?uid=6892f0c6-3693-4641-a3df-90afd91f74d1&sid=40d6d8b8-f436-b704-3c3e-d6c26fcee166&mid=d22d4c73-0664-f524-6414-b5d001002bc1&ts=1624743984666&proxy=true&sig=bdc2eb85f210cb2f7147445748df793f8677351266e97b799fd14e7effa2b540');">download</a></td></tr><tr><td>2021-06-11 16:58:40 UTC</td><td>PHOTO</td><td><a href="javascript:downloadMemories('https://app.snapchat.com/dmd/memories?uid=6892f0c6-3693-4641-a3df-90afd91f74d1&sid=c8d14dbb-e55a-f7dd-17bc-7b63ef465863&mid=4d99fd99-fcc4-6023-8d4e-c60514e56934&ts=1624744104131&proxy=true&sig=4707817494429bc36a72fa3a9fced03105a6ec77869c5b61ae575ee1aca3bc44');">download</a></td></tr><tr><td>2021-06-10 17:22:59 UTC</td><td>PHOTO</td><td><a href="javascript:downloadMemories('https://app.snapchat.com/dmd/memories?uid=6892f0c6-3693-4641-a3df-90afd91f74d1&sid=6d0f484d-e461-a297-539e-e399b563075b&mid=afdc850e-bec5-de2d-149e-5814aa83d0db&ts=1624744022945&proxy=true&sig=5de17336ead0fe5efede7504a97b258438b29a7920b7fcad43c7f5cfa6dad231');">download</a></td></tr><tr><td>2021-06-10 17:22:46 UTC</td><td>PHOTO</td><td><a href="javascript:downloadMemories('https://app.snapchat.com/dmd/memories?uid=6892f0c6-3693-4641-a3df-90afd91f74d1&sid=5c2c667f-1f79-0d78-17a0-10162b0a418b&mid=547eabd3-0e38-5d86-44f3-506f4d260841&ts=1624744009441&proxy=true&sig=d423186924718baa666ab1467a609d05a5f099b69e458c02f64e73481034deb3');">download</a></td></tr><tr><td>2021-06-10 17:22:41 UTC</td><td>PHOTO</td><td><a href="javascript:downloadMemories('https://app.snapchat.com/dmd/memories?uid=6892f0c6-3693-4641-a3df-90afd91f74d1&sid=3b432f3a-51fb-c981-d94c-6492401586f5&mid=3299b44b-ccba-bdcd-fb6f-bf2c92b0d4a6&ts=1624743980122&proxy=true&sig=39fd520b7a17bf6ef737569e854d34c97ebb7a2a3b922b906cf2b4800d721030');">download</a></td></tr><tr><td>2021-06-10 17:22:34 UTC</td><td>PHOTO</td><td><a href="javascript:downloadMemories('https://app.snapchat.com/dmd/memories?uid=6892f0c6-3693-4641-a3df-90afd91f74d1&sid=dd8dacee-3a72-f1a2-0bdd-c0bc305d5ef8&mid=a5841ee8-bec6-1f5f-f1d1-3c92942c9d40&ts=1624744124777&proxy=true&sig=7a008887d1cc3e1ce256cf4ee9167ba5cd79131e3f9d8cddfd9a7e84be3838d4');">download</a></td></tr><tr><td>2021-06-10 17:22:26 UTC</td><td>PHOTO</td><td><a href="javascript:downloadMemories('https://app.snapchat.com/dmd/memories?uid=6892f0c6-3693-4641-a3df-90afd91f74d1&sid=367859db-8bbe-39f5-f524-fa0e254bc7c2&mid=5020690a-61bf-83ac-3119-31f13eb1f568&ts=1624743975653&proxy=true&sig=ad27cb42efcc2584728bcd7200a0ef0cb32e14b6645ab783cb67ea0621fd412d');">download</a></td></tr><tr><td>2021-06-10 17:22:14 UTC</td><td>PHOTO</td><td><a href="javascript:downloadMemories('https://app.snapchat.com/dmd/memories?uid=6892f0c6-3693-4641-a3df-90afd91f74d1&sid=06563e94-81ac-70d2-8f93-ad4612f86566&mid=cd258356-d146-846b-dfa4-e87c2b845068&ts=1624743930760&proxy=true&sig=b16034d9358efc15c40afb7bf88eca17f835c4801b78eb99a0ba14058874ee27');">download</a></td></tr><tr><td>2021-05-31 11:48:21 UTC</td><td>PHOTO</td><td><a href="javascript:downloadMemories('https://app.snapchat.com/dmd/memories?uid=6892f0c6-3693-4641-a3df-90afd91f74d1&sid=35f53d26-84d4-640c-dc1e-54fa1c292aba&mid=f8af4d56-716c-2faa-8d22-c1d452fcb150&ts=1624743975653&proxy=true&sig=b62c6eb47092166193292fc411fb454c1660f374402721c96febaf33b06747e6');">download</a></td></tr><tr><td>2021-05-30 11:40:19 UTC</td><td>PHOTO</td><td><a href="javascript:downloadMemories('https://app.snapchat.com/dmd/memories?uid=6892f0c6-3693-4641-a3df-90afd91f74d1&sid=bffed6ad-a22d-6398-a284-a7ad43edc722&mid=4382af83-c006-2519-558c-0e60ba5081db&ts=1624744097438&proxy=true&sig=df846cd4dd89e400f43d95d2ea41afe4f6be265c2f252276ae9cc4f8a80d99ef');">download</a></td></tr><tr><td>2021-05-28 11:15:15 UTC</td><td>PHOTO</td><td><a href="javascript:downloadMemories('https://app.snapchat.com/dmd/memories?uid=6892f0c6-3693-4641-a3df-90afd91f74d1&sid=5bdf2b28-655d-1f89-d07e-ae6b69e8db38&mid=c2569051-5b0c-1184-1a70-e7b9dc397a06&ts=1624744009441&proxy=true&sig=bca0eb19d5daeacd0771d4ca831cb61b44fc08d14e86913e2c8b37701ef2df65');">download</a></td></tr><tr><td>2021-05-28 10:19:20 UTC</td><td>PHOTO</td><td><a href="javascript:downloadMemories('https://app.snapchat.com/dmd/memories?uid=6892f0c6-3693-4641-a3df-90afd91f74d1&sid=6e7942fa-0b36-b337-f422-034f14976507&mid=0d4583ce-662f-c8c0-d6f5-55191fc2bf6d&ts=1624744024800&proxy=true&sig=260f00f48075a94eb05ff73a104d27dd521d3b2704a29220967f22d98710fc12');">download</a></td></tr><tr><td>2021-05-28 10:19:11 UTC</td><td>PHOTO</td><td><a href="javascript:downloadMemories('https://app.snapchat.com/dmd/memories?uid=6892f0c6-3693-4641-a3df-90afd91f74d1&sid=0091ec21-3f44-2953-33da-002e6673efb5&mid=4b289902-1069-1484-7896-1c8a84211964&ts=1624743925923&proxy=true&sig=04b502e034523dc5d1d3dfba04e248510ac0497d450c0abf0304c606861861c9');">download</a></td></tr><tr><td>2021-05-28 10:18:55 UTC</td><td>PHOTO</td><td><a href="javascript:downloadMemories('https://app.snapchat.com/dmd/memories?uid=6892f0c6-3693-4641-a3df-90afd91f74d1&sid=400d25ae-9d90-c9ef-ecab-baa42126c825&mid=506f30c5-fb6d-4706-cca2-f8d0ce219f83&ts=1624743982940&proxy=true&sig=eddd43fd437487be0819b96c229fdb949f21fac2f9b41acd6a083f10ee0fc6ec');">download</a></td></tr><tr><td>2021-05-28 10:18:33 UTC</td><td>PHOTO</td><td><a href="javascript:downloadMemories('https://app.snapchat.com/dmd/memories?uid=6892f0c6-3693-4641-a3df-90afd91f74d1&sid=27eff7a0-c58e-e9e7-081c-5fa2f2b2f846&mid=1b6dff22-81cd-e398-9e4c-403977c41a98&ts=1624743963586&proxy=true&sig=86b5d770f21e13b8165241e5fc20918a942fb91c407d278e19fc8d8f4fcb8672');">download</a></td></tr><tr><td>2021-05-28 10:18:10 UTC</td><td>PHOTO</td><td><a href="javascript:downloadMemories('https://app.snapchat.com/dmd/memories?uid=6892f0c6-3693-4641-a3df-90afd91f74d1&sid=9b10bb49-64bc-547a-108d-6aaf8feb017e&mid=f480abf6-2838-1245-e907-0cd9567ee992&ts=1624744066561&proxy=true&sig=143257a29050037a1a1f3e25752045160e7f5a79f069261b340019bd36fc60b9');">download</a></td></tr><tr><td>2021-05-28 10:17:56 UTC</td><td>PHOTO</td><td><a href="javascript:downloadMemories('https://app.snapchat.com/dmd/memories?uid=6892f0c6-3693-4641-a3df-90afd91f74d1&sid=50be37c2-8d0a-b74e-2be4-363bf5978646&mid=842d7bd9-a489-8455-2fd4-e0c1740259a9&ts=1624743999391&proxy=true&sig=64c67864f6384b33ceffb865d149f50e262485ac9dbc7db06e5aa314f12b1456');">download</a></td></tr><tr><td>2021-05-28 10:17:49 UTC</td><td>PHOTO</td><td><a href="javascript:downloadMemories('https://app.snapchat.com/dmd/memories?uid=6892f0c6-3693-4641-a3df-90afd91f74d1&sid=a780e93a-2e97-fcf3-ed0c-e7f9c1afdbf2&mid=ac8813dd-b697-4717-1c65-27442485f262&ts=1624744076984&proxy=true&sig=b4b5e20f745507e0e1451163141fef32235d479fd945455cf33cc06550de4c4f');">download</a></td></tr><tr><td>2021-05-28 10:17:44 UTC</td><td>PHOTO</td><td><a href="javascript:downloadMemories('https://app.snapchat.com/dmd/memories?uid=6892f0c6-3693-4641-a3df-90afd91f74d1&sid=a30e7150-9861-7c09-bc3f-38f56b2d6915&mid=ae8c4b89-e4d2-69b3-3f90-e7d10c49f228&ts=1624744074297&proxy=true&sig=e51ae2e34ad1a6c00bc378cd11f6453ddcd056f2b6d0c328a29e573133bfd25a');">download</a></td></tr><tr><td>2021-05-28 10:17:37 UTC</td><td>PHOTO</td><td><a href="javascript:downloadMemories('https://app.snapchat.com/dmd/memories?uid=6892f0c6-3693-4641-a3df-90afd91f74d1&sid=1664e680-c1e1-8415-32f0-565ffb6a32ad&mid=53bfcddd-6cd1-3b1c-6553-ba4475122008&ts=1624743948126&proxy=true&sig=5c5583992695767ed6f3dc33ee5c35bdcb26f45b68d4c21a8c21c158dedb925d');">download</a></td></tr><tr><td>2021-05-23 15:26:46 UTC</td><td>PHOTO</td><td><a href="javascript:downloadMemories('https://app.snapchat.com/dmd/memories?uid=6892f0c6-3693-4641-a3df-90afd91f74d1&sid=396aeb74-365d-fa97-b4c7-2cf75f0c77a5&mid=ecca93af-cdef-629d-fb23-4607108e759c&ts=1624743978377&proxy=true&sig=a40856ccbe960e2671b45c270333c0a9648a118c5d700d3bbdda758ee805e753');">download</a></td></tr><tr><td>2021-05-20 17:51:44 UTC</td><td>PHOTO</td><td><a href="javascript:downloadMemories('https://app.snapchat.com/dmd/memories?uid=6892f0c6-3693-4641-a3df-90afd91f74d1&sid=bec9fab5-daf1-d323-36c4-15c7643ad875&mid=56b00399-3f9f-8acd-69f9-5d112860a128&ts=1624744097436&proxy=true&sig=3369d933e7c1d986866afd879d74bd297506f6b9220cd10bf292db21813fbe47');">download</a></td></tr><tr><td>2021-05-20 17:51:31 UTC</td><td>PHOTO</td><td><a href="javascript:downloadMemories('https://app.snapchat.com/dmd/memories?uid=6892f0c6-3693-4641-a3df-90afd91f74d1&sid=82859274-c2bf-f2ca-31c9-efe9b71e8bfd&mid=f56f5043-2b2e-447e-96bb-73fb2c416a29&ts=1624744043195&proxy=true&sig=ed81417940fa41d2cc840e450c91d946679992651a3b72b614b5429f84e4d1af');">download</a></td></tr><tr><td>2021-05-20 17:51:19 UTC</td><td>PHOTO</td><td><a href="javascript:downloadMemories('https://app.snapchat.com/dmd/memories?uid=6892f0c6-3693-4641-a3df-90afd91f74d1&sid=be492a17-5de7-abd1-f810-74b7061087f7&mid=3fd3baae-434d-faa6-00f2-1e29e04c36ef&ts=1624744095515&proxy=true&sig=d543364d77321a289cb466b1a3a736a34ea51b8da6224df9326572e66b5f38c4');">download</a></td></tr><tr><td>2021-05-20 17:51:12 UTC</td><td>PHOTO</td><td><a href="javascript:downloadMemories('https://app.snapchat.com/dmd/memories?uid=6892f0c6-3693-4641-a3df-90afd91f74d1&sid=98335033-4642-742c-98b5-57b75d1ab434&mid=7894814e-d04c-740c-ff97-0f3f329b6db5&ts=1624744064702&proxy=true&sig=58c17b58568287f30407df63725a43af379c7c5476063f15267849422fa750ed');">download</a></td></tr><tr><td>2021-05-20 17:51:05 UTC</td><td>PHOTO</td><td><a href="javascript:downloadMemories('https://app.snapchat.com/dmd/memories?uid=6892f0c6-3693-4641-a3df-90afd91f74d1&sid=2e0d9c26-57d6-c27e-809f-b27323f774c8&mid=b553d5e2-e226-2a90-5166-7aa8eb168d0b&ts=1624743968549&proxy=true&sig=c6060340db17c81295cfaaf406842787f895f77acd6615ddd6154029b270f12d');">download</a></td></tr><tr><td>2021-05-20 17:50:59 UTC</td><td>PHOTO</td><td><a href="javascript:downloadMemories('https://app.snapchat.com/dmd/memories?uid=6892f0c6-3693-4641-a3df-90afd91f74d1&sid=5e482ec0-70e7-f7c3-75e5-1946760a88a4&mid=ab15b93e-cd44-4f48-c484-c418dbe3c503&ts=1624744011062&proxy=true&sig=7bfe87aaf1d7006f1ba73b210b56cfc3df7e5f311735e0a404a7ba9e5e59dbbd');">download</a></td></tr><tr><td>2021-05-20 17:50:54 UTC</td><td>PHOTO</td><td><a href="javascript:downloadMemories('https://app.snapchat.com/dmd/memories?uid=6892f0c6-3693-4641-a3df-90afd91f74d1&sid=6229f78a-6b2e-7db5-8e09-d71ba9869c54&mid=67ad8453-fe30-081b-51c8-615db3381c15&ts=1624744014655&proxy=true&sig=9463f57a1a442b2a5cf39c7f36ccc786214b3df8d170d80da3522f8a3adf7afb');">download</a></td></tr><tr><td>2021-05-19 00:44:52 UTC</td><td>VIDEO</td><td><a href="javascript:downloadMemories('https://app.snapchat.com/dmd/memories?uid=6892f0c6-3693-4641-a3df-90afd91f74d1&sid=e203c6bd-a215-0a96-92ff-1644a2137eda&mid=a62387af-00b0-8a47-8ad9-a42430ba1f8c&ts=1624744127256&proxy=true&sig=d6a8befb3ea4e2105c9781d173dcd1ac604fd82de44a72d1ee7406738615199b');">download</a></td></tr><tr><td>2021-05-19 00:43:52 UTC</td><td>VIDEO</td><td><a href="javascript:downloadMemories('https://app.snapchat.com/dmd/memories?uid=6892f0c6-3693-4641-a3df-90afd91f74d1&sid=ed98d7b8-deba-0387-7c1d-d5820380cc1d&mid=d86c2230-c16c-7b0b-34db-90a169a463ce&ts=1624744137845&proxy=true&sig=033945400114327f4ea81b4f73d95a97048a75ddc1ab5b6e1778e6373470d869');">download</a></td></tr><tr><td>2021-05-19 00:42:51 UTC</td><td>VIDEO</td><td><a href="javascript:downloadMemories('https://app.snapchat.com/dmd/memories?uid=6892f0c6-3693-4641-a3df-90afd91f74d1&sid=cf6f1473-90df-980e-d938-a38c5dc18218&mid=01dc2d96-f908-101c-3620-caa676f74bf6&ts=1624744110986&proxy=true&sig=a8405f5aebe8890fb7bc44d661e84c3df10491e48a35d19a45e7cf5ba42dbbf7');">download</a></td></tr><tr><td>2021-05-19 00:41:35 UTC</td><td>VIDEO</td><td><a href="javascript:downloadMemories('https://app.snapchat.com/dmd/memories?uid=6892f0c6-3693-4641-a3df-90afd91f74d1&sid=d220cc56-5e11-063a-f4df-972590e41f67&mid=d7481443-bd28-c002-7754-4a805c8f4741&ts=1624744113159&proxy=true&sig=8596c9cbfa9f96e34e2166b258731ffc7125c94db6db9bebaaa9a87e2d6f4238');">download</a></td></tr><tr><td>2021-05-19 00:40:57 UTC</td><td>VIDEO</td><td><a href="javascript:downloadMemories('https://app.snapchat.com/dmd/memories?uid=6892f0c6-3693-4641-a3df-90afd91f74d1&sid=d548540d-69db-e881-9631-af60ec03264f&mid=444cac02-f0be-3304-2a5f-3d93efa0900f&ts=1624744117012&proxy=true&sig=c987ddbf7fdb5ec377b5c6222ed58805c62ba71be2465a9d5dec50921a4c94fb');">download</a></td></tr><tr><td>2021-05-18 22:09:50 UTC</td><td>PHOTO</td><td><a href="javascript:downloadMemories('https://app.snapchat.com/dmd/memories?uid=6892f0c6-3693-4641-a3df-90afd91f74d1&sid=fe7214d4-4b1b-c14b-7219-5764799048e4&mid=a370aabb-a957-d975-82ec-b82631bc5285&ts=1624744150790&proxy=true&sig=fe2e2e8d18d5acbd68e9a304430101528bf500064f7b988799528e903425b164');">download</a></td></tr><tr><td>2021-05-18 20:57:33 UTC</td><td>PHOTO</td><td><a href="javascript:downloadMemories('https://app.snapchat.com/dmd/memories?uid=6892f0c6-3693-4641-a3df-90afd91f74d1&sid=26ee82af-6aa3-fc26-6af6-92be269f8a54&mid=dfed3122-0a9f-03be-d5cd-a40f9ec50fc5&ts=1624743961648&proxy=true&sig=4de59a67b05d8ac6a41b9f424052fb4722e576a6bcaf50d1586a3c7a6bdef612');">download</a></td></tr><tr><td>2021-05-16 10:10:47 UTC</td><td>PHOTO</td><td><a href="javascript:downloadMemories('https://app.snapchat.com/dmd/memories?uid=6892f0c6-3693-4641-a3df-90afd91f74d1&sid=67a8be0c-2974-6b5a-72f7-aa829c388106&mid=7b038706-ce42-c44d-7dbc-e500c86443c1&ts=1624744018422&proxy=true&sig=38f8d77e9d1c65ee08ac5f1067671cb2ee4a68a3b47d02b7154befdce750dd96');">download</a></td></tr><tr><td>2021-05-15 10:40:34 UTC</td><td>VIDEO</td><td><a href="javascript:downloadMemories('https://app.snapchat.com/dmd/memories?uid=6892f0c6-3693-4641-a3df-90afd91f74d1&sid=d6c90c16-b34a-bc8e-9956-624c9874a755&mid=24a1e156-fd82-d5ca-f933-705974bf1fac&ts=1624744118661&proxy=true&sig=6f9f96ecb146a729ddad63956d17b5059201b371489b5d3e1d78be95d74b03c6');">download</a></td></tr><tr><td>2021-05-15 10:40:28 UTC</td><td>PHOTO</td><td><a href="javascript:downloadMemories('https://app.snapchat.com/dmd/memories?uid=6892f0c6-3693-4641-a3df-90afd91f74d1&sid=cbec38ae-f263-8e5c-303a-0b3470d90d9b&mid=4b545d18-7a6c-00dd-02d0-0866491976e9&ts=1624744107689&proxy=true&sig=bc2bbcfd51f22c8c25d64e68763563960d1bb8e6c2609f678635cf8e0504501d');">download</a></td></tr><tr><td>2021-05-15 10:40:23 UTC</td><td>PHOTO</td><td><a href="javascript:downloadMemories('https://app.snapchat.com/dmd/memories?uid=6892f0c6-3693-4641-a3df-90afd91f74d1&sid=b66a9598-e932-5f54-6e71-91a9790bf2ea&mid=c1ef6dbc-a247-718f-b56d-3623b44d3f66&ts=1624744089729&proxy=true&sig=74877a3aa3f25552c4af374eea5ef2ec887fe3c3420283df04c04b648f70c1c6');">download</a></td></tr><tr><td>2021-05-15 10:40:11 UTC</td><td>PHOTO</td><td><a href="javascript:downloadMemories('https://app.snapchat.com/dmd/memories?uid=6892f0c6-3693-4641-a3df-90afd91f74d1&sid=da174e0c-1c29-b441-91d1-57be5db087f7&mid=f2647838-a59e-4834-ddbf-8e146e6a32e4&ts=1624744120461&proxy=true&sig=2be4ef591702d3904f01e5d564759522bdc8791474a7bc5860c5469bf890016c');">download</a></td></tr><tr><td>2021-05-15 10:40:05 UTC</td><td>PHOTO</td><td><a href="javascript:downloadMemories('https://app.snapchat.com/dmd/memories?uid=6892f0c6-3693-4641-a3df-90afd91f74d1&sid=87501ba6-3985-ed61-901a-aa036129c5f1&mid=932081a1-d238-bdef-3b23-76ced7fe90f8&ts=1624744048402&proxy=true&sig=c03
