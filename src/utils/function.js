/**
 * 获取两个值之间的随机值
 * @param low
 * @param  high
 * @returns {number}
 */
export const getRangeRandom = (low, high) => Math.ceil(Math.random() * (high - low) + low)

/**
 * 获取0 ~ 30 之间的一个任意正负值
 * @returns {string}
 */
export const get30DegRandom = () => (Math.random() > 0.5 ? '' : '-') + Math.ceil(Math.random() * 30)
