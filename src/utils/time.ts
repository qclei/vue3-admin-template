// 获取当前时间状态（早中晚）
export const getTimeState = () => {
  // 获取当前小时
  const hours = new Date().getHours()
  // 设置默认文字
  let message = ``
  // 判断当前时间段
  if (hours >= 0 && hours <= 10) {
    message = `早上`
  } else if (hours > 10 && hours <= 14) {
    message = `中午`
  } else if (hours > 14 && hours <= 18) {
    message = `下午`
  } else if (hours > 18 && hours <= 24) {
    message = `晚上`
  }
  // 返回当前时间段对应的状态
  return message
}
