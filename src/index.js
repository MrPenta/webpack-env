// import { reactive, effect, computed, ref } from '@vue/reactivity'
import { reactive, effect, computed, ref } from './reactivity'

// console.log(reactive, effect, computed, ref)
// proxy 进行代理（拦截）
const state = reactive({ name: '有品', address: '六期' })

console.log(state.name)

// effect(() => {
// 	console.log(state.name)
// })

state.name = '小米有品'
