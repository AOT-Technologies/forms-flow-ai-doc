# Formsflow.ai Documentation


### Versioning

You can use the versioning CLI to create a new documentation version based on the latest content in the docs directory. That specific set of documentation will then be preserved and accessible even as the documentation in the docs directory continues to evolve.

Most of the time, you don't need versioning as it will just increase your build time, and introduce complexity to your codebase. Versioning is best suited for websites with high-traffic and rapid changes to documentation between versions. If your documentation rarely changes, don't add versioning to your documentation.

To better understand how versioning works and see if it suits your needs, you can read on below.

## Overview

```
website
├── sidebars.json        # sidebar for the current docs version
├── docs                 # docs directory for the current docs version
│   ├── foo
│   │   └── bar.md       # https://mysite.com/docs/next/foo/bar
│   └── hello.md         # https://mysite.com/docs/next/hello
├── versions.json        # file to indicate what versions are available
├── versioned_docs
│   ├── version-1.1.0
│   │   ├── foo
│   │   │   └── bar.md   # https://mysite.com/docs/foo/bar
│   │   └── hello.md
│   └── version-1.0.0
│       ├── foo
│       │   └── bar.md   # https://mysite.com/docs/1.0.0/foo/bar
│       └── hello.md
├── versioned_sidebars
│   ├── version-1.1.0-sidebars.json
│   └── version-1.0.0-sidebars.json
├── docusaurus.config.js
└── package.json
```

The `versions.json` file is a list of version names, ordered from newest to oldest.

## Terminology
Note the terminology we use here.
### Current version
- The version placed in the ./docs folder.
### Latest version / last version
- The version served by default for docs navbar items. Usually has path /docs.


Current version is defined by the file system location, while latest version is defined by the the navigation behavior. They may or may not be the same version! (And the default configuration, as shown in the table above, would treat them as different: current version at /docs/next and latest at /docs.)

## Tutorials

### Tagging a new version
1. First, make sure the current docs version (the ./docs directory) is ready to be frozen.
2. Enter a new version number.

```
npm run docusaurus docs:version 1.1.0
```

When tagging a new version, the document versioning mechanism will:

- Copy the full docs/ folder contents into a new versioned_docs/version-[versionName]/ folder.
- Create a versioned sidebars file based from your current sidebar configuration (if it exists) - saved as versioned_sidebars/version-[versionName]-sidebars.json.
- Append the new version number to versions.json.

## Updating an existing version
You can update multiple docs versions at the same time because each directory in `versioned_docs/` represents specific routes when published.

1. Edit any file.
2. Commit and push changes.
3. It will be published to the version.

Example: When you change any file in `versioned_docs/version-2.6/`, it will only affect the docs for version `2.6`.


## Deleting an existing version
You can delete/remove versions as well.

1. Remove the version from versions.json.

Example:
```
[
  "2.0.0",
  "1.9.0",
- "1.8.0"
]
```
1. Delete the versioned docs directory. Example: versioned_docs/version-1.8.0.
2. Delete the versioned sidebars file. Example: versioned_sidebars/version-1.8.0-sidebars.json.
