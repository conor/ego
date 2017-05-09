const getTop = function (element, start) {
  // return value of html.getBoundingClientRect().top ... IE : 0, other browsers : -pageYOffset
  if (element.nodeName === 'HTML') return -start
  return element.getBoundingClientRect().top + start
}

const easeInOutCubic = function (t) {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
}

const position = function (start, end, elapsed, duration) {
  if (elapsed > duration) return end
  return start + (end - start) * easeInOutCubic(elapsed / duration) // <-- you can change the easing funtion there
  // return start + (end - start) * (elapsed / duration); // <-- this would give a linear scroll
}

export default function (el, duration = 500, callback, context = window) {
  let end

  if (typeof window !== 'object') return

  if (document.querySelectorAll === void 0 || window.pageYOffset === void 0) {
    return
  }

  const start = context.scrollTop || window.pageYOffset

  if (typeof el === 'number') {
    end = parseInt(el)
  } else {
    end = getTop(el, start)
  }

  const clock = Date.now()
  const requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    function (fn) {
      window.setTimeout(fn, 15)
    }

  const step = function () {
    const elapsed = Date.now() - clock
    if (context !== window) {
      context.scrollTop = position(start, end, elapsed, duration)
    } else {
      window.scroll(0, position(start, end, elapsed, duration))
    }

    if (elapsed > duration) {
      if (typeof callback === 'function') {
        callback(el)
      }
    } else {
      requestAnimationFrame(step)
    }
  }
  step()
}
