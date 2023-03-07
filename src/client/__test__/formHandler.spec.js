import { validateName } from '../js/formHandler';
describe('Passed HandleSubmit', () => {
	test('Passed HandleSubmit', () => {
		expect(validateName('')).toEqual('Not be blank');
	});
});
