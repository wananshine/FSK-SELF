module.exports = {
    navCheck: function navCheck (req, res, next) {
        return res.redirect('/signin')
      next()
    }
}