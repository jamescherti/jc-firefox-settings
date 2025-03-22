#!/usr/bin/env bash
#
# This file is part of the jc-firefox-settings:
# https://github.com/jamescherti/jc-firefox-settings
#
# Copyright (C) 2019-2025 James Cherti
#
# Distributed under terms of the MIT license.
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.
#

#!/bin/bash
set -euf -o pipefail

FIREFOX_DIR="$HOME/.mozilla/firefox"

cp_userjs() {
  local user_js="$1"

  # Find all profile directories containing times.json
  find "$FIREFOX_DIR" -maxdepth 2 -name "times.json" | while read -r times_json; do
    local dest_dir
    dest_dir=$(dirname "$times_json")

    # Check for storage.sqlite
    if [[ -f "$dest_dir/storage.sqlite" ]]; then
      echo "[INSTALL] Copying user.js to $dest_dir"
      cp -v "$user_js" "$dest_dir"
    else
      echo "[IGNORED] $dest_dir (no storage.sqlite)"
    fi
  done
}

cp_userjs user.js
