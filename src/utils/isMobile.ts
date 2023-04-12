const mobileAgents = [
  /Android/i,
  /webOS/i,
  /iPhone/i,
  /iPad/i,
  /iPod/i,
  /BlackBerry/i,
  /Windows Phone/i
]

const isMobile = () => {
  if (typeof window === 'undefined') return false

  const some = mobileAgents.some((regex) => navigator.userAgent.match(regex))

  return some
}

export default isMobile
