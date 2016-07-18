var result = 0;

function AskQuestion(textBoxId, answer)
{
	var userAnswer = document.getElementById(textBoxId).value;
	if(userAnswer == answer)
		result++;

}

function AskQuestions()
{
	AskQuestion("userAnswer1", "капуста");
	AskQuestion("userAnswer2", "елка");


	if(result == 2)
		alert('Вы угадали все загадки')	;
	else if(result == 1)
		alert('Вы угадали только одну загадку')	;
	else 
		alert('Вы ничего не угадали');
}		
