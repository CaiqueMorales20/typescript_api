interface User {
  name: string
  age: number
}

function saveUserToDatabase(user: User) {
  // salvar no banco de dados
  console.log(`User ${user.name} saved on Database`)
}

saveUserToDatabase({
  name: 'Caique',
  age: 20}
)