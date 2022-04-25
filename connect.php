<?php
$host = 'localhost';  // Хост, у нас все локально
$user = 'root';    // Имя созданного вами пользователя
$pass = ''; // Установленный вами пароль пользователю
$db_name = 'artgalery';   // Имя базы данных
$link = mysqli_connect($host, $user, $pass, $db_name); // Соединяемся с базой

// Ругаемся, если соединение установить не удалось
if (!$link) {
  echo 'Не могу соединиться с БД. Код ошибки: ' . mysqli_connect_errno() . ', ошибка: ' . mysqli_connect_error();
  exit;
}
  
$sql = mysqli_query($link, "INSERT INTO `form`(`name`, `email`, `message`, `img`) VALUES ('{$_POST['name']}', '{$_POST['email']}', '{$_POST['message']}', '{$_POST['file_cv']}')");
    //Если вставка прошла успешно
    if ($sql) {
      if ($sql) {
        if ($variable){
          include("sucses.html");
        }
        else {
          include("sucses.html");
        }
      } else {
        if ($variable){
          include("error.html");
        }
        else {
          include("error.html");
        }
      }
    }
?>