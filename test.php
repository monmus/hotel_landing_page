<?php 
function sprawdz($funkcja_mail) {   
    if (function_exists($funkcja_mail)) { 
        echo "Funkcja <strong>$funkcja_mail</strong> jest dostepna na tym serwerze."; 
    } 
    else { 
        echo "Funkcja <strong>$funkcja_mail</strong> nie jest dostepna na tym serwerze."; 
    } 
} 
// sprawdza, czy funkcja mail() jest włączona
sprawdz('mail'); 
?>