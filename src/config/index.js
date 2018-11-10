import { name as appName } from '../../app.json';

export const TOKEN = `${appName}-token`
export const USER = `${appName}-user`
export const SETTING = `${appName}-settings`
export * from './api'
/////
const isProduction = true
const production = {
  baseUrl: 'http://api.nytimes.com/svc/',
};
const development = {
  baseUrl: 'http://api.nytimes.com/svc/',
};
export const environment = isProduction ? production : development
