import Say from '../src/index';

test('print sayonara', () => {
	console.log = jest.fn();
	Say();
	expect(console.log).toHaveBeenCalledWith('sayonara');
});