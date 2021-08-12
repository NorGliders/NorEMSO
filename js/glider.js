// SCRIPT FOR GLIDER.HTML
// $("#hideData").hide();
var fvars = [ 'm_depth', 'm_de_oil_vol', 'm_battpos', 'm_pitch', 'm_heading', 'm_battpos_Vs_m_pitch', 'c_heading_Vs_m_heading', 'm_fin', 'm_roll'] //, 'm_digifin_leakdetect_reading', 'm_roll',]; 
var svars = [ 'profile_sci_water_temp', 'profile_salinity', 'profile_potential_density', 'profile_dissolved_oxygen', 'profile_sci_flbbcd_chlor_units', 'profile_sci_flbbcd_cdom_units', 'profile_sci_flbbcd_bb_units', 'profile_sci_bsipar_par'];
//var svars = [ 'profile_sci_water_temp', 'profile_salinity', 'profile_potential_density', 'profile_dissolved_oxygen', 'profile_sci_bb3slo_b470_scaled','profile_sci_bb3slo_b532_scaled','profile_sci_bb3slo_b660_scaled' ];

var svars_2 = [ 'time_scatter_sci_water_temp', 'time_scatter_salinity', 'time_scatter_potential_density', 'time_scatter_dissolved_oxygen', 'time_scatter_sci_flbbcd_chlor_units', 'time_scatter_sci_flbbcd_cdom_units', 'time_scatter_sci_flbbcd_bb_units', 'time_scatter_sci_bsipar_par'];
//var svars_2 = [ 'time_scatter_sci_water_temp', 'time_scatter_salinity', 'time_scatter_potential_density', 'time_scatter_dissolved_oxygen', 'time_scatter_sci_bb3slo_b470_scaled','time_scatter_sci_bb3slo_b532_scaled','time_scatter_sci_bb3slo_b660_scaled'];

var svars_seg = [ 'CTD_profile', 'CTD_scatter', 'profile-salinity','profile-sci_water_temp', 'profile-dissolved_oxygen', 'BBFLCD_profile', 'profile-sci_flbbcd_chlor_units', 'profile-sci_flbbcd_cdom_units', 'profile-sci_flbbcd_bb_units', 'profile-sci_bsipar_par' ];
//var svars_seg = [ 'CTD_profile', 'CTD_scatter', 'profile-salinity','profile-sci_water_temp', 'profile-dissolved_oxygen', 'profile-sci_bb3slo_b470_scaled', 'profile-sci_bb3slo_b532_scaled','profile-sci_bb3slo_b660_scaled',];

var svars_seg_2 = [ 'CTD_scatter' ];
var tvars = [ 'battery_diagnostics', 'm_battery', 'm_coulomb_amphr_total','m_coulomb_amphr', 'm_lithium_battery_relative_charge','srf_dac','speed','m_final_water_vx','m_final_water_vy','u_use_current_correction','m_vacuum','m_leakdetect_voltage_forward','m_leakdetect_voltage','m_digifin_leakdetect_reading','m_iridium_signal_strength','m_iridium_attempt_num', 'm_tot_num_inflections', 'm_tot_horz_dist','m_last_yo_time','c_autoballast_state'];
console.log('hi 1')
alert('hi 1')


// --- Read JSON ---
$.getJSON("../static/active_gliders_surface.json", function(obj) {  

  console.log('hi 2')
  alert('hi 2')
  var gliderNames = Object.keys(obj.gliders);
  var gliderObj = obj.gliders; 

  // Loop through active gliders
  for (var g in gliderNames) {
      // Insert glider names into nav bar and dropdown button
      var htmlStrDropdown = '<li><a href="gliders.html">' + gliderNames[g] + '</a></li>'
      $('.dropdownGliders').append(htmlStrDropdown);

      var htmlStrDropdown2 = '<li><a href="surfacings.html">' + gliderNames[g] + '</a></li>'
      $('.dropdownGliders2').append(htmlStrDropdown2);

      var htmlStrDropdown3 = '<li><a href="segments.html">' + gliderNames[g] + '</a></li>'
      $('.dropdownGliders3').append(htmlStrDropdown3);


      	// Make first glider default
        if(g==0){
			var gliderDropdownStr = ('<li><a>' + gliderNames[g] + '</a></li>'); 
			$('.gliderBtn').html(gliderNames[g] + ' <span class="caret"></span>');
			$('.dropdownSelectGliders').append(gliderDropdownStr);
			$('.dropdownSelectGliders li').last().addClass("selectGlider1")
			$('.dropdownSelectGliders li').last().addClass("selected1")
			$('.dropdownSelectGliders li').last().addClass("preselected1")
		}
		else {
			var gliderDropdownStr = ('<li><a>' + gliderNames[g] + '</a></li>');
			$('.dropdownSelectGliders').append(gliderDropdownStr);
			$('.dropdownSelectGliders li').last().addClass("selectGlider1")
		}  
	 }

	// Display plots of new period
	// Surface
	var $list = $('<div />');
	$list.addClass('plot_data'); 
	$list.append( $('<img class="img-responsive center-block" />').attr('src', tracks_name ) );
	var tracks_name = ('gliders/' + gliderNames[0]  + '/surface/GliderTrack-LastSegment.png');
	//$list.append( $('<img class="img-responsive center-block" />').attr('src', tracks_name ) ); 
	$(tvars ).each(function(i, myvar) { 
		var png_src = ('gliders/' + gliderNames[0] + '/surface/' + myvar + '.png');
		$list.append( $('<img class="img-responsive center-block" />').attr('src', png_src ) );
	});
	$('#surface').append( $list );

	// Flight
	var $list = $('<div />');
	$list.addClass('plot_data'); 
	$(fvars ).each(function(i, myvar) { 
		var png_src = ('gliders/' + gliderNames[0] + '/eng_transects/LastSegment-' + myvar + '.png');
		$list.append( $('<img class="img-responsive center-block" />').attr('src', png_src ) );
	});
	$('#flight').append( $list );

	// Science
	var $list = $('<div />');
	$list.addClass('plot_data'); 
	$(svars_seg ).each(function(i, myvar) { 
		var png_src = ('gliders/' + gliderNames[0] + '/sci_transects/LastSegment-' + myvar + '.png');
		$list.append( $('<img class="img-responsive center-block" />').attr('src', png_src ) );
	});
	$('#science').append( $list );

	// Science 2 - Depth Profile
	var $list = $('<div />');
	$list.addClass('plot_data'); 
	$(svars_seg_2 ).each(function(i, myvar) { 
		var png_src = ('gliders/' + gliderNames[0] + '/sci_transects/LastSegment-' + myvar + '.png');
		$list.append( $('<img class="img-responsive center-block" />').attr('src', png_src ) );
	});
	$('#depthProfile').append( $list );
});	

// --- Clear current time period by deleting class "selected" then apply this to new selection ---
$(".selectGlider").click(function(){
		var selText = $(this).text();
		$('.preselected').removeClass('preselected'); 
		$(this).addClass("preselected");
		$(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
});

// --- Clear current glider by deleting class "selected1" then apply this to new selection ---
$('body').on('click', '.selectGlider1', function () {
	var selText = $(this).text();
	$('.preselected1').removeClass('preselected1'); 
	$(this).addClass("preselected1")
	$(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
});

// --- Display button function ---
$("#displayBtn").click(function(){
	// Get newly selected time period
	var thisTime = $('.timeBtn').text().replace(/\s+/g, '');
	// Get newly selected  glider
	var thisGlider = $('.gliderBtn').text().trim();
	// Old time 
	var oldTime = $('.selected').text().replace(/\s+/g, '');
	// Old glider
	var oldGlider = $('.selected1').text().trim();

	// Only proceed if these these both aren't the current settings
	if ((thisGlider != oldGlider) | (thisTime != oldTime)) {

		// Remove selected classes and apply to new selections
		$('.selected').removeClass('selected'); 
		$('.selected1').removeClass('selected1');
		$('.preselected').addClass("selected");
		$('.preselected1').addClass("selected1");

		// Delete current plots
		$(".plot_data").remove();

		// Add new plots
		// Surface
		var $list = $('<div />');
		$list.addClass('plot_data'); 
		if (thisTime == 'LastSegment') {
			};
		var tracks_name = ('gliders/' + thisGlider  + '/surface/GliderTrack-' + thisTime + '.png');
		//$list.append( $('<img class="img-responsive center-block" />').attr('src', tracks_name ) ); %%CHANGE 6-MAR-2019
		$(tvars ).each(function(i, myvar) { 
			var png_src = ('gliders/' + thisGlider + '/surface/' + myvar + '.png');
			$list.append( $('<img class="img-responsive center-block" />').attr('src', png_src ) );
		});
		$('#surface').append( $list );

		// Flight
		var $list = $('<div />');
		$list.addClass('plot_data'); 
		if (thisTime == 'LastSegment') {
			};
		$(fvars ).each(function(i, myvar) { 
			var png_src = ('gliders/' + thisGlider + '/eng_transects/' + thisTime + '-' + myvar + '.png');
			$list.append( $('<img class="img-responsive center-block" />').attr('src', png_src ) );
		});
		$('#flight').append( $list );

    		// Science
    		var $list = $('<div />');
    		$list.addClass('plot_data'); 
    		if (thisTime == 'LastSegment') {
          	$(svars_seg ).each(function(i, myvar) { 
      		var png_src = ('gliders/' + thisGlider + '/sci_transects/' + thisTime + '-' + myvar + '.png');
      		$list.append( $('<img class="img-responsive center-block" />').attr('src', png_src ) );
    		});
      		} else {
    		$(svars ).each(function(i, myvar) { 
      		var png_src = ('gliders/' + thisGlider + '/sci_transects/' + thisTime + '-' + myvar + '.png');
      		$list.append( $('<img class="img-responsive center-block" />').attr('src', png_src ) );
    		});
    		};
    		$('#science').append( $list );

    		// Science 2 - Depth Profile
    		var $list = $('<div />');
    		$list.addClass('plot_data'); 
    		if (thisTime == 'LastSegment') {
      		$(svars_seg_2 ).each(function(i, myvar) { 
      		var png_src = ('gliders/' + thisGlider + '/sci_transects/' + thisTime + '-' + myvar + '.png');
      		$list.append( $('<img class="img-responsive center-block" />').attr('src', png_src ) );
    		});
      		} else {
    		$(svars_2 ).each(function(i, myvar) { 
      		var png_src = ('gliders/' + thisGlider + '/sci_transects/' + thisTime + '-' + myvar + '.png');
      		$list.append( $('<img class="img-responsive center-block" />').attr('src', png_src ) );
    		});
    		};
    		$('#depthProfile').append( $list );
  	}
});




