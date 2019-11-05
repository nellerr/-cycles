let a = prompt('Введите логин');


if( a  == 'in'){
    let c = prompt('Введите пароль');
    if(c == 'admin'){
        alert('Добро пожаловать');
    }
    else if( c === null){
        alert('Входит отменён');
    }
    else{
        alert('Неверный пароль');
    }

    
   
}
else if (a === null ) {
    alert('Входит отменён');
}
else{
    alert('Я Вас не знаю');
}


/// Первая часть кода

for (let i=2; i<200; i += 2 ){
    console.log(i);
}

//Вторая часть кода 



