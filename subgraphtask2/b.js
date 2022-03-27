const GRAPHQL_URL = "http://localhost:9000/";

async function Top100Users() {
  const response = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: `
        {
            users(orderBy:_balance  orderDirection:desc first:100){
                id
                _balance
              }
        }
      `,
    }),
  });

  const responseBody = await response.json();
  console.log(responseBody);
}

Top100Users();
