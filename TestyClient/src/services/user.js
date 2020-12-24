
function getUser(artist_name, startNum, getRtnCnt) {
    return fetch(GLOBALS.SERVER_URL+'/users/userList/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
      })
    })
    .then((response) => response.json())
    .then((response) => {
        return response;
    })
  }

  export default {
    getUser: getUser
  }