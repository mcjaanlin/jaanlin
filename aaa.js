

function changeText(e) {
  
	 switch(e.id) {
		case "item1":
			document.getElementById("desHeader").innerHTML = "KFC";
			document.getElementById("desbody").innerHTML = "KFC was founded by Colonel Harland Sanders, an entrepreneur who began selling fried chicken from his roadside restaurant in Corbin, Kentucky, during the Great Depression. Sanders identified the potential of the restaurant franchising concept, and the first \"Kentucky Fried Chicken\" franchise opened in Utah in 1952.";
			break;
		case "item2":
			document.getElementById("desHeader").innerHTML = "MCD";
			document.getElementById("desbody").innerHTML = "The first McDonald's restaurant was started in 1948 by brothers Maurice (“Mac”) and Richard McDonald in San Bernardino, California. They bought appliances for their small hamburger restaurant from salesman Ray Kroc, who was intrigued by their need for eight malt and shake mixers.";
			break;
		case "item3":
			document.getElementById("desHeader").innerHTML = "NIKE";
			document.getElementById("desbody").innerHTML = "It was founded in 1964 as Blue Ribbon Sports by Bill Bowerman, a track-and-field coach at the University of Oregon, and his former student Phil Knight. They opened their first retail outlet in 1966 and launched the Nike brand shoe in 1972. The company was renamed Nike, Inc., in 1978 and went public two years later.";
			break;
		case "item4":
			document.getElementById("desHeader").innerHTML = "LEGO";
			document.getElementById("desbody").innerHTML = "The History of Lego began in 1932 in a Danish carpentry workshop and continues into the 21st century as a popular and very profitable line of construction toys and related products and services, including Lego board games, retail stores, Lego video games, Lego films, Legoland theme parks, and Lego Serious Play consultant services, with a significant impact on various areas of popular culture. Despite its expansion, the company remains privately held.";
			break;
	}
}


 function createChart(){
		var value1 = parseInt(document.getElementById("fnum1").value,10);
		var value2 = parseInt(document.getElementById("fnum2").value,10);
		
		if (!value1 || !value2)
		{	alert("Please input value in the boxes");
		
		
		}else{
			var data = [{
				fill:value1,
				color:"skyblue"
			},{
				fill:value2,
				color:"orange"
			}]
			var doughnut = document.querySelector("#doughnut"),
			svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
			filled = 0;
			
			
			if (doughnut.hasChildNodes())
			{
				doughnut.removeChild(doughnut.childNodes[0]);
			}
			
			
			svg.setAttribute("width","23%");
			svg.setAttribute("height","23%");
			svg.setAttribute("viewBox","0 0 100 100");
			doughnut.appendChild(svg);
			
			var text1 = document.createElementNS('http://www.w3.org/2000/svg', 'text');
			text1.textContent = value1 +'/'+ value2;
			text1.setAttribute('x', '34.5');
			text1.setAttribute('y', '53');
			text1.setAttribute('font-size', '12px');
			
			svg.appendChild(text1);
			
			
			data.forEach(function(o,i){
				var circle = document.createElementNS("http://www.w3.org/2000/svg","circle"),
				startAngle = -90,
				radius = 30,
				cx = 50,
				cy = 50,
				animationDuration = 2000,
				strokeWidth = 15,
				dashArray = 2*Math.PI*radius,
				dashOffset = dashArray - (dashArray * o.fill / 100),
				angle = (filled * 360 / 100) + startAngle,
				currentDuration = animationDuration * o.fill / 100,
				delay = animationDuration * filled / 100;
				circle.setAttribute("r",radius);
				circle.setAttribute("cx",cx);
				circle.setAttribute("cy",cy);
				circle.setAttribute("fill","transparent");
				circle.setAttribute("stroke",o.color);
				circle.setAttribute("stroke-width",strokeWidth);
				circle.setAttribute("stroke-dasharray",dashArray);
				circle.setAttribute("stroke-dashoffset",dashArray);
				circle.style.transition = "stroke-dashoffset "+currentDuration+"ms linear "+delay+"ms";
				circle.setAttribute("transform","rotate("+(angle)+" "+cx+" "+cy+")");
				svg.appendChild(circle);
				filled+= o.fill;
				setTimeout(function(){
					circle.style["stroke-dashoffset"] = dashOffset;
				},100);
			})
			
			
			
		}
 }



