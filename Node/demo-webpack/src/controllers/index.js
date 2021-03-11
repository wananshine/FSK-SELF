import indexTpl from '../Views/index.art'
import signinTpl from '../Views/signin.art'

const htmlIndex = indexTpl({})
const htmlSignin = signinTpl({})

const _handleSubmit = (router)=>{
  return()=>{
    router.push('/home')
  }
}

const home = (router)=>{
  return (req, res, next)=>{
    res.render(htmlIndex)
  }
}

const signin = (router)=>{
  return (req, res, next)=>{
    res.render(htmlSignin)
    _handleSubmit(router)
  }
}


export {
  home,
  signin
}
