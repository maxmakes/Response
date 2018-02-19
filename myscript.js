$(document).ready(function(){
	//hiding captions
	$(".caption").hide();
	//hiding titles
	$(".titleright").hide();
	$(".titleleft").hide();
	//hiding pictures
	$(".picture").hide();

	//var clickcount = 0;
	var robotcount = 0;
	var animalcount = 0;
	var housecount = 0;
	var humancount = 0;
	var rightI = 0;
	var leftI = 0;
	
	//showing captions when corresponding picture is clicked
	$(".robot1").click(function(){
		$("#robot1caption").show();
		// show "screen" div
		$(".screen").show();
	});

	$(".robot2").click(function(){
		$("#robot2caption").show();
		// show "screen" div
		$(".screen").show();
	});

	$(".robot3").click(function(){
		$("#robot3caption").show();
		// show "screen" div
		$(".screen").show();
	});

	$(".robot4").click(function(){
		$("#robot4caption").show();
		// show "screen" div
		$(".screen").show();
	});

	$(".animal1").click(function(){
		$("#animal1caption").show();
		// show "screen" div
		$(".screen").show();
	});

	$(".animal2").click(function(){
		$("#animal2caption").show();
		// show "screen" div
		$(".screen").show();
	});

	$(".animal3").click(function(){
		$("#animal3caption").show();
		// show "screen" div
		$(".screen").show();
	});

	$(".animal4").click(function(){
		$("#animal4caption").show();
		// show "screen" div
		$(".screen").show();
	});

	$(".animalrobot").click(function(){
		$("#animalrobotcaption").show();
		// show "screen" div
		$(".screen").show();
	});

	$(".house1").click(function(){
		$("#house1caption").show();
		// show "screen" div
		$(".screen").show();
	});

	$(".house2").click(function(){
		$("#house2caption").show();
		// show "screen" div
		$(".screen").show();
	});

	$(".house3").click(function(){
		$("#house3caption").show();
		// show "screen" div
		$(".screen").show();
	});

	$(".house4").click(function(){
		$("#house4caption").show();
		// show "screen" div
		$(".screen").show();
	});

	$(".smarthouse1").click(function(){
		$("#smarthouse1caption").show();
		// show "screen" div
		$(".screen").show();
	});

	$(".smarthouse2").click(function(){
		$("#smarthouse2caption").show();
		// show "screen" div
		$(".screen").show();
	});

	$(".smarthouse3").click(function(){
		$("#smarthouse3caption").show();
		// show "screen" div
		$(".screen").show();
	});

	$(".smarthouse4").click(function(){
		$("#smarthouse4caption").show();
		// show "screen" div
		$(".screen").show();
	});

	$(".humanhuman").click(function(){
		$("#humanhumancaption").show();
		// show "screen" div
		$(".screen").show();
	});

	//how do we get out of caption mode? clicking "screen" div hides
	// caption and itself
	$(".screen").click(function(){
		//hide caption
		$(".caption").hide();
		//hide screen
		$(this).hide();
	});


	$(".roboticon").click(function(){
		if(robotcount == 1){
			if($(".robottitleleft").is(":visible")){
				leftI=0;
			} else { rightI=0; }
			$(".robot").hide();
			$(".robottitleleft").hide();
			$(".robottitleright").hide();
			robotcount = 0;
		} else if(leftI == 0){
			$(".robottitleleft").show();
			$(".robot").show();
			robotcount = 1;
			leftI = 1;
		}
		else if(rightI == 0){
			$(".robottitleright").show();
			$(".robot").show();
			robotcount = 1;
			rightI = 1;
		}
	});
	$(".animalicon").click(function(){
		if(animalcount == 1){
			if($(".animaltitleleft").is(":visible")){
				leftI=0;
			} else { rightI=0; }
			$(".animal").hide();
			$(".animaltitleleft").hide();
			$(".animaltitleright").hide();
			animalcount = 0;
		} else if(leftI == 0){
			$(".animaltitleleft").show();
			$(".animal").show();
			animalcount = 1;
			leftI = 1;
		}
		else if(rightI == 0){
			$(".animaltitleright").show();
			$(".animal").show();
			animalcount = 1;
			rightI = 1;
		}
	});
	$(".houseicon").click(function(){
		if(housecount == 1){
			if($(".housetitleleft").is(":visible")){
				leftI=0;
			} else { rightI=0; }
			$(".house").hide();
			$(".housetitleleft").hide();
			$(".housetitleright").hide();
			housecount = 0;
		} else if(leftI == 0){
			$(".housetitleleft").show();
			$(".house").show();
			housecount = 1;
			leftI = 1;
		}
		else if(rightI == 0){
			$(".housetitleright").show();
			$(".house").show();
			housecount = 1;
			rightI = 1;
		}
	});
	$(".humanicon").click(function(){
		if(humancount == 1){
			if($(".humantitleleft").is(":visible")){
				leftI=0;
			} else { rightI=0; }
			$(".human").hide();
			$(".humantitleleft").hide();
			$(".humantitleright").hide();
			humancount = 0;
		} else if(leftI == 0){
			$(".humantitleleft").show();
			$(".human").show();
			humancount = 1;
			leftI = 1;
		}
		else if(rightI == 0){
			$(".humantitleright").show();
			$(".human").show();
			humancount = 1;
			rightI = 1;
		}
	});



/*
	$(".roboticon").click(function(){
		if(clickcount == 2){
			$(".titleleft").hide();
			$(".titleright").hide();
			$(".robot").hide();
			$(".animal").hide();
			$(".house").hide();
			$(".human").hide();
			clickcount = 0;
		}
		if(clickcount == 0){
			$(".robottitleleft").show();
			$(".robot").show();
			clickcount = 1;
		}
		else if(clickcount == 1){
			$(".robottitleright").show();
			$(".robot").show();
			clickcount = 2;
		}
	});

	$(".animalicon").click(function(){
		if(clickcount == 2){
			$(".titleleft").hide();
			$(".titleright").hide();
			$(".robot").hide();
			$(".animal").hide();
			$(".house").hide();
			$(".human").hide();
			clickcount = 0;
		}
		if(clickcount == 0){
			$(".animaltitleleft").show();
			$(".animal").show();
			clickcount = 1;
		}
		else if(clickcount == 1){
			$(".animaltitleright").show();
			$(".animal").show();
			clickcount = 2;
		}
	});
	$(".houseicon").click(function(){
		if(clickcount == 2){
			$(".titleleft").hide();
			$(".titleright").hide();
			$(".robot").hide();
			$(".animal").hide();
			$(".house").hide();
			$(".human").hide();
			clickcount = 0;
		}
		if(clickcount == 0){
			$(".housetitleleft").show();
			$(".house").show();
			clickcount = 1;
		}
		else if(clickcount == 1){
			$(".housetitleright").show();
			$(".house").show();
			clickcount = 2;
		}
	});	
	$(".humanicon").click(function(){
		if(clickcount == 2){
			$(".titleleft").hide();
			$(".titleright").hide();
			$(".robot").hide();
			$(".animal").hide();
			$(".house").hide();
			$(".human").hide();
			clickcount = 0;
		}
		if(clickcount == 0){
			$(".humantitleleft").show();
			$(".human").show();
			clickcount = 1;
		}
		else if(clickcount == 1){
			$(".humantitleright").show();
			$(".human").show();
			clickcount = 2;
		}
	});	
*/

});