function getDNSStats( domains ) {
  const ter = {}
  domains.forEach(domain => {
    const splitted = domain.split('.').reverse()
    splitted.forEach((s, i) => {
      const before = splitted.slice(0, i)
      const value = '.' + [...before, splitted[i]].join('.')
      if (ter[value]) ter[value]++
      else ter[value] = 1
    })
  })
  return ter
}
console.log(getDNSStats(['code.yandex.ru', 'music.yandex.ru', 'yandex.ru']))
module.exports = {
  getDNSStats
};
