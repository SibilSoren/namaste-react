### Q1 - What is NPM?

#### It is basically a module which manages the packages which are used in the project.

### Q2 - What is 'Parcel/WebPack' Why do we need this?

#### These are the bundlers which optimise the code for production ready builds

    1. It supports HMR (Hot Module Reloading)
    2. Compressing the output
    3. Removes unwanted code from the files
    4. Caching
    5. Code Splitting
    6. Live Server

### Q3 - What is parcel-cache?

#### When we run npx parcel index.html, then this cache file is created when it store the previous changes and compares the recent changes and significantly reduces the build time and provide faster builds. Basically in this folder all the cached files are present.

Two types of exports and Import

1. export default [component name] -> default export

import Component from "../../../../../../"

2. export const URL = "http:// -> Named export

import {URL} from "../../../../../
