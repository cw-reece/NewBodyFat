document.querySelector("#weight").addEventListener("keyup", (e) => {
	return (userWeight = weight.value);
});
document.querySelector("#waist").addEventListener("keyup", (e) => {
	return (userWaist = waist.value);
});
//prettier-ignore
document.querySelector("button").addEventListener("click", (e) => {
	const genderCheck = document.getElementsByName("gender");
	const ageCheck = document.getElementsByName("age");
	let bodyFatPercent = 0;
	if (genderCheck[0].checked) {
		bodyFatPercent = -26.97 - 0.12 * userWeight + 1.99 * userWaist;
	} else if(genderCheck[1].checked) {
		bodyFatPercent = -9.15 - 0.015 * userWeight + 1.27 * userWaist;
	};
	const result = document.createElement("div");
	if (document.querySelector("div")) {
		document.querySelector("div").remove();
	};
	result.innerText = `Bodyfat Percentage: ${bodyFatPercent.toFixed(2)}%`;
	document.body.append(result);
	if (genderCheck[0].checked && ageCheck[0].checked && bodyFatPercent<=20) {
		document.querySelector("div").classList.add("pass");
	} else if (genderCheck[0].checked && ageCheck[1].checked && bodyFatPercent <= 22) {
		document.querySelector("div").classList.add("pass");
	} else if (genderCheck[0].checked && ageCheck[2].checked && bodyFatPercent <= 24) {
		document.querySelector("div").classList.add("pass");
	} else if (genderCheck[0].checked && ageCheck[3].checked && bodyFatPercent <= 26) {
		document.querySelector("div").classList.add("pass");
	} else if (genderCheck[1].checked && ageCheck[0].checked && bodyFatPercent <= 30) {
		document.querySelector("div").classList.add("pass");
	} else if (genderCheck[1].checked && ageCheck[1].checked && bodyFatPercent <= 32) {
		document.querySelector("div").classList.add("pass");
	} else if (genderCheck[1].checked && ageCheck[2].checked && bodyFatPercent <= 34) {
		document.querySelector("div").classList.add("pass");
	} else if (genderCheck[1].checked && ageCheck[3].checked && bodyFatPercent <= 36) {
		document.querySelector("div").classList.add("pass");
	}
	else{document.querySelector("div").classList.add("fail");}
});
