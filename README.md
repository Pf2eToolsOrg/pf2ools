# PF2ools

[![Tests](https://github.com/Pf2eToolsOrg/pf2ools/actions/workflows/test-web.yml/badge.svg)](https://github.com/Pf2eToolsOrg/pf2ools/actions/workflows/test-web.yml)

The Next Version of PF2ools, based on SkeletonUI and SvelteKit.

Other Repositories Include:

- [PF2ools-Data](https://github.com/Pf2eToolsOrg/pf2ools-data)
- [PF2ools-Utils](https://github.com/Pf2eToolsOrg/pf2ools-utils)

## Developing

1. `git clone https://github.com/Pf2eToolsOrg/pf2ools.git --recurse-submodules` (if you do not `--recurse-submodules`, you won't get the [data](https://github.com/Pf2eToolsOrg/pf2ools-data)!)
2. `npm install` (or `pnpm install` or `yarn`)
3. start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.
