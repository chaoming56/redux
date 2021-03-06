import proc from "./proc";

export function runSaga({ channel, getState, dispatch }, saga, ...args) {
  // saga是一个Generator，运行后得到一个迭代器
  const iterator = saga(...args);

  const env = {
    channel,
    getState,
    dispatch,
  };

  // 执行迭代器
  proc(env, iterator);
}
