module.exports = {
  root: true,
  extends: ['stylelint-config-carbon'],
  plugins: ['stylelint-plugin-carbon-tokens'],
  rules: {
    // set failing rules (not fixed by --fix) to warning
    'max-nesting-depth': [0, { severity: 'warning' }],
    'declaration-no-important': [
      true,
      {
        severity: 'warning',
      },
    ],
    'no-descending-specificity': [true, { severity: 'warning' }],
    'declaration-property-value-blacklist': [
      { '/.*/': ['unset'] },
      { severity: 'warning' },
    ],
    // ADDED TO TEST CARBON USE
    'carbon/layout-token-use': [true, { severity: 'warning' }],
    'carbon/motion-token-use': [true, { severity: 'warning' }],
    'carbon/theme-token-use': [true, { severity: 'warning' }],
    'carbon/type-token-use': [
      true,
      {
        severity: 'warning',
        acceptCarbonTypeScaleFunction: true,
        acceptCarbonFontWeightFunction: true,
      },
    ],
  },
};
