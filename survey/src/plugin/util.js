// 小工具集

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find (list, f) {
  return list.filter(f)[0]
}

/**
 * 深拷贝对象(Deep copy)
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
export function deepCopy (obj, cache = []) {
  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  const hit = find(cache, c => c.original === obj)
  if (hit) {
    return hit.copy
  }

  const copy = Array.isArray(obj) ? [] : {}
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy
  })

  Object.keys(obj).forEach(key => {
    copy[key] = deepCopy(obj[key], cache)
  })

  return copy
}

/**
 * forEach for object
 */
export function forEachValue (obj, fn) {
  Object.keys(obj).forEach(key => fn(obj[key], key))
}

/**
 * 是不是对象
 */
export function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * 是不是函数
 */
export function isFunction (val) {
  return val && typeof val === 'function'
}

/**
 * 是不是Promise对象
 */
export function isPromise (val) {
  return val && typeof val.then === 'function'
}

/**
 * 是不是数组
 */
export function isArray (arr) {
  return arr !== null && Object.prototype.toString.call(arr) === '[object Array]'
}

/**
 * 判断两个对象是否相等
 */
export function isObjectValueEqual (a, b) {
  // 由于vue会给它观察的数据对象默认添加一个属性"__ob__"
  // 这可能会影响对比结果，所以先进行转换
  a = JSON.parse(JSON.stringify(a))
  b = JSON.parse(JSON.stringify(b))

  // Of course, we can do it use for in
  // Create arrays of property names
  const aProps = Object.getOwnPropertyNames(a)
  const bProps = Object.getOwnPropertyNames(b)

  // If number of properties is different,
  // objects are not equivalent
  if (aProps.length !== bProps.length) {
    return false
  }

  for (let i = 0; i < aProps.length; i++) {
    const propName = aProps[i]

    // If values of same property are not equal,
    // objects are not equivalent
    if (a[propName] !== b[propName]) {
      return false
    }
  }

  // If we made it this far, objects
  // are considered equivalent
  return true
}

/**
 * 生成一个指定范围内的随机数
 */
export function random (min, max) {
  if (max == null) {
    max = min
    min = 0
  }
  return min + Math.floor(Math.random() * (max - min + 1))
}

/**
 * 数组随机排序
 * 注意：用到了上面的isArray()和random()
 */
export function shuffleArray (arr) {
  if (!isArray(arr)) return

  let length = arr.length
  let shuffled = Array(length)

  for (let index = 0, rand; index < length; index++) {
    rand = random(0, index)
    if (rand !== index) shuffled[index] = shuffled[rand]
    shuffled[rand] = arr[index]
  }
  return shuffled
}

/**
 * hasClass
 */
export function hasClass (el, cls) {
  if (!el || !cls) return false
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.')
  if (el.classList) {
    return el.classList.contains(cls)
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1
  }
}

/**
 * addClass
 */
export function addClass (el, cls) {
  if (!el) return
  var curClass = el.className
  var classes = (cls || '').split(' ')

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i]
    if (!clsName) continue

    if (el.classList) {
      el.classList.add(clsName)
    } else {
      if (!hasClass(el, clsName)) {
        curClass += ' ' + clsName
      }
    }
  }
  if (!el.classList) {
    el.className = curClass
  }
}

/**
 * removeClass
 */
export function removeClass (el, cls) {
  if (!el || !cls) return
  var classes = cls.split(' ')
  var curClass = ' ' + el.className + ' '

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i]
    if (!clsName) continue

    if (el.classList) {
      el.classList.remove(clsName)
    } else {
      if (hasClass(el, clsName)) {
        curClass = curClass.replace(' ' + clsName + ' ', ' ')
      }
    }
  }
  if (!el.classList) {
    el.className = curClass.trim()
  }
}

// 对象extend，仅仅是浅拷贝
export function extend () {
  var target = arguments[0] || {}
  for (var i = 1; i < arguments.length; i++) {
    for (var prop in arguments[i]) {
      target[prop] = arguments[i][prop]
    }
  }
  return target
}
// 实体字符转成html
export function unescapeHtml (target) {
  return target.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ').replace(/&#32;/g, ' ')
}


export function toast (text){
  function _appendToast(){
    let el = document.getElementById("J-g-toast")
    // 加入body
    if (!el) {
      el = document.createElement('div');
      el.className == 'g-hidden';
      el.style.transition = 'all 0.2s';
      el.style.transform = 'scale(1)';
      // el.style.width = '3rem';
      el.style.height = '0.8rem';
      el.style.lineHeight = '0.8rem';
      el.style.background = '#000';
      el.style.color = '#fff';
      el.style.textAlign = 'center';
      el.style.zIndex = 999;
      el.style.position = 'fixed';
      el.style.left = '50%';
      el.style.top = '50%';
      el.style.padding = '0.1rem 0.3rem';
      el.style.transform = 'translate(-50%, -50%)';
      // el.style.marginLeft = '-1.5rem';
      // el.style.marginTop = '-0.6rem';
      el.style.borderRadius = '0.1rem';
      el.id = 'J-g-toast';
      document.body.appendChild(el)
    }
    return el
  }
  



  let toast = _appendToast()

  // 添加文字
  toast.innerHTML = '<span>' + text + '</span>';

  // 动画
  toast.className = '';
  setTimeout(function () {
    toast.style.transform = 'scale(1) translate(-50%, -50%)';
  }, 20);
  setTimeout(function () {
    toast.style.transform = 'scale(0) translate(-50%, -50%)';
  }, 2000);
  setTimeout(function () {
    toast.className = 'g-hidden';    
  }, 2100);
}
