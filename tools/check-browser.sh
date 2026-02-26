#!/bin/bash
# Quick browser error check
# Usage: ./check-browser.sh [url]
cd "$(dirname "$0")"
node capture-errors.js "${1:-http://localhost:3000}" --wait "${2:-5000}" 2>/dev/null | \
  jq '{
    url,
    summary,
    pageErrors: [.pageErrors[] | {message: .message[0:300]}],
    consoleErrors: [.consoleErrors[] | {type, text: .text[0:300]}],
    networkErrors
  }'
