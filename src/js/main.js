import Homepage from './pages/homepage'
import Share from './pages/share'

m.route(document.body, '/', {
  "/": Homepage,
  '/share': Share,
})