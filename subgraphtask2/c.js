const GRAPHQL_URL = "http://localhost:9000/";

async function Least100Users() {
  const response = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: `
        {
            users(orderBy:_balance  orderDirection:asc first:100){
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

Least100Users();
