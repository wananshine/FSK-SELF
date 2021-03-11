import SMERouter from 'sme-router'
const router = new SMERouter('root');
// document.getElementById('root').innerHTML=html;

import { home, signin } from '../controllers'

router.route('/', signin(router))

router.route('/home', home(router))

router.route('/sign', signin(router))


export default router
