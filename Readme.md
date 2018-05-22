# Webpack 4 configuration for a modular app

* The Shell app consists of miniapps plus some glue code, primarily for miniapp
  routing.
* Project has to be inside a monorepo. Each miniapp lies inside an npm/yarn
  workspace.
* Code splitting on async imports; webpack 4 provides this out of the box.
* Webpack runtime is extracted in its own chunk. This way, when rebuilding the
  shell, chunks with no changes retain their previous chunkhash, i.e. their
  content remains the same.
* A few create-react-app goodies are included. I plan to include more of those.
