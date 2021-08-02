export const getUsers = (page, limit) => {
  const baseUrl = `https://60a6ad00b970910017eb2287.mockapi.io/users/?page=${page}&limit=${limit}`;

  return fetch(baseUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => data)
    .catch(e => console.log("oooooo"));
};

export const doRequests = async (
  methodType,
  bodyData = null,
  taskID = null
) => {
  let baseUrl = `https://60a6ad00b970910017eb2287.mockapi.io/todos`;

  if (methodType !== "GET" && methodType !== "POST") {
    baseUrl = `https://60a6ad00b970910017eb2287.mockapi.io/todos/${taskID}`;
  }

  try {
    const request = await fetch(baseUrl, {
      method: methodType,
      headers: {
        "Content-Type": "application/json"
      },
      body: bodyData ? JSON.stringify(bodyData) : null
    });

    if (request.status === 200 || request.status === 201) {
      return request.json();
    }
  } catch (error) {
    console.log({ error });
  }
};
