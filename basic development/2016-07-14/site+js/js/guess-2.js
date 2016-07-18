function Play()
{	
	var answer = parseInt(Math.random() * 100);
	
	var user1 = document.getElementById("userPlayer1").value;
	var user2 = document.getElementById("userPlayer2").value;
	var plyaerNum = user1;
	while(true){
		var userAnswer = prompt('Ходит игрок ' + plyaerNum + ' .Введите число от 0 до 100. Для выхода нажмите q');

		if(userAnswer == 'q')
			break;
		if(userAnswer > answer){
			alert('Ваше число слишком большое');
		} else if(userAnswer < answer){
			alert('Ваше число слишком маленькое');
		} else if(userAnswer == answer){
			alert('Вы угадали, поздравляю! Победил игрок номер ' + plyaerNum);
			break;
		}

		if(plyaerNum == user1)
			plyaerNum = user2;		
		else if(plyaerNum == user2)
			plyaerNum = user1;
	}

}
