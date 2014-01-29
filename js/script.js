$(document).ready(function(){

	$("#search-options").hide();
	$(".more-info").hide();
	$("#accounting-category-links").hide();
	$("#conctruction-category-links").hide();
	$("#government-category-links").hide();
	$("#create-profile-step2").hide();
	$("#create-employer-profile-step2").hide();
	
	$("#search-form-options").show();
	$(".more-info-button").show();
	$("#accounting-category").show();
	$("#construction-category").show();
	$("#government-category").show();

	$('#search-form-options').click(function(){
		$("#search-options").slideToggle();
	});
	
	$('#accounting-category').click(function(){
		$("#accounting-category-links").slideToggle();
	});
	
	$('#construction-category').click(function(){
		$("#conctruction-category-links").slideToggle();
	});

	$('#government-category').click(function(){
		$("#government-category-links").slideToggle();
	});
	
	$('.more-info-button').click(function(){
		$(this).next(".more-info").slideToggle();
	});
	
	$('.close-info').click(function(){
		$(this).parent().slideToggle();
	});
	
	$('#create-profile-step2-link').click(function(){
		$("#create-profile-step1").hide();
		$("#create-profile-step2").show();
	});
	
	$('#create-profile-employer-step2-link').click(function(){
		$("#create-employer-profile-step1").hide();
		$("#create-employer-profile-step2").show();
	});
	
	$('#add-next-job-button').click(function(){
		$('#form-clone').clone().appendTo('#form-clone');
	});
	
	$( "#job-seeker-form" ).dialog({
            width: 750,
            height:600,
			autoOpen: false
        });
	
	$( "#job-seeker-button" ).click(function() {
                $( "#job-seeker-form" ).dialog( "open" );
            });
			
	$( "#empleyer-form" ).dialog({
            width: 750,
            height:600,
			autoOpen: false
        });
	
	$( "#employer-button" ).click(function() {
            $( "#empleyer-form" ).dialog( "open" );
        });
		
	$( "#calendar" ).datepicker();
	$( "#date-from" ).datepicker();
	$( "#date-to" ).datepicker();
	
	$("#subcat").chained("#cat");
});