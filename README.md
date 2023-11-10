## Get started

```
npm install - install dependencies
npm run start:dev or npm run start:dev:vite - start the server + frontend project in dev mode
```

----

## Scripts

- `npm run start` - Starting a frontend project on the webpack dev server
- `npm run start:vite` - Starting a frontend project on vite
- `npm run start:dev` - Starting a frontend project on webpack dev server + backend
- `npm run start:dev:vite` - Starting a frontend project on vite + backend
- `npm run start:dev:server` - Start the backend server
- `npm run build:prod` - Build in prod mode
- `npm run build:dev` - Build in dev mode (not minified)
- `npm run lint:ts` - Checking ts files with a linter
- `npm run lint:ts:fix` - Fixing ts files with a linter
- `npm run lint:scss` - Checking scss style files with a linter
- `npm run lint:scss:fix` - Fixing scss style files with a linter
- `npm run test:unit` - Run unit tests with jest
- `npm run test:ui` - Run screenshot tests with loki
- `npm run test:ui:ok` - Confirm new screenshots
- `npm run test:ui:ci` - Run screenshot tests in CI
- `npm run test:ui:report` - Generate a full report for screenshot tests
- `npm run test:ui:json` - Generating a json report for screenshot tests
- `npm run test:ui:html` - Generate HTML report for screenshot tests
- `npm run storybook` - launch Storybook
- `npm run storybook:build` - Build a storybook build
- `npm run prepare` - precommit hooks
- `npm run generate:slice` - Script for generating FSD slices

----

## Project architecture

The project was written in accordance with the Feature sliced design methodology

Link to documentation - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Working with translations

The project uses the i18next library to work with translations.
Translation files are stored in public/locales.

For comfortable work, we recommend installing the plugin for webstorm/vscode

i18next Documentation - [https://react.i18next.com/](https://react.i18next.com/)

----

## Tests

The project uses 3 types of tests:
1) Regular unit tests for jest - `npm run test:unit`
2) Screenshot testing with loki `npm run test:ui`
3) e2e testing with Cypress `npm run test:e2e`

More information about tests - [testing documentation](/docs/tests.md)

----

## Linting

The project uses eslint to check typescript code and stylelint to check style files.

Also for strict control of the main architectural principles
uses its own eslint plugin *eslint-plugin-rel-path-check*,
which contains 3 rules
1) path-checker - prohibits the use of absolute imports within one module
2) layer-imports - checks the correct use of layers from the point of view of FSD
   (for example widgets cannot be used in features and entitites)
3) pub-api-imports - allows imports from other modules only from public api. Has auto fix

##### Launching linters
- `npm run lint:ts` - Checking ts files with a linter
- `npm run lint:ts:fix` - Fixing ts files with a linter
- `npm run lint:scss` - Checking scss style files with a linter
- `npm run lint:scss:fix` - Fixing scss style files with a linter

----
## Storybook

The project describes story cases for each component.
Requests to the server are mocked using storybook-addon-mock.

A file with story cases is created next to the component with the extension .stories.tsx

You can start the storybook with the command:
- `npm run storybook`

More about [Storybook](/docs/storybook.md)

Example:

```typescript jsx
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator';
import HeartIcon from '../../assets/icons/outline-heart.svg';
import ChevronRightIcon from '../../assets/icons/chevron-right.svg';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { Theme } from '../../const/theme';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
   title: '6shared/Button',
   component: Button,
   tags: ['autodocs'],
};

export default meta;

export const Base: Story = {
   args: {
      children: 'Button',
   },
};

export const BaseActive: Story = {
   args: {
      children: 'Button',
      active: true,
   },
};

export const BaseDark: Story = {
   args: {
      children: 'Button',
   },
};
BaseDark.decorators = [ThemeDecorator(Theme.DARK)];
```


----

## Project configuration

For development, the project contains 2 configs:
1. Webpack - ./config/build
2. vite - vite.config.ts

Both collectors are adapted to the main features of the application.

All configuration is stored in /config
- /config/babel - babel
- /config/build - webpack configuration
- /config/jest - test environment configuration
- /config/storybook - storybook configuration

The `scripts` folder contains various scripts for refactoring\simplifying code writing\generating reports, etc.

----

## CI pipeline and pre commit hooks

The github actions configuration is located in /.github/workflows.
All types of tests, project and storybook assembly, and linting are run in ci.

In precommit hooks we check the project with linters, config in /.husky

----

### Working with data

Interaction with data is carried out using the redux toolkit.
If possible, reused entities should be normalized using EntityAdapter

Requests to the server are sent using [RTK query](/src/6shared/api/rtkApi.ts)

For asynchronous connection of reducers (so as not to pull them into a common bundle) it is used
[DynamicModuleLoader](/src/6shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

----

### Working with feature-flags

Allow the use of feature flags only using the toggleFeatures helper

an object with options is passed into it

{
name: name of the feature flag,
on: function that will work after the feature is enabled
of: function that will work after turning off the feature
}

To automatically remove a feature, use the remove-feature.ts script,
which takes 2 arguments
1. Name of the feature flag to be removed
2. State (on\off)

----


## Entities

- [Article](/src/5entities/Article)
- [Comment](/src/5entities/Comment)
- [Counter](/src/5entities/Counter)
- [Country](/src/5entities/Country)
- [Currency](/src/5entities/Currency)
- [Notification](/src/5entities/Notification)
- [Profile](/src/5entities/Profile)
- [Rating](/src/5entities/Rating)
- [User](/src/5entities/User)

## Features

- [addCommentForm](/src/4features/addCommentForm)
- [articleEditForm](/src/4features/articleEditForm)
- [articleRating](/src/4features/articleRating)
- [articleRecommendationsList](/src/4features/articleRecommendationsList)
- [AuthByUsername](/src/4features/AuthByUsername)
- [avatarDropdown](/src/4features/avatarDropdown)
- [editableProfileCard](/src/4features/editableProfileCard)
- [LangSwitcher](/src/4features/LangSwitcher)
- [notificationButton](/src/4features/notificationButton)
- [profileRating](/src/4features/profileRating)
- [ThemeSwitcher](/src/4features/ThemeSwitcher)
- [UI](/src/4features/UI)
