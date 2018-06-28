window.$utils = {
  getUser () {
    return JSON.parse(window.sessionStorage.user || null)
  },
  setUser (user) {
    window.sessionStorage.user = JSON.stringify(user)
  }
}
