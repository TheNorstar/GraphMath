google.charts.load("current", {"packages":["corechart","scatter"]});

google.setOnLoadCallback(drawChart);
 
 var but_arit = document.getElementById("butarit");
 var but_geom = document.getElementById("butgeom");
 var but_sir = document.getElementById("butsir");
 var but_mon = document.getElementById("butmon");
 var but_mar = document.getElementById("butmar");
 var but_con =	document.getElementById("butcon");
 var selector = document.getElementById("select");
 var myChart = document.getElementById("chart_div");
 var content = document.getElementById("aleg");
 var buton1 = document.getElementById("res1");
 var buton2 = document.getElementById("res2");
 var ex1 = document.getElementById("aritex");
 var ex2 = document.getElementById("geomex");
 var ex3 = document.getElementById("sirex1");
 var ex4 = document.getElementById("sirex2");
 var ex5 = document.getElementById("sirex3");
 var ex6 = document.getElementById("sirex4");

var s1 = 0, s2 = 0, s3 = 0, s4 = 0;

		var data = [ ["Indicele","Valoare"], [0,0] ];

       function drawChart( maxval_h = 25, maxval_v = 25 , minval_h = 1 , minval_v = 0) {
		   
        var data_obj = google.visualization.arrayToDataTable(data);
		

        var options = {
			
          title: "Primii N termeni ai progresiei/sirului",
          hAxis: {title: "Indicele", minValue: minval_h, maxValue: maxval_h},
          vAxis: {title: "Valoarea", minValue: minval_v, maxValue: maxval_v},
          legend: "none"
        };

        var chart = new google.visualization.ScatterChart(myChart);

        chart.draw(data_obj, options);
		
	  }
	  
	  function updateChart(tip, formula = "",a1,r,n){
		  
		

		var a = a1;
		
		var max_a = a1, min_a = a1;
		
		empty_data();
		
		data.push([1,a1]);
		
		for(var j=2;j<=n;j++){
			
			if(tip == 1 ) a+=r;
			
			else if (tip == 0) a*=r;
			
				else a = f(formula,a, j);
				
			data.push([j,a]);
			
					
			if( a > max_a ) max_a = a;
			
			else if ( a < min_a ) min_a = a;
				
				
		}

		drawChart(j,max_a,1,min_a);
	  }
	  
	  function approx(x){
		
		return (Math.round(x * 100) / 100).toFixed(2);
	  
	  }
	  
	  function verif_monoton(formula,x1){
	  
		var x = f(formula,x1,2);
		var sem = 1;
		
		if ( x>x1 ) 
			var sens = 1;
		else 
			sens = 0;
		
		for(var i = 3 ; i<=1000; i++){
			
			if(!sem)
				return -1;
			
			x1 = x;
			x = f(formula,x1,i);
			
			if( sens != (x>x1) )
				sem = 0;
		
		}
		return sens;
	  
	  }
	  
	  function xn(formula,x1,i){
		if(i==1)
			return x1;
		else 
			return f(formula,xn(formula,x1,i-1),i-1);
	  }
	  
	  function verif_marginire( formula, x1){
		  
		var margini = [];
		var monotonie = verif_monoton(formula,x1);
		
		var max_val=x1,min_val=x1;
		var d1=0,d2=0,d3=0;
		for(var i=2; i<=1000; i++){
			
			d3 = f(formula,x1,i) - x1;
			x1=f(formula,x1,i);
			
			if(x1>=max_val){
			
				d1 = x1 - max_val;
				max_val = x1;
				
			}
			
			if(x1<=min_val){
				d2 = min_val - x1;
				min_val = x1;
			}
			
			
		}
		
		if(approx(d1) == 0.00 || approx(d3) == 0)
			
			margini[1] = approx(max_val);
			
		else 
			margini[1] = 9999999999;
			
		if(approx(d2) == 0.00 || approx(d3) == 0)
			
			margini[0] = approx(min_val);
		
		else 
			margini[0] = -9999999999;
		
		
		return margini;
	  
	  }
	  
	  function verif_con(formula,x1){

		var monotonie = verif_monoton(formula,x1);
		var margini = verif_marginire(formula,x1);
		
		if((Math.abs(eval(margini[0]+"+"+margini[1])))>999999)
			return "Divergent";
		if(monotonie == 1) 
			return "Convergent către "+margini[1];
		if(monotonie == 0)
			return "Convergent către "+margini[0];
		if(monotonie == -1){
			return "Convergent către "+approx(xn(formula,x1,5000));
			
		}
		
	  
	  }
	  function f(formula,x,i){
		
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
	  
	  function ln(x){
	  
		return log(x,2.71828);
	  }
	  
	  function empty_data(){
		
		while(data.length > 1 ) data.pop();
		
	  }
	  
	  
	  
	  


	

but_arit.onclick = function(event){
	
	event.preventDefault();
	
	tip = 1;
	
	var a1 = eval((document.getElementById("a1").value));
		
	var r = eval((document.getElementById("r").value));

	var n = eval((document.getElementById("n1").value));
	
	updateChart(tip,"",a1,r,n);
	
}

but_geom.onclick = function(event){
	
	event.preventDefault();
	
	tip = 0;
	
	var b1 = eval((document.getElementById("b1").value));
		
	var q = eval((document.getElementById("q").value));

	var n = eval((document.getElementById("n2").value));
	
	updateChart(tip,"",b1,q,n);
	
}

but_sir.onclick = function(event){
	
	event.preventDefault();
	
	tip = 2;
	
	var x1 = eval((document.getElementById("x1").value));
		
	var formula = document.getElementById("formula").value;

	var n = eval((document.getElementById("n3").value));
	
	updateChart(tip,formula,x1,0,n);
	
}


but_mon.onclick = function(event){

	event.preventDefault();
	
	var x1 = eval((document.getElementById("x1").value));
		
	var formula = document.getElementById("formula").value;

	var rez_mon = document.getElementById("rez_mon");
	
	var monotonie = verif_monoton(formula,x1);
	
	
	if( monotonie === 1 ) 
		rez_mon.innerHTML = "Șir crescător";
	else if ( monotonie === 0 )
			rez_mon.innerHTML = "Șir descrescător";
		else 
			rez_mon.innerHTML = "Șir nemoton";
	
}

but_mar.onclick = function(event){

	event.preventDefault();
	
	var x1 = eval((document.getElementById("x1").value));
		
	var formula = document.getElementById("formula").value;

	var rez_mar = document.getElementById("rez_mar");
	
	var margini = verif_marginire(formula,x1)
	
	if(margini[0]!=-9999999999 && margini[1]!=9999999999 ) rez_mar.innerHTML = margini;
	else if(margini[0]!=-9999999999) rez_mar.innerHTML = margini[0]+",infinit";
		else rez_mar.innerHTML = "-infinit,"+margini[1];
	
}

but_con.onclick = function(event){
	
	event.preventDefault();
	
	var x1 = eval((document.getElementById("x1").value));
		
	var formula = document.getElementById("formula").value;

	var rez_con = document.getElementById("rez_con");
	
	var rez = verif_con(formula,x1)
	
	rez_con.innerHTML = rez;
}


ex1.onclick = function() { 
	
	empty_data();
	
	var a1 = 2, r = 3, n = 10;
	
	var max_a = a1, min_a = a1;
		
	empty_data();
		
	data.push([1,a1]);
		
	for(var j=2;j<=n;j++){
		
		a1+=r;	
		
		data.push([j,a1]);
					
		if( a1 > max_a ) max_a = a1;
		
		else if ( a1 < min_a ) min_a = a1;
				
				
	}

	drawChart(j,max_a,1,min_a);
}
var semi = 1;



ex2.onclick = function() { 
	
	empty_data();
	
	var a1 = 1/2, r = 2/3, n = 10;
	
	var max_a = a1, min_a = a1;
		
	empty_data();
		
	data.push([1,a1]);
		
	for(var j=2;j<=n;j++){
		
		a1*=r;	
		
		data.push([j,a1]);
					
		if( a1 > max_a ) max_a = a1;
		
		else if ( a1 < min_a ) min_a = a1;
				
				
	}

	drawChart(j,max_a,1,min_a);
}

ex3.onclick = function() { 
	
	empty_data();
	
	var x1 = 1, formula = "2*x+5", n = 10;
	
	var max_x = x1, min_x = x1;
		
	empty_data();
		
	data.push([1,x1]);
		
	for(var j=2;j<=n;j++){
		
		x1+=f(formula,x1,j);	
		
		data.push([j,x1]);
					
		if( x1 > max_x ) max_x = x1;
		
		else if ( x1 < min_x ) min_x = x1;
				
				
	}

	drawChart(j,max_x,1,min_x);
}

ex4.onclick = function() { 
	
	empty_data();
	
	var x1 = 9, formula = "sqrt( pow(x,2) + 3*x)", n = 10;
	
	var max_x = x1, min_x = x1;
		
	empty_data();
		
	data.push([1,x1]);
		
	for(var j=2;j<=n;j++){
		
		x1=f(formula,x1,j);	
		
		data.push([j,x1]);
					
		if( x1 > max_x ) max_x = x1;
		
		else if ( x1 < min_x ) min_x = x1;
				
				
	}

	drawChart(j,max_x,1,min_x);
}

ex5.onclick = function() { 
	
	empty_data();
	
	var x1 = 7, formula = "log(7*pow(x,i) + 7*sin(x),7)", n = 10;
	
	var max_x = x1, min_x = x1;
		
	empty_data();
		
	data.push([1,x1]);
		
	for(var j=2;j<=n;j++){
		
		x1=f(formula,x1,j);	
		
		data.push([j,x1]);
					
		if( x1 > max_x ) max_x = x1;
		
		else if ( x1 < min_x ) min_x = x1;
				
				
	}

	drawChart(j,max_x,1,min_x);
}

ex6.onclick = function() { 
	
	empty_data();
	
	var x1 = 3, formula = "i/x", n = 10;
	
	var max_x = x1, min_x = x1;
		
	empty_data();
		
	data.push([1,x1]);
		
	for(var j=2;j<=n;j++){
		
		x1=f(formula,x1,j);	
		
		data.push([j,x1]);
					
		if( x1 > max_x ) max_x = x1;
		
		else if ( x1 < min_x ) min_x = x1;
				
				
	}

	drawChart(j,max_x,1,min_x);
}

$(document).ready(function(){
  $("#instructiuni").click(function(){
    $("#instruct_div").slideToggle();
	
	if(s1%2==0)
		$("#arrow1").css("transform","rotate(180deg)");
	else
		$("#arrow1").css("transform","rotate(0deg)");
	s1++;
  });
});

$(document).ready(function(){
  $("#arit").click(function(){
    $("#arit_div").slideToggle();
	
	if(s2%2==0)
		$("#arrow2").css("transform","rotate(180deg)");
	else
		$("#arrow2").css("transform","rotate(0deg)");
	s2++;
	
  });
});

$(document).ready(function(){
  $("#geom").click(function(){
    $("#geom_div").slideToggle();
	
	if(s3%2==0)
		$("#arrow3").css("transform","rotate(180deg)");
	else
		$("#arrow3").css("transform","rotate(0deg)");
	s3++;
  });
  
});

$(document).ready(function(){
  $("#sir").click(function(){
    $("#sir_div").slideToggle();
	
	if(s4%2==0)
		$("#arrow4").css("transform","rotate(180deg)");
	else
		$("#arrow4").css("transform","rotate(0deg)");
	s4++;
  });
});



