function Play(){	
//----------------------------------------------------------------------------------------
	// функция выводит случайное значение в заданных диопазонах
	function getRandom(min, max){
		return parseInt(Math.random()*(max-min)+min);
	}
	// функция проверки правильного ответа
	function Inspection(version){
		if (version==number) {
			alert("Вы отгадали загаданное число! Было загадано число: "+number+"\nПоздравляем!");
			return true;
		}else if(version<number){
			alert("Ваш вариант меньше загаданного. Попробуйте еще раз.");
		}else
		alert("Ваш вариант бальше загаданного. В следующий раз повезет.");
	}

	var number = getRandom(0,100);
	var countAnswer = 0;
	//alert(number);
	var user = document.getElementById("userPlayer").value;
	
	alert("Компьютер загадал число от 0 до 100(не включая 100). \nПопробуйте его отгадать, если решите сдаться введите -1.");
	while(true){
		var ans = +prompt("Ваш ход Игрок: " + user);
		// проверяем чтобы не пустая строка и введено число
		if(ans!='' && !isNaN(ans)){
			if (ans== -1){
				alert("Спасибо за игру!");
				break;
			}
			else{
				countAnswer++;
				//вызов функции проверки ответа
				if(Inspection(ans)==true){
					alert("Ваш результат: "+countAnswer+" попыток.");
					break;
				}				
			}				
		}
		else{
			alert("Вы ввели не верное значение.\nВведите число от 0 до 100");
		}
	}//end while

//----------------------------------------------------------------------------------------
}
