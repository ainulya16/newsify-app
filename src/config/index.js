import { name as appName } from '../../app.json';

export const TOKEN = `${appName}-token`
export const USER = `${appName}-user`
export const SETTING = `${appName}-settings`
export * from './api'
/////
const isProduction = true
const production = {
  baseUrl: 'http://api.nytimes.com/svc/',
  url:'http://nytimes.com/',
  apikey:'f3ca27ad76a64198bd881320e38a9786',
};
const development = {
  baseUrl: 'http://api.nytimes.com/svc/',
  url:'http://nytimes.com/',
  apikey:'f3ca27ad76a64198bd881320e38a9786',
};
export const environment = isProduction ? production : development
