var siteName = document.getElementById("bookmarkName");
var siteURL = document.getElementById("bookmarkURL");
var inputsContainer = [];

if (localStorage.getItem("BookMark") !== null) {
    inputsContainer = JSON.parse(localStorage.getItem("BookMark"));
		displayInputs();
}
	function addInputs() {
		var inputs = {
			inputName: siteName.value,
			inputURL: siteName.value,
		};

		inputsContainer.push(inputs);
		localStorage.setItem("BookMark", JSON.stringify(inputsContainer));
		displayInputs();
		clearInputs();
		validation();
	}

function displayInputs() {
	var cartona = ``;
	for (var i = 0; i < inputsContainer.length; i++) {
		cartona += `		<tr class="text-capitalize">
							<td>
								${i + 1}
							</td>
							<td>${inputsContainer[i].inputName}</td>
							<td>
								<button onclick="visit()" class="btn btn-visit">
								<i class="fa-solid fa-eye pe-2"></i>
								Visit
							</button>
							</td>
							<td>
								<button onclick="deleteInputs(${i})" class="btn btn-delete">
								<i class="fa-solid fa-trash-can pe-2"></i>
								Delete
							</button>
							</td>
						</tr>
        
        `;
	}
	document.getElementById("tableContent").innerHTML = cartona;
}

function clearInputs() {
	siteName.value = null;
	siteURL.value = null;
}

function deleteInputs(index) {
	inputsContainer.splice(index, 1);
    displayInputs();
    localStorage.setItem("BookMark", JSON.stringify(inputsContainer));

}

function visit() {

}
