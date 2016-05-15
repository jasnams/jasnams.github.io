function askQuestions() {

	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?')
	var fullName = firstName + ' ' + lastName;

	console.log(fullName);


	var age = prompt('How old are you?');
	age = parseInt(age);

	if (age>=18) {
			console.log('user is an adult');
	} else if (age >= 13) {

		console.log('User is a teenager');
	} else {
		console.log('User is a child');
	}

	$('h2').text(firstName + ' is ' + age + ' years old! ');

	if (firstName ==='General' && lastName !=='Assembly') {
		console.log('Salute, General!');
	}

	var faveColour = prompt('What is your favourite colour?').toLowerCase();

	if (faveColour === 'red' ||
		faveColour === 'blue' ||
		faveColour === 'green' ||
		faveColour === 'yellow') {
		$('h1').css('color', faveColour);
	}
		
}

	// When the page loads
	$(function() {

		$('img').on('click', askQuestions);

		// When the user clicks a heading
		$('h3').on('click', function() {
		
			// Hide the content after the heading
			$(this).next().slideToggle(1000);

		});

	});