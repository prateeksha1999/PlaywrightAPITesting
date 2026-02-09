import { test, expect } from '@playwright/test';

//GET 
test('API GET Request', async ({ request }) => {
  const response = await request.get('https://fakestoreapi.com/products/1')
  expect(response.status()).toBe(200);
  console.log(await response.json());
})


//POST
test('API POST Request', async ({ request }) => {

  const response = await request.post('https://reqres.in/api/users', {
    data: {
        name: "James",
        job: "leader"
    }
  })
 expect(response.status()).toBe(201);
 console.log(await response.json());
})

//PUT
test('API PUT Request', async ({ request }) => {

  const response = await request.put('https://reqres.in/api/users/2', {
    data: {
        name: "Jill",
        job: "Software Engineer"
    }
  })
 expect(response.status()).toBe(200);
 console.log(await response.json());
})

//DELETE
test('API DELETE Request', async ({ request }) => {
  const response = await request.delete('https://reqres.in/api/users/2')
  expect(response.status()).toBe(204);
  
})




