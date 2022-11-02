import { db } from './SQLite';

export function createTable(){
    db.transaction((transaction) => {
      transaction.executeSql("CREATE TABLE IF NOT EXISTS " + 
        "Login" + 
        "(id INTEGER PRIMARY KEY AUTOINCREMENT, login TEXT, senha TEXT);")  
    })
  }
//LETRAS MAIUSCULAS, SERÃO AS PALAVRAS RESERVADOS DO SQLITE

export function addLogin(login,senha){
  return new Promise ((resolve) => {
  db.transaction((transaction) => {
    transaction.executeSql('INSERT INTO Logins (Login,Senha) VALUES (?,?);',[login.login, senha.senha],
    () => {
      resolve("Login adicionado com sucesso!")
    })
  })
})
}