// eslint-disable-next-line import/no-unresolved
import parser from '@typescript-eslint/parser';
import react from "eslint-plugin-react"
import react_hooks from "eslint-plugin-react-hooks"
import unused_imports from "eslint-plugin-unused-imports";
import _import from "eslint-plugin-import"
import globals from "globals";

export default [
  {
    ignores: ["node_modules/"],

    settings: {
      react: {
        version: "detect"
      },

      "import/resolver": {
        node: {
          extensions: [".js", ".android.js", ".ios.js", ".svg", ".ts", ".tsx", ".android.tsx", ".ios.tsx", ".android.ts", ".ios.ts"]
        }
      }
    },

    languageOptions: {
      parser: parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.jest,
        ...globals.node,
        "__DEV__": "readonly"
      }
    },

    plugins: {
      react,
      "react-hooks": react_hooks,
      "unused-imports": unused_imports,
      "import": _import
    },

    rules: {
      "react/function-component-definition": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": "error",
      "no-process-env": "off",
      "no-process-exit": "off",
      "import/no-unresolved": ["error", { "commonjs": true, "amd": true }],
      "react/prop-types": "off",
      "eslint-comments/no-unlimited-disable": "off",
      "react/no-this-in-sfc": "off",
      "no-lone-blocks": "off",
      "function-call-argument-newline": "off",
      "no-console": "off",
      "no-undef": "error",
      "default-param-last": "off",
      "no-unused-vars": "off",
      "require-yield": "off",
      "no-unreachable": "error",
      "no-constant-condition": "off",
      "react/jsx-no-duplicate-props": "error",
      "no-case-declarations": "off",
      "react/no-unescaped-entities": "off",
      "no-dupe-keys": "error",
      "no-empty": "error",
      "no-mixed-spaces-and-tabs": "error",
      "react/display-name": "off",
      "react/jsx-key": "error",
      "react/no-string-refs": "off",
      "react/no-children-prop": "error",
      "react/no-direct-mutation-state": "off",
      "array-bracket-spacing": "error",
      "block-spacing": "error",
      "brace-style": "error",
      "camelcase": "off",
      "comma-dangle": "error",
      "comma-spacing": ["error", { "before": false, "after": true }],
      "key-spacing": [
        "error",
        {
          "beforeColon": false,
          "afterColon": true
        }
      ],
      "arrow-body-style": "off",
      "arrow-parens": "error",
      "arrow-spacing": "error",
      "constructor-super": "error",
      "generator-star-spacing": "error",
      "no-confusing-arrow": "error",
      "no-const-assign": "error",
      "react/jsx-props-no-spreading": "off",
      "react/state-in-constructor": "off",
      "prefer-named-capture-group": "off",
      "react/static-property-placement": "off",
      "no-dupe-class-members": "error",
      "no-duplicate-imports": "error",
      "no-this-before-super": "error",
      "no-useless-constructor": "error",
      "no-var": "error",
      "prefer-arrow-callback": "error",
      "prefer-const": "error",
      "prefer-destructuring": [
        "error", {
          "VariableDeclarator": {
            "array": false,
            "object": true
          },
          "AssignmentExpression": {
            "array": false,
            "object": false
          }
        }
      ],
      'prettier/prettier': "off",
      "prefer-template": "error",
      "rest-spread-spacing": "error",
      "sort-imports": [
        "error", {
          "ignoreCase": false,
          "ignoreDeclarationSort": true,
          "ignoreMemberSort": false,
          "memberSyntaxSortOrder": ["none", "all", "multiple", "single"]
        }
      ],
      "radix": "error",
      "strict": "error",
      "no-multiple-empty-lines": [
        "error",
        {
          "max": 1,
          "maxEOF": 1
        }
      ],
      "no-useless-escape": "off",
      "sort-keys": "off",
      "react/jsx-sort-default-props": "off",
      "react/jsx-indent": "off",
      "indent": [
        "error", 2, {
          "ignoredNodes": ["TemplateLiteral"]
        }
      ],
      "no-ternary": "off",
      "react/forbid-component": "off",
      "multiline-ternary": "off",
      "max-len": "off",
      "react/destructuring-assignment": "off",
      "no-return-assign": "off",
      "no-use-before-define": "off",
      "react/jsx-no-bind": "off",
      "react/jsx-max-depth": "off",
      "react/forbid-component-props": "off",
      "react/jsx-handler-name": "off",
      "react/no-set-state": "off",
      "no-invalid-this": "off",
      "no-negated-condition": "off",
      "no-magic-numbers": "off",
      "sort-vars": "off",
      "no-bitwise": "off",
      "no-lonely-if": "off",
      "react/jsx-no-literals": "off",
      "max-lines-per-function": "off",
      "react/jsx-filename-extension": "off",
      "no-mixed-operators": "off",
      "consistent-return": "off",
      "require-unicode-regexp": "off",
      "react/sort-comp": "off",
      "max-lines": "off",
      "global-require": "off",
      "react/no-access-state-in-setstate": "off",
      "one-var": "off",
      "react/no-multi-comp": "off",
      "no-unused-expressions": "off",
      "max-statements-per-line": "off",
      "no-nested-ternary": "off",
      "max-classes-per-file": ["error", 1],
      "line-comment-position": "off",
      "no-inline-comments": "off",
      "react/prefer-stateless-function": "error",
      "no-shadow": "off",
      "id-length": "off",
      "max-statements": "off",
      "prefer-promise-reject-errors": "off",
      "no-plusplus": "off",
      "max-params": "off",
      "react/no-unused-state": "off",
      "consistent-this": "off",
      "no-warning-comments": "off",
      "no-underscore-dangle": "off",
      "react/jsx-sort-props": "off",
      "react/jsx-indent-props": "off",
      "require-await": "off",
      "init-declarations": "off",
      "react/require-optimization": "off",
      "react/jsx-handler-names": "off",
      "react/sort-prop-types": "off",
      "react/destructuring-state": "off",
      "no-template-curly-in-string": "off",
      "react/prefer-es6-class": "off",
      "no-alert": "off",
      "class-methods-use-this": "off",
      "no-param-reassign": "off",
      "capitalized-comments": "off",
      "react/jsx-no-target-blank": "off",
      "react/jsx-boolean-value": "off",
      "react/jsx-wrap-multilines": "off",
      "react/jsx-pascal-case": "off",
      "react/jsx-equals-spacing": "off",
      "react/no-danger-with-children": "off",
      "react/no-deprecated": "off",
      "react/no-did-mount-set-state": "off",
      "react/no-did-update-set-state": "off",
      "react/no-will-update-set-state": "off",
      "react/react-in-jsx-scope": "off",
      "react/require-default-props": "off",
      "react/void-dom-elements-no-children": "off",
      "react/no-render-return-value": "off",
      "react/forbid-elements": "off",
      "react/no-adjacent-inline-elements": "off",
      "react/no-array-index-key": "off",
      "react/no-danger": "off",
      "react/no-find-dom-node": "off",
      "react/no-is-mounted": "off",
      "react/no-unstable-nested-components": "off",
      "react/no-unused-prop-types": "off",
      "react/no-unsafe": "off",
      "react/style-prop-object": "off"
    }
  }
];
