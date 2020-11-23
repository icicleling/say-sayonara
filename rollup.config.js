import del from 'rollup-plugin-delete';

export default {
	input: 'src/index.js',
	output: [
		{
			file: 'dist/lib/index.js',
			format: 'cjs',
			exports: 'default'
		},
		{
			file: 'dist/es/index.js',
			format: 'esm'
		}
	],
	plugins: [
		del({ targets: 'dist/*' })
	]
}