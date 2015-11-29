function askQuestions() {
//we add this to make all the action not right after the user intered on the page

	var faveColour = prompt('What is your favourite colour?')
	if (faveColour == 'red' ||
		faveColour == 'green' ||
		faveColour == 'blue' ||
		faveColour == 'yellow' ){
		$('h2').css('color', faveColour);
	}


	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');

	var fullName = firstName + ' ' + lastName;

	console.log('User is: ' + fullName);
	$('h2').text('hello ' + fullName);

	var age = prompt('how old are you?');
	age = parseInt(age); 

	if (age >= 18) {

		console.log('User is an adult.'); 
		//console for to report on your browser and will be save on the console of the user browsers untill you refresh. so if you delet it nothing happen on your actions
		alert('Hello, adult');

	} else if (age >= 13) {

		console.log('user is a teenager');
		alert('Come back soon!');

	}else {

		console.log('user is a child');
		alert('Go away, child!');

	}

	var firstName = prompt('Is your name General?');
	var lastName = prompt('Is your name Assembly?');

		if (firstName == 'yes' && lastName === 'no') {

			console.log('It is somebodyelss');
			alert('Hello General!');

		} else if (firstName == 'no' && lastName == 'yes') {

			console.log('It is somebody assembly');
			alert('Welcome to the party!');

		} else  {

			console.log('It is GA');
			alert('Go away, GA');

		}
		
}


//when the page has loaded
$(function() {

	//when the user clicks the image, run askQuestions;
	$('img').on('click', askQuestions);

	//hide all the things
	$('h3').next().hide();

	//when the user clicks on an h3
	$('h3').on('click',function() {

		//hide or toggle the next element
		$(this).next().slideToggle(500);

	});

})