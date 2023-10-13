#!/usr/bin/env node

const path = require('path');
const fs = require('fs');

const packageJson = fs.readFileSync('package.json');
const version = /"version": "(.+)"/.exec(packageJson)[1];

const buildGradle = fs.readFileSync('android/app/build.gradle');
const versionCode = /versionCode\s(.+)/.exec(buildGradle)[1];
const versionCodeBumped = buildGradle.toString().replace(/(\s*versionCode\s)(.*)/, (match, g1, g2) => `${g1}${+g2 + 1}`);
const versionCodeBumpedVersionSynced = versionCodeBumped.replace(/(\s*versionName\s").*"/, (match, g1) => `${g1}${version}_${+versionCode + 1}"`);
fs.writeFileSync('android/app/build.gradle', versionCodeBumpedVersionSynced);

console.log(`Version ${version} and versionCode ${+versionCode + 1} written to build.gradle`)
