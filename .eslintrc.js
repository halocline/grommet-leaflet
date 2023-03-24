module.exports = {
  extends: [
    'airbnb',
    'prettier',
    'plugin:jsx-a11y/recommended',
    'plugin:grommet/recommended',
  ],
  plugins: ['react', 'react-hooks', 'jsx', 'jsx-a11y', 'prettier'],
  env: {
    browser: true,
  },
};
