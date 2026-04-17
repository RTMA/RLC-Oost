#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"
mkdir -p backups

STAMP=$(date +"%Y%m%d-%H%M%S")
OUT="backups/labelstudio-data-${STAMP}.tar.gz"

tar -czf "$OUT" data
echo "[OK] Backup gemaakt: $OUT"
