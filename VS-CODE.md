##**[FEATURES OF VS-CODE](https://eff.org)**
###1. IntelliSense
A very helpful syntax highlighter and autocomplete feature that provides smart completions based on variable types, function definitions, and imported modules.
###2. Debugging
The built in debugger helps you accelerate editing, compiling, and debugging by adding breakpoints and watchers. By default it comes with support for NodeJS and can debug anything that is transpiled to JavaScript but other runtimes like C++ or Python will require an extension to be installed.
##3. Version Control
There is a built in GUI for Git for the most common commands which makes it really easy to instantly see the changes you're making in your project.
##4. Side-by-Side Editing
VS Code supports one of the most sought-after developer requests – editing code side by side. Simply Command (⌘) / Control click on a file from your project explorer and, voila, multiple files open up side by side, pre-docked and ready for edits. VS Code can support up to three simultaneous file edits, each of which can be launched from the command prompt as well.
##5.Customization
It is easy to configure Visual Studio Code to your liking through its various settings. Nearly every part of VS Code's editor, user interface, and functional behavior has options you can modify.
##**[PLUGINS OF VS-CODE](https://eff.org)**
##1. Auto Close Tag
* Automatically add closing tag when you type in the closing bracket of the opening tag
* After closing tag is inserted, the cursor is between the opening and closing tag
* Set the tag list that would not be auto closed
* Automatically close self-closing tag
* Support auto close tag as Sublime Text 3
* Use Keyboard Shortcut or Command Palette to add close tag manually
##2. HTML CSS Support
* Class attribute completion.
* Id attribute completion.
* Supports Zen Coding completion for class and id attributes.
* Scans workspace folder for css and scss files.
* Supports remote css files.
* Uses vscode-css-languageservice.
##3. Auto Rename Tag
When you rename one HTML/XML tag, automatically rename the paired HTML/XML tag
##4. Docker
* The Docker extension makes it easy to build, manage and deploy containerized applications from Visual Studio Code, for example:
Automatic Dockerfile, docker-compose.yml, and .dockerignore file generation (Press F1 and search for Docker: Add Docker files to Workspace)
* Syntax highlighting, hover tips, IntelliSense (completions) for docker-compose.yml and Dockerfile files
* Linting (errors and warnings) for Dockerfile files
* Command Palette (F1) integration for the most common Docker commands (for example docker build, docker push, etc.)
* Explorer integration for managing Images, running Containers, and Docker Hub registries
* Deploy images from Docker Hub and Azure Container Registries directly to Azure App Service
##5. Git History
* View and search git log along with the graph and details.
* View a previous copy of the file.
* View and search the history
* View the history of one or all branches (git log)
* View the history of a file
* View the history of a line in a file (Git Blame).
* View the history of an author
* Compare branches
* Compare commits
* Compare files across commits
* Miscellaneous features:
* Github avatars
* Cherry-picking commits
* Reverting commits
* Create branches from a commits
##6.EditorConfig for VSCOde
This plugin attempts to override user/workspace settings with settings found in .editorconfig files. No additional or vscode-specific files are required. As with any EditorConfig plugin, if root=true is not specified, EditorConfig will continue to look for an .editorconfig file outside of the project.
##7.GitLens
GitLens supercharges the Git capabilities built into Visual Studio Code. It helps you to visualize code authorship at a glance via Git blame annotations and code lens, seamlessly navigate and explore Git repositories, gain valuable insights via powerful comparison commands, and so much more.
##8.Image Cost
Calculates the size of imports and requires. Currently supports:
* Default importing: import Func from 'utils';
* Entire content importing: import * as Utils from 'utils';
* Selective importing: import {Func} from 'utils';
* Selective importing with alias: import {orig as alias} from 'utils';
* Submodule importing: import Func from 'utils/Func';
* Require: const Func = require('utils').Func;
* Supports both Javascript and Typescript