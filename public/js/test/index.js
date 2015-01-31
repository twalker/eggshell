import accessor from './accessor'
import ajax from './ajax'
import app from './app'
import backbonePromises from './backbone-promises'
import fetchOnce from './fetch-once'

var tests = {
  ajax,
  accessor,
  app,
  backbonePromises,
  fetchOnce
}
function runTest(name){
  console.log('RUN', name, 'unit test')
  //tests[name]()
  global.mocha.run()
}
global.runTest = runTest;

export default runTest