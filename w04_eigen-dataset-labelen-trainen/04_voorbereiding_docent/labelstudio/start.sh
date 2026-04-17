#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

if [ ! -f .env ]; then
  cp .env.example .env
  echo "[INFO] .env aangemaakt vanuit .env.example"
  echo "[INFO] Pas .env aan voor productiegebruik (wachtwoord/poort)."
fi

docker compose up -d
echo "[OK] Label Studio gestart op http://localhost:${LS_PORT:-8080}"
