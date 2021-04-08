 
 //Function to filter drug names
	function filterDrug() {
	  // Declare variables
	  var input, filter, ul, li, a, i, txtValue;
	  input = document.getElementById('drugInput');
	  filter = input.value.toUpperCase();
	  //ul = document.getElementById("myUL");
	  drugList = document.getElementsByTagName('a');
	  div = document.getElementsByClassName('btn-lg');
	  

	  // Loop through all list items, and hide those who don't match the search query
	  for (i = 0; i < drugList.length; i++) {
		a = drugList[i];
		txtValue = a.textContent || a.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
		  drugList[i].style.display = "";
		  div[i].style.display = "";
		} else {
		  drugList[i].style.display = "none";
		  div[i].style.display = "none";
		}
	  }
	}
		
//Function to hide/show elements if proper age and weight are entered		
	function checkHidden() {
		var ptAge,ptWt;
		
		ptAge = document.getElementById("patientAge").value;
		ptWt = document.getElementById("patientWeight").value;
		console.log("im here");
		if (ptAge>0 && ptWt>0){
			document.getElementById('searchBar').hidden = false;
			document.getElementById('mainArea').hidden = false;
			document.getElementById('pdfBox').hidden = false;
			calculateValues(ptAge,ptWt);
		}else{
			document.getElementById('searchBar').hidden = true;
			document.getElementById('mainArea').hidden = true;
			document.getElementById('pdfBox').hidden = true;
		}
		

	}

//Function to calculate medication doses/volumes
	function calculateValues(age,weight){
		document.getElementById('headerAge').innerHTML = age + " yrs";
		document.getElementById('headerWt').innerHTML = weight + " kg";
		//Adenosine
		//first dose - dose
			var adenosineDose1
			adenosineDose1 = 0.1 * weight;
			if (adenosineDose1>6){adenosineDose1 = 6;}
			adenosineDose1 = Number(adenosineDose1.toFixed(2));

		//first dose - volume
			var adenosineVol1
			adenosineVol1 = adenosineDose1 / 3;
			adenosineVol1 = Number(adenosineVol1.toFixed(2));
			document.getElementById('adenosineDoseA').innerHTML = adenosineDose1 + " mg";
			document.getElementById('adenosineVolA').innerHTML = adenosineVol1 + " mL";
			document.getElementById('adenosineDoseAt').innerHTML = adenosineDose1 + " mg";
			document.getElementById('adenosineVolAt').innerHTML = adenosineVol1 + " mL";
			
		//second dose - dose
		var adenosineDose2
		adenosineDose2 = 0.2 * weight;
		if (adenosineDose2>12){adenosineDose2 = 12;}
		
		adenosineDose2 = Number(adenosineDose2.toFixed(2));

		//second dose - volume
		var adenosineVol2
		adenosineVol2 = adenosineDose2 / 3;
		adenosineVol2 = Number(adenosineVol2.toFixed(2));
		document.getElementById('adenosineDoseB').innerHTML = adenosineDose2 + " mg";
		document.getElementById('adenosineVolB').innerHTML = adenosineVol2 + " mL";
		document.getElementById('adenosineDoseBt').innerHTML = adenosineDose2 + " mg";
		document.getElementById('adenosineVolBt').innerHTML = adenosineVol2 + " mL";
		console.log("end");

	}

//Function to create and print a plain table as a PDF
	function createPDF() {
		var sTable = document.getElementById('pdfTable').innerHTML;

		var style = "<style>";
		style = style + "table {width: 100%;font: 17px Calibri;}";
		style = style + "table, th, td {border: solid 1px #DDD; border-collapse: collapse;";
		style = style + "padding: 2px 3px;text-align: center;}";
		style = style + "</style>";

		// CREATE A WINDOW OBJECT.
		var win = window.open('', '', 'height=700,width=700');

		win.document.write('<html><head>');
		win.document.write('<title>Profile</title>');   // <title> FOR PDF HEADER.
		win.document.write(style);          // ADD STYLE INSIDE THE HEAD TAG.
		win.document.write('</head>');
		win.document.write('<body>');
		win.document.write(sTable);         // THE TABLE CONTENTS INSIDE THE BODY TAG.
		win.document.write('</body></html>');

		win.document.close(); 	// CLOSE THE CURRENT WINDOW.

		win.print();    // PRINT THE CONTENTS.
	}