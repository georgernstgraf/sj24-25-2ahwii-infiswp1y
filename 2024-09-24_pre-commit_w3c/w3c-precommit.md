# pre-commit hooks

## georgernstgraf

a pre-commit hook to prohibit not w3c valid code with git and vscode

## GitHub Copilot

To create a pre-commit hook that prohibits committing non-W3C valid HTML code, follow these steps:

Install the necessary tools: You need to install html-validator-cli which is a command-line interface for the W3C HTML Validator.

Create the pre-commit hook: Write a script that runs the HTML validator on the staged files and prevents the commit if any file is not valid.

### Step-by-Step Plan

#### Install html-validator-cli

```npm install -g html-validator-cli```

#### Create a pre-commit hook script

- Navigate to your Git repository.
- Create a new file in the .git/hooks directory named pre-commit.
- Make the script executable.

#### Write the script

- The script will find all staged HTML files.
- It will run the html-validator on each file.
- If any file is not valid, it will prevent the commit.

#### Pre-commit Hook Script

```bash

# !/bin/sh

# Get a list of all staged HTML files
STAGED_HTML_FILES=$(git diff --cached --name-only --diff-filter=ACM | grep '\.html$')

# If there are no HTML files, exit
if [ -z "$STAGED_HTML_FILES" ]; then
  exit 0
fi

# Validate each HTML file
for file in $STAGED_HTML_FILES; do
  echo "Validating $file..."
  html-validator --file="$file" --verbose
  if [ $? -ne 0 ]; then
    echo "HTML validation failed for $file. Commit aborted."
    exit 1
  fi
done

echo "All HTML files are valid. Proceeding with commit."
exit 0
```

#### Make the Script Executable

```chmod +x .git/hooks/pre-commit```

#### Explanation

- Install html-validator-cli: This tool will be used to validate HTML files.
- Pre-commit Hook Script:
- - git diff --cached --name-only --diff-filter=ACM | grep '\.html$': Finds all staged HTML files.
- - html-validator --file="$file" --verbose: Validates each HTML file.
- - If validation fails, the commit is aborted with an appropriate message.

This setup ensures that only W3C valid HTML code can be committed to your repository.
