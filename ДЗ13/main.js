let login = prompt('Ти хто?', '');

let message = (login == 'Співробітник') ? 'Привіт' :
(login == 'Директор') ? 'Добрий день!' :
(login == '') ? 'Нема логіну' :
'';

alert(message);