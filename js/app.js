const url = 'https://600ff44f6c21e1001704fac2.mockapi.io/minor-web/api/squads/1/teams/2/members'

getData(url)

const putData =   {
  "id": 3,
  "teamId": 2,
  "name": "Nathan",
  "prefix": "He",
  "surname": "Bommezijn",
  "mugshot": "https://i.ibb.co/ZVdRwGv/IMG-0541.jpg",
  "githubHandle": "dewarian",
  "other": {"js":"6", "html":"6", "css": "6", "info":"Aspiring developer", "website":"bommezijn.me"}
}

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

// postData(`${url}/squads/1/teams/2/members`, putData)
//   .then(data => {
//       console.log('post', data);
//   });
 