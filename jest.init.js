import {config} from '@vue/test-utils'
import {rootFuncs} from './__mocks__/main.mock'
import dotenv from 'dotenv'

config.mocks = rootFuncs

dotenv.config();
