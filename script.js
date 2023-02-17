function calculate(loan_amt, months, rate) {
	
	i = rate / 100;

	var monthly_payment =
		(loan_amt * (i / 12) * Math.pow(1 + i / 12, months)) /
		(Math.pow(1 + i / 12, months) - 1);

	monthly_payment = round(monthly_payment, 2);

	var info = "";

	info += "<table width='250'>";
	info += "<tr><td>Loan Amount:</td>";
	info += "<td align='right'>" + "$" + loan_amt + "</td></tr>";

	info += "<table width='250'>";
	info += "<tr><td>Num of Months:</td>";
	info += "<td align='right'>" + months + "</td></tr>";

	info += "<table width='250'>";
	info += "<tr><td>Interest Rate:</td>";
	info += "<td align='right'>" + rate + "%" + "</td></tr>";

	info += "<table width='250'>";
	info += "<tr><td>Monthly Payments:</td>";
	info += "<td align='right'>" + "$" + monthly_payment + "</td></tr>";

	document.getElementById("loan_info").innerHTML = info;

	var table = "";

	table += "<table cellpadding='10' >";
	table += "<tr>";
	table += "<th width='30'>Month #</th>";
	table += "<th width='60'>Payment</th>";
	table += "<th width='60'>Principle</th>";
	table += "<th width='60'>Interest</th>";
	table += "<th width='70'>Balance</th>";
	table += "</tr>";
	
	

	var current_balance = loan_amt;
	var payment_counter = 1;
	
	monthly_payment = monthly_payment;

	while (current_balance > 0) {
		towards_interest = (i / 12) * current_balance;

		if (monthly_payment > current_balance) {
			monthly_payment = current_balance + towards_interest;
		}

		towards_balance = monthly_payment - towards_interest;
		current_balance = current_balance - towards_balance;

		table += "<tr>";
		table += "<td>" + payment_counter + "</td>";
		table += "<td>" + "$" + round(monthly_payment, 2) + "</td>";
		table += "<td>" + "$" + round(towards_balance, 2) + "</td>";
		table += "<td>" + "$" + round(towards_interest, 2) + "</td>";
		table += "<td>" + "$" + round(current_balance, 2) + "</td>";
		table += "</tr>";

		payment_counter++;

		document.getElementById("table").innerHTML = table;
		document.getElementById("table").style.opacity = "1";
		document.getElementById("loan_info").style.opacity = "1";
		document.getElementById("loan_src").style.margin = "";
		document.getElementById("loan_src").style.float = "left";
		
	}
}

function round(num, dec) {
	return (Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec)).toFixed(dec);


}

function Reset() {
	
		document.getElementById("table").style.opacity = "0";
		document.getElementById("loan_info").style.opacity = "0";
		document.getElementById("loan_src").style.margin = "auto";
		document.getElementById("loan_src").style.float = "";
		
	if (months > 0 || isNaN(Number(months))) {
		
		document.loan_form.months.value = "";
		document.loan_form.loan_amt.value = "";
		document.loan_form.rate.value = "";
	} 
	
	}

	function validate() {
		var loan_amt = document.loan_form.loan_amt.value;
		var months = document.loan_form.months.value;
		var rate = document.loan_form.rate.value;

		if (loan_amt <= 0 || isNaN(Number(loan_amt))) {
			alert("Please enter a valid loan Amount. ");
			document.loan_form.loan_amt.value = "";
		} else if (months <= 0 || parseInt(months) != months) {
			alert("Please enter a valid amount of months. ");
			document.loan_form.months.value = "";
		} else if (rate <= 0 || isNaN(Number(rate))) {
			alert("Please enter a valid rate amount. ");
			document.loan_form.rate.value = "";
		} else {
			calculate(parseFloat(loan_amt), parseInt(months), parseFloat(rate));
		}
	}

function validate() {
	
	var loan_amt = document.loan_form.loan_amt.value;
	var months = document.loan_form.months.value;
	var rate = document.loan_form.rate.value;

	if (loan_amt <= 0 || isNaN(Number(loan_amt))) {
		alert("Please enter a valid loan Amount. ");
		document.loan_form.loan_amt.value = "";
	} else if (months <= 0 || parseInt(months) != months) {
		alert("Please enter a valid amount of months. ");
		document.loan_form.months.value = "";
	} else if (rate <= 0 || isNaN(Number(rate))) {
		alert("Please enter a valid rate amount. ");
		document.loan_form.rate.value = "";
	} else {
		calculate(parseFloat(loan_amt), parseInt(months), parseFloat(rate));
	}
}
