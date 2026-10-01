#!/usr/bin/env bash
#
# This file is part of the jc-firefox-settings:
# https://github.com/jamescherti/jc-firefox-settings
#
# Copyright (C) 2019-2026 James Cherti
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

set -euf

LIST_FIREFOX_DIRS=("$HOME/.mozilla/firefox"
  "$HOME/.var/app/org.mozilla.firefox/.mozilla/firefox")
VIDEO_CARD=""
CPU_GEN=99

update_firefox_config() {
  local user_js="$1"
  local user_chrome="$2"

  local firefox_dir
  for firefox_dir in "${LIST_FIREFOX_DIRS[@]}"; do
    if ! [[ -d "$firefox_dir" ]]; then
      continue
    fi

    # Find all profile directories containing times.json
    find "$firefox_dir" -maxdepth 2 -name "times.json" -print0 \
      | while IFS= read -r -d '' times_json; do
        local dest_dir
        dest_dir=$(dirname "$times_json")

        # Check for storage.sqlite
        if [[ -f "$dest_dir/storage.sqlite" ]]; then
          echo "[INSTALL] Copying user.js to $dest_dir"
          cp -v "$user_js" "$dest_dir"

          echo "[INSTALL] Copying $user_chrome to $dest_dir/$user_chrome"
          mkdir -p "$dest_dir/chrome/"
          cp -v "$user_chrome" "$dest_dir/chrome/userChrome.css"

          # --------------------------------------------------------------------
          # MEMORY MANAGEMENT
          # --------------------------------------------------------------------
          # Limit the number of content processes. Firefox defaults to 8. Your
          # install script sets this to the thread count (4 on a T420s). Setting
          # this explicitly to 2 will significantly reduce RAM usage if the
          # machine has 4GB or 8GB of RAM.
          local process_count=$(($(nproc) - 1))
          if [[ "$process_count" -lt 1 ]]; then
            process_count=1
          fi
          echo "user_pref(\"dom.ipc.processCount\", ${process_count});" \
            >>"$dest_dir/user.js"

          if [[ "$VIDEO_CARD" == "nvidia" ]]; then
            {
              # On NVIDIA GPUs, recent drivers may require this flag to enable
              # VA-API decoding, but forcing it on other hardware (especially
              # some Intel GPUs) can lead to browser instability, crashes, or
              # black frames during video playback.
              echo 'user_pref("media.hardware-video-decoding.force-enabled",' \
                'true);'

              # Configure the EGL backend and DMA-BUF sharing, which the
              # proprietary NVIDIA driver expects.
              echo 'user_pref("gfx.x11-egl.force-enabled", true);'

              # On NVIDIA, keep the webrender compositor false because it is
              # highly unstable and frequently causes crashes.
              echo 'user_pref("gfx.webrender.compositor.force-enabled", false);'

              # On NVIDIA, disable the internal VP8/VP9 decoders, forcing the
              # use of the system FFmpeg and VA-API
              echo 'user_pref("media.ffvpx.enabled", false);'

              # Disabling AV1 is an optimization for keeping a old computers
              # usable on the modern web. Explicitly telling Firefox to reject
              # AV1 effectively force streaming platforms like YouTube to fall
              # back to H.264 video streams. This efficient workaround shifts
              # the decoding burden back to the GPU's native H.264 hardware
              # decoder, instantly dropping CPU usage and restoring smooth,
              # cool, and responsive media playback.
              # echo 'user_pref("media.av1.enabled", false);'

              #  Set media.rdd-ffmpeg.enabled to true (enabled) on NVIDIA.
              #  Because NVIDIA requires you to use the system FFmpeg (via the
              #  nvidia-vaapi-driver), this setting ensures the system FFmpeg
              #  runs securely within the RDD process. On Intel, you can leave
              #  this false (disabled) because Intel simply uses Firefox's
              #  internal decoder instead.
              #
              # On Intel / Sandy Bridge hardware, forcing the Remote Data
              # Decoder (RDD) to handle FFmpeg can sometimes cause a "deadlock"
              # where the sandbox waits for a response from the buggy Intel
              # driver that never comes. This makes the tab unresponsive to
              # clicks on Intel video cards and should only be used on NVIDIA
              # cards.
              echo 'user_pref("media.rdd-ffmpeg.enabled", true);'
            } >>"$dest_dir/user.js"
          elif [[ "$VIDEO_CARD" == "intel" ]]; then
            {
              echo 'user_pref("media.hardware-video-decoding.force-enabled",' \
                'false);'

              # Intel relies on the open-source Mesa graphics drivers, which
              # have provided robust EGL support for years. Because of this,
              # Firefox automatically detects and enables EGL on Intel setups
              # perfectly on its own. Using a "force" flag overrides the
              # built-in safety checks and fallback mechanisms of the browser.
              # While NVIDIA historically needed this forced due to driver
              # quirks, forcing it on Intel is redundant and can occasionally
              # cause instability.
              echo 'user_pref("gfx.x11-egl.force-enabled", false);'

              # Enable WebRender Compositor: This shifts more of the page
              # composition workload to the GPU, freeing up the CPU and
              # improving scrolling framerates.
              # echo 'user_pref("gfx.webrender.compositor.force-enabled", true);'

              # This is the internal Firefox decoder.
              echo 'user_pref("media.ffvpx.enabled", true);'

              # Disabling AV1 is an optimization for keeping a old computers
              # usable on the modern web. Explicitly telling Firefox to reject
              # AV1 effectively force streaming platforms like YouTube to fall
              # back to H.264 video streams. This efficient workaround shifts
              # the decoding burden back to the GPU's native H.264 hardware
              # decoder, instantly dropping CPU usage and restoring smooth,
              # cool, and responsive media playback.
              # VP9 hardware decoding became standard in 7th Gen
              if ((CPU_GEN < 7)); then
                # Disable Reader View parsing on page load. Firefox parses every
                # loaded page in the background to determine if it can be
                # displayed in Reader View. Disabling this saves CPU cycles on
                # older dual-core processors.
                echo 'user_pref("reader.parse-on-load.enabled", false);'

                echo 'user_pref("media.mediasource.vp9.enabled", false);'
              fi

              # AV1 hardware decoding became standard in 11th Gen
              if ((CPU_GEN < 11)); then
                echo 'user_pref("media.av1.enabled", false);'
              fi

            } >>"$dest_dir/user.js"
          fi

          local local_user_js="$HOME/.firefox-local-user.js"
          if [[ -f "$local_user_js" ]]; then
            echo "[INSTALL] Appending $local_user_js to $dest_dir/user.js"
            echo "" >>"$dest_dir/user.js"
            echo "// --- Local user.js overrides ---" >>"$dest_dir/user.js"
            cat "$local_user_js" >>"$dest_dir/user.js"
          fi

        else
          echo "[IGNORED] $dest_dir (no storage.sqlite)"
        fi
      done
  done
}

detect_cpu_gen() {
  local cpu_model
  cpu_model=$(grep -m1 'model name' /proc/cpuinfo || true)

  if [[ "$cpu_model" =~ i[3579]-([0-9]+) ]]; then
    local model_num="${BASH_REMATCH[1]}"

    # e.g., i5-520M (1st Gen, 3 digits)
    if ((${#model_num} == 3)); then
      CPU_GEN=1
    elif ((${#model_num} == 4)); then
      # Handle 10th/11th/12th gen mobile (e.g., 1165 -> 11) vs 2nd-9th gen (e.g., 2520 -> 2)
      if [[ "${model_num:0:1}" == "1" ]]; then
        CPU_GEN="${model_num:0:2}"
      else
        CPU_GEN="${model_num:0:1}"
      fi
    # e.g., i9-10900K (10th Gen+, 5 digits)
    elif ((${#model_num} >= 5)); then
      CPU_GEN="${model_num:0:2}"
    fi
  elif echo "$cpu_model" | grep -iqE 'Core.*(2|Duo|Quad)'; then
    # Legacy pre-Core i-series hardware (e.g., Core 2 Duo)
    CPU_GEN=1
  fi
}

main() {
  # Cd to the script directory
  local SCRIPT_DIR
  SCRIPT_DIR=$(dirname "$(realpath "${BASH_SOURCE[0]}")")
  cd "$SCRIPT_DIR"

  # Detect the video card type
  if command -v lspci >/dev/null 2>&1; then
    if lspci | grep -i vga | grep -iq nvidia; then
      VIDEO_CARD=nvidia
      echo "[INFO] NVIDIA GPU detected." \
        "Applying hardware-specific configuration."
      echo
    elif lspci | grep -i vga | grep -iq intel; then
      VIDEO_CARD=intel
      echo "[INFO] Intel GPU detected." \
        "Applying hardware-specific configuration."
      echo
    fi
  fi

  detect_cpu_gen

  # Copy user.js file to all destinations
  update_firefox_config user.js userChrome.css

  echo
  echo "Success."
}

main "$@"
