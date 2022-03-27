const GRAPHQL_URL = "http://localhost:9000/";

async function fetchUserBalance(user) {
  const response = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: `
        {
            users(where:{id:${user}}){
                _balance
            }
        }
      `,
    }),
  });

  const responseBody = await response.json();
  console.log(responseBody);
}

fetchUserBalance("0xf8d5a45c4b5fe0e56e51e00f84b29ab9b9fd9f8b");
