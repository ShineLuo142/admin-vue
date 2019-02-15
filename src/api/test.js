export function getUserInfo() {
  return new Promise((resolve) => {
    resolve({
      data: {
        roles: ['admin'],
        name: window.localStorage.getItem('username'),
        avatar: 'https://file.service.qq.com/user-files/uploads/201701/10f8c37ff0fc47ac76e8df4961e6784d.png',
        introduction: 'introduction'
      }
    })
  })
}