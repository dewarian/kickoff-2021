// API endpoints
const url = 'https://600ff44f6c21e1001704fac2.mockapi.io/minor-web/api'
const personal = 'https://60185d4d971d850017a3fe9a.mockapi.io/minor-web/api';

// Data
const pic = {"mugshot": "https://i.ibb.co/ZVdRwGv/IMG-0541.jpg"}
const changeData = {
  "teamId": 2,
  "name": "Nathan",
  "prefix": "Legendary",
  "surname": "Bommezijn",
  "mugshot": "https://avatars.githubusercontent.com/u/13199349?s=460&u=0c014f403524b32404a81ca04b6b8a1ad2b841e9&v=4",
  "githubHandle": "dewarian",
  "other": {"js":6, "html":6, "css": 6, "title":"Aspiring Web Dev", "info":"Aspiring web developer currently in it's third year of CMD." ,"website":"bommezijn.me"}
}

// postData(`${personal}/squads/1/teams/2/members`, putData).then(data => {console.log('post', data) });
// deleteUser(`${url}`, 51).then(data => {console.log('post', data)});
updateUser(`${personal}/squads/1/teams/2/members/17`, changeData)
getData(`${personal}/squads/1/teams/2/members/3`)

async function getData(url) {
  return await fetch(url).then(response => response.json()).then(data => console.log(data))
}

async function postData(url = '', data = {}) {
  const response = await fetch(url, {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  });
  return response.json();
}

async function deleteUser(url = '', id) {
  await fetch(`${url}/squads/1/teams/2/members/${id}`, {
    method: 'DELETE',
    headers: {'Content-type': 'application/json;',}
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))
}

async function updateUser(url, data) {
  await fetch(url, {
    method: 'PUT',
    headers: {'Content-type': 'application/json;'},
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))

}