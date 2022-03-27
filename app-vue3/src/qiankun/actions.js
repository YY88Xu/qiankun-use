/*
 * @Author: shanyu
 * @Date: 2022-03-25 20:12:49
 * @LastEditTime: 2022-03-25 20:15:49
 * @LastEditors: shanyu
 * @Description: 
 */
function emptyAction(){
  console.warn("Current execute action is empty!")
}

class Actions{
  actions = {
    onGlobalStateChange: emptyAction,
    setGlobalState: emptyAction
  }

  setActions(actions){
    this.actions = actions
  }

  onGlobalStateChange(...args){
    return this.actions.onGlobalStateChange(...args)
  }

  setGlobalState(...args){
    return this.actions.setGlobalState(...args)
  }
}

const actions = new Actions()
export default actions