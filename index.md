
<!DOCTYPE html>
<html lang="en">
<head runat="server">
<asp:ContentPlaceHolder ID="htmlHead" runat="server" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta http-equiv="refresh" content="600" />
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Expires" content="0" />

<meta http-equiv="X-UA-Compatible" content="IE=edge">

<meta name="viewport" content="width = device-width, initial-scale = 1">
<title>Active Deployments</title>



<style>

	.btn-group{
    margin-bottom: 20px;
    }

    #mapViewDiv {
    width: 100%;
    height: 350px;
    margin: 0;
    padding-bottom: 0;
    position: relative;
    }

    h1 {
      margin-top: 15px;
      margin-bottom: 15px;
    }

    p {
      margin-top: 20px;
      margin-left: 20px;  
      color: #8891a0;
      font-size: 90%;
    }

    #meta {
      margin-top: 20px;
      margin-bottom: 20px;
    }

    .container img{
    display: block;
    padding-top: 20px;
    padding-bottom: 20px;
    margin: 0 auto;
    }

	</style>
</head>
<body class="calcite-nav-top">

<nav class="navbar calcite-navbar navbar-fixed-top calcite-text-light calcite-bg-dark">

<div class="dropdown calcite-dropdown calcite-text-dark calcite-bg-light" role="presentation">
<a class="dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false">
<div class="calcite-dropdown-toggle">
<span class="sr-only">Toggle dropdown menu</span>
<span></span>
<span></span>
<span></span>
<span></span>
</div>
</a>
<ul class="dropdown-menu">
<li><a class="hidden-md hidden-lg" href="index.html"><span class="glyphicon glyphicon-plane"></span> Active Gliders</a></li>
<li><a class="hidden-md hidden-lg" href="delayed_data.html"><span class="glyphicon glyphicon-folder-open"> Archive</a></li>
<li><a class="hidden-md hidden-lg" href="delayed_map.html"><span class="glyphicon glyphicon-map-marker"> Map</a></li>
<li><a role="button" data-target="#panelBasemaps" aria-haspopup="true"><span class="glyphicon glyphicon-th-large"></span> Basemaps</a><li>
<li><a role="button" data-target="#panelAbout" aria-haspopup="true"><span class="glyphicon glyphicon-info-sign"></span> About</a></li>
<li><a role="button" id="calciteToggleNavbar" aria-haspopup="true"><span class="glyphicon glyphicon-fullscreen"></span> Full Map</a></li>
</ul>
</div>

<div class="calcite-title calcite-overflow-hidden">
<a target="" href="index.html">
<img src="css\NIWA_Rev_Hor_2.png" style="cursor: default; height: 35px; margin-top: 2px; margin-right: 5px;">
</a>
<span class="calcite-title-divider"></span>
<span class="calcite-title-main">Ocean Gliders</span>
</div>

<ul class="calcite-nav nav navbar-nav">
<li><a href="index.html" class="hidden-xs hidden-sm" data-tooltip="tip" title="Overview of currently deployed gliders" data-placement="bottom">Active Gliders</a></li>
<li class="active"><a href="gliders.html" class="hidden-xs hidden-sm" data-tooltip="tip" title="View data from currently deployed gliders" data-placement="bottom">Data</a></li>
<li><a href="delayed_data.html" class="hidden-xs hidden-sm" data-tooltip="tip" title="View data from past glider deployments" data-placement="bottom">Archive</a></li>
<li><a href="delayed_map.html" class="hidden-xs hidden-sm" data-tooltip="tip" title="Map of past glider deployments" data-placement="bottom">Map</a></li>
</ul>
</nav>

<div class="calcite-map">
<div id="mapViewDiv"></div>
</div>

<div class="calcite-panels calcite-panels-left calcite-text-light calcite-bg-dark panel-group">

<div id="panelBasemaps" class="panel collapse">
<div id="headingBasemaps" class="panel-heading" role="tab">
<div class="panel-title">
<a class="panel-toggle collapsed" role="button" data-toggle="collapse" href="#collapseBasemaps" aria-expanded="false" aria-controls="collapseBasemaps"><span class="glyphicon glyphicon-th-large" aria-hidden="true"></span><span class="panel-label">Basemaps</span></a>
<a class="panel-close" role="button" data-toggle="collapse" data-target="#panelBasemaps"><span class="esri-icon esri-icon-close" aria-hidden="true"></span></a>
</div>
</div>
<div id="collapseBasemaps" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingBasemaps">
<div class="panel-body">
<select id="selectBasemapPanel" class="form-control">
<option value="oceans" data-vector="oceans" selected="">Oceans</option>
<option value="streets" data-vector="streets-vector">Streets</option>
<option value="satellite" data-vector="satellite">Satellite</option>
<option value="hybrid" data-vector="hybrid">Hybrid</option>
<option value="national-geographic" data-vector="national-geographic">National Geographic</option>
<option value="dark-gray" data-vector="dark-gray-vector">Dark Gray</option>
</select>
</div>
</div>
</div>

<div id="panelAbout" class="panel collapse">
<div id="headingAbout" class="panel-heading" role="tab">
<div class="panel-title">
<a class="panel-toggle" role="button" data-toggle="collapse" href="#collapseAbout" aria-expanded="true" aria-controls="collapseAbout"><span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span><span class="panel-label">About</span></a>
<a class="panel-close" role="button" data-toggle="collapse" tabindex="0" href="#panelAbout"><span class="esri-icon esri-icon-close" aria-hidden="true"></span></a>
</div>
</div>
<div id="collapseAbout" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingAbout">
<div class="panel-body">
<h5>Active Glider Deployments</h5>
<p>This page displays near-real-time data from gliders currently deployed by the University of Bergen.</p>
<p><a href="https://www.uib.no/gfi">Learn more about UIB Ocean Gliders.</a></p>
<p><a href="/cdn-cgi/l/email-protection#80e7ece9e4e5f2f3c0eee9f7e1aee3efaeeefa">Get in touch with us</a></p>
</div>
</div>
</div>
</div>
<div class="container">
<div class="row">
<div class="page-header-title col-lg-6 col-md-6 col-sm-12"><h1 class="text-left">Glider Data</h1></div>
</div>
<div id="plotly"></div>

<div class="row">
<div class="col-lg-12 col-md-12 col-sm-12">
<div class="btn-group">
<button class="btn btn-default dropdown-toggle gliderBtn" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"> <span class="caret"></span>
</button>
<ul class="dropdown-menu dropdownSelectGliders" aria-labelledby="dropdownMenu1">
</ul>
</div>
<div class="btn-group">
<button class="btn btn-default dropdown-toggle timeBtn" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Last Segment <span class="caret"></span>
</button>
<ul class="dropdown-menu " aria-labelledby="dropdownMenu1">
<li class="selectGlider selected preselected"><a>Last Segment</a></li>
<li class="selectGlider"><a>Last 24 Hours</a></li>

<li class="selectGlider"><a>Entire Mission</a></li>
</ul>
</div>
<div class="btn-group">
<button class="btn btn-primary" id="displayBtn" type="button" aria-haspopup="true" aria-expanded="true">Display
</button>
</div>
</div>
</div>
<div class="row">
<div class="col-lg-12 col-md-12 col-sm-12">

<ul class="nav nav-tabs" role="tablist">
<li role="presentation" class="active"><a href="#surface" aria-controls="surface" role="tab" data-toggle="tab">Surface</a></li>
<li role="presentation"><a href="#flight" aria-controls="flight" role="tab" data-toggle="tab">Flight</a></li>
<li role="presentation"><a href="#science" aria-controls="science" role="tab" data-toggle="tab">Science</a></li>
<li role="presentation"><a href="#depthProfile" aria-controls="depthProfile" role="tab" data-toggle="tab">Science</a></li>
</ul>

<div class="tab-content">
<div role="tabpanel" class="tab-pane fade in active" id="surface">
</div>
<div role="tabpanel" class="tab-pane fade" id="flight">
</div>
<div role="tabpanel" class="tab-pane fade" id="science">
</div>
<div role="tabpanel" class="tab-pane fade" id="depthProfile">
</div>
</div>
</div>
</div>
</div>

<div class="panel-footer panel-primary img-rounded">
<p class="text-muted text-right"><br>NorGliders Real-time Glider Data Portal</p>
</div>
</div>

<script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>

<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>

<script src="https://js.arcgis.com/4.5/"></script>

<script src="js/calcitemaps-v0.4.js"></script>

<script type="text/javascript" src="js/gliders.js"></script>

</body>
</html>