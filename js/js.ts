const users = [
  { id: 1, name: 'Meet', age: 24 },
  { id: 2, name: 'Aman', age: 17 },
  { id: 3, name: 'Riya', age: 30 },
]

export function getUser() {
  const user = users.filter(user => user.age > 18)
console.log(user)
}

export function averageAge() {
  const average = users.reduce((acc, user) => acc + user.age, 0) / users.length
console.log(average.toFixed(2))
}

export function format() {
  const formatted = users.map(user => ` ${user.id} : ${user.name} `)
console.log(formatted)
}

export async function fetchUsers() {
  let users = [];
  let error = null;
  let loading = true;

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    users = data.filter(user => user.email.endsWith('.biz'));
    console.log(users);
  } catch (err) {
    error = err;
    console.error("Fetch error:", error);
  } finally {
    loading = false;
  }

  return { users, error, loading };
}

