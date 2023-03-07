import {checkForName} from '../js/nameChecker'
describe("Passed checkForName", () => {
  test("Passed checkForName", ()=>{
		expect(checkForName('truong')).toEqual('truong')
	})
});