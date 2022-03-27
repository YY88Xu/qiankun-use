/*
 * @Author: shanyu
 * @Date: 2022-03-25 20:05:26
 * @LastEditTime: 2022-03-25 20:30:43
 * @LastEditors: shanyu
 * @Description: 
 */
import { initGlobalState } from "qiankun"

const initialState = {a: 100}
const actions = initGlobalState(initialState)

export default actions