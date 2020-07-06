const get = createGetter()
const set = createSetter()

function createGetter() {
  return function get(target, key, receiver) {
    // proxy + reflect

    // todo。。。
    const res = Reflect.get(target, key, receiver)

    console.log('用户对这个对象取值了', target, key)
    return res
  }
}
function createSetter() {
  return function set(target, key, value, receiver) {
    const res = Reflect.set(target, key, value, receiver)
    console.log('用户对这个对象设置值了', target, key)
    return res
  }
}

// 拦截普通对象和数组
export const mutableHandler = {
  get,
  set,
}
