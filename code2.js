google.charts.load("current", {"packages":["corechart","scatter"]});

google.setOnLoadCallback(drawChart);
 
 var myChart = document.getElementById("chart_div");
 var but_gen = document.getElementById("grafgen");
 var but_lim = document.getElementById("butlim");
 var but_integral = document.getElementById("integral");
 var but_deriv = document.getElementById("butderiv");
 var e = 2.718281;
 
 var s00 = 0 , s0 = 0, s1 = 0,s2 = 0,s3 = 0 ;
 
		var data = [ ["Indicele","Valoare"], [0,0] ];

       function drawChart( maxval_h = 25, maxval_v = 25 , minval_h = 1 , minval_v = 0) {
        var data_obj = google.visualization.arrayToDataTable(data);

        var options = {
			
          title: "Graficul funcției f(x)",
          hAxis: {title: "X", minValue: minval_h, maxValue: maxval_h},
          vAxis: {title: "Y", minValue: minval_v, maxValue: maxval_v},
		  pointSize: 6,
          legend: "none"
        };

        var chart = new google.visualization.ScatterChart(myChart);

        chart.draw(data_obj, options);
		
	  }
	   var x=0;
	  function updateChart(formula = "", start=-10, finish=10){
		 

		var a = 0
		
		var max_a = -999999, min_a = 999999;
		
		empty_data();
		
		var r = (finish-start)/200;
		
		for(var j=start;j<=finish;j+=0.05){
			
			x=j;
			a=f(formula);
			data.push([j,a]);
			
					
			if( a > max_a ) max_a = a;
			
			if ( a < min_a ) min_a = a;
				
				
		}
		drawChart(finish,max_a,start,min_a);
	  }
	  
	
	  function f(formula){
		
		return eval(formula);
		
	  }
	  
	  function sqrt(x){
		  
		  return Math.sqrt(x);
		  
	  }
	  
	  function pow(x,n){
		  
		return Math.pow(x,n);
		
	  }
	  
	  function sin(x){
		  
		 return Math.sin(x);
		 
	  }
	  
	  function cos(x){
	  
		return Math.cos(x);

	  }
	  
	  function tg(x){
		
		return sin(x)/cos(x);	
		
	  }
	  
	  function ctg(x){
		  
		return pow(tg(x),-1);
		
	  }
	  
	  function log(x,y){
		  
		return Math.log(x)/Math.log(y);
		
	  }
	  
	  function abs(x) {
			return Math.abs(x);
	  }
	  function ln(x){
		return log(x,2.71828);
	  }
	  
	  function empty_data(){
		
		while(data.length > 1 ) data.pop();
		
	  }
	  
	
	  

but_gen.onclick = function(event) {
	event.preventDefault();
	var formula = document.getElementById("formula").value;
	var start = eval(document.getElementById("s").value);
	var finish = eval(document.getElementById("f").value);
	updateChart(formula,start,finish);
	
	
}	

but_lim.onclick = function(event) {
	event.preventDefault();
	var formula = document.getElementById("formula").value;
	var lim = document.getElementById("lim").value;
	if( lim === "inf" || lim === "infinit" )
		lim = 999999999999;
	else if( lim === "-inf" || lim === "-infinit" )
		lim = -99999999999;
	else
		lim = eval(lim);
	var plim = document.getElementById("plim");
	x = lim+0.0000000001;
	var val_lim=f(formula);
	val_lim=(Math.round(val_lim * 100) / 100).toFixed(2);
	plim.innerHTML=val_lim;
}

but_integral.onclick = function(event) {
	event.preventDefault();
	var formula = document.getElementById("formula").value;
	var a = eval(document.getElementById("a").value);
	var b = eval(document.getElementById("b").value);
	var rez_integral = document.getElementById("rez_integral");
	var c = 1000000;
	var s = 0;
	
	for(var i = 1; i<=c; i++){
		x = a + i*(b-a)/c;
		s += f(formula);
	}
	
	s *= (b-a)/c;
	s = (Math.round(s * 100) / 100).toFixed(2);
	rez_integral.innerHTML = s;
	
	
	
}

but_deriv.onclick = function(event) {
	event.preventDefault();
	var formula = document.getElementById("formula").value;
	var deriv = eval(document.getElementById("deriv").value);
	var rez_deriv = document.getElementById("rez_deriv");
	var b = 0.0000000001;
	x = deriv;
	var f1 = f(formula);
	x+=b;
	var f2 = f(formula);
	var val_deriv = (f2-f1)/b;
	
	val_deriv = (Math.round(val_deriv * 100) / 100).toFixed(2);
	rez_deriv.innerHTML = val_deriv;
}


$(document).ready(function(){
  $("#instructiuni").click(function(){
    $("#instruct_div").slideToggle();
	
	if(s00%2==0)
		$("#arrow00").css("transform","rotate(180deg)");
	else
		$("#arrow00").css("transform","rotate(0deg)");
	s00++;
  });
});

$(document).ready(function(){
  $("#parametrii").click(function(){
    $("#par_div").slideToggle();
	
	if(s0%2==0)
		$("#arrow0").css("transform","rotate(180deg)");
	else
		$("#arrow0").css("transform","rotate(0deg)");
	s0++;
  });
});
 
$(document).ready(function(){
  $("#calcul_limite").click(function(){
    
	$("#lim_div").slideToggle();
	
	if(s1%2==0)
		$("#arrow1").css("transform","rotate(180deg)");
	else
		$("#arrow1").css("transform","rotate(0deg)");
	s1++;
	
  });
});

$(document).ready(function(){
  $("#calcul_integrale").click(function(){
    $("#integral_div").slideToggle();
	
	if(s3%2==0)
		$("#arrow3").css("transform","rotate(180deg)");
	else
		$("#arrow3").css("transform","rotate(0deg)");
	s3++;
	
  });
});

$(document).ready(function(){
  $("#calcul_derivate").click(function(){
    $("#deriv_div").slideToggle();
	
	if(s2%2==0)
		$("#arrow2").css("transform","rotate(180deg)");
	else
		$("#arrow2").css("transform","rotate(0deg)");
	s2++;
  });
});




