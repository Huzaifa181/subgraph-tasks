const GRAPHQL_URL = "http://localhost:9000/";

async function latest1000Transactions() {
  const response = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: `
        {   
            transfers(orderBy:timestamp  orderDirection:desc first:1000){
                id
                _from
                _to
                _amount
                timestamp
            }
        }
      `,
    }),
  });

  const responseBody = await response.json();
  console.log(responseBody);
}

latest1000Transactions();
