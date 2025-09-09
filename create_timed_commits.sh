#!/bin/bash

# Create docs directory if it doesn't exist
mkdir -p docs

# Base time (current time)
BASE_TIME=$(date +%s)

# Create a commit with a specific timestamp
make_commit() {
  local file=$1
  local message=$2
  local minutes_offset=$3
  
  # Create or modify a file
  echo "# $message" > $file
  echo "" >> $file
  echo "Content updated at commit $minutes_offset" >> $file
  
  # Add the file to staging
  git add $file
  
  # Calculate the commit time (current time + offset in minutes)
  COMMIT_TIME=$((BASE_TIME - minutes_offset * 60 * 5))
  
  # Format the time for Git
  GIT_COMMIT_DATE=$(date -d @$COMMIT_TIME "+%Y-%m-%d %H:%M:%S")
  
  # Commit with the specified date
  GIT_AUTHOR_DATE="$GIT_COMMIT_DATE" GIT_COMMITTER_DATE="$GIT_COMMIT_DATE" git commit -m "$message"
  
  echo "Created commit '$message' with timestamp $GIT_COMMIT_DATE"
  echo "--------------------------------------------------"
}

# Create a series of commits with different timestamps
make_commit "docs/feature1.md" "docs: add initial feature documentation" 10
make_commit "docs/feature2.md" "feat: implement core functionality" 9
make_commit "docs/feature3.md" "style: update code formatting" 8
make_commit "docs/feature4.md" "fix: resolve issue with terminal colors" 7
make_commit "docs/feature5.md" "test: add unit tests for theme" 6
make_commit "docs/feature6.md" "refactor: improve theme structure" 5
make_commit "docs/feature7.md" "perf: optimize theme loading" 4
make_commit "docs/feature8.md" "docs: update installation instructions" 3
make_commit "docs/feature9.md" "ci: set up GitHub Actions workflow" 2
make_commit "docs/feature10.md" "feat: add new color palette options" 1

echo "All commits created with 5-minute intervals between them"
