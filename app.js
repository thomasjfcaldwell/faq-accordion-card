const questions = document.querySelectorAll('.question-title');

for (i = 0; i < questions.length; i++) {
	questions[i].addEventListener('click', function () {
		this.classList.toggle('active');

		const answers = this.nextElementSibling;
		if (answers.style.display === 'block') {
			answers.style.display = 'none';
		} else {
			answers.style.display = 'block';
		}
	});
}
