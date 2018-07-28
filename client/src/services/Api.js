'use strict'

/* Back-end connector */

import axios from 'axios'
import {url as baseURL} from '../../../server/config'

export default () => {
  return axios.create({
    baseURL
  })
}
