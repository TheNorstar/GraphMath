
var s0 = 0, s1 = 0, s2 = 0, s3 = 0, s4 = 0, s5 = 0;

$(document).ready(function(){
  $("#introducere").click(function(){
    
	$("#intro_div").slideToggle();
	
	if(s0%2==0)
		$("#arrow").css("transform","rotate(180deg)");
	else
		$("#arrow").css("transform","rotate(0deg)");
	s0++;
	
  });
  
});

$(document).ready(function(){
  $("#site_map").click(function(){
    
	$("#map_div").slideToggle();
	
	if(s1%2==0)
		$("#arrow1").css("transform","rotate(180deg)");
	else
		$("#arrow1").css("transform","rotate(0deg)");
	s1++;
	
  });
  
});

$(document).ready(function(){
  $("#contact").click(function(){
    
	$("#contact_div").slideToggle();
	
	if(s2%2==0)
		$("#arrow2").css("transform","rotate(180deg)");
	else
		$("#arrow2").css("transform","rotate(0deg)");
	s2++;
	
  });
  
});

$(document).ready(function(){
  $("#home").click(function(){
    
	$("#home_div").slideToggle();
	
	if(s3%2==0)
		$("#arrow3").css("transform","rotate(180deg)");
	else
		$("#arrow3").css("transform","rotate(0deg)");
	s3++;
	
  });
  
});

$(document).ready(function(){
  $("#sir").click(function(){
    
	$("#sir1_div").slideToggle();
	
	if(s4%2==0)
		$("#arrow4").css("transform","rotate(180deg)");
	else
		$("#arrow4").css("transform","rotate(0deg)");
	s4++;
	
  });
  
});

$(document).ready(function(){
  $("#func").click(function(){
    
	$("#func_div").slideToggle();
	
	if(s5%2==0)
		$("#arrow5").css("transform","rotate(180deg)");
	else
		$("#arrow5").css("transform","rotate(0deg)");
	s5++;
	
  });
  
});



