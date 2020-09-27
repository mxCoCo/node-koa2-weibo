const server = require('./server')

function add (a, b) {
  return a + b
}

test('a + b = 10 ', () => {
  const res = add(1, 9)
  expect(10).toBe(res)
})

/**
 * 测试server接口
 */
// test('请求json接口返回结果数据测试', async () => {
//   const res = await server.get('/json')
//   const msg = {
//     title: "koa2 json"
//   }
//   expect(msg).toEqual(res.body)
// })
