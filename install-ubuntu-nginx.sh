#!/usr/bin/env bash
# Run ONLY on your Ubuntu VM with: sudo bash cloud/install-ubuntu-nginx.sh
# Installs a simple static HTTP demo, not a production/payment service.
set -euo pipefail
if [[ "${EUID}" != "0" ]]; then
  echo "Use: sudo bash cloud/install-ubuntu-nginx.sh" >&2
  exit 1
fi
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
apt-get update
DEBIAN_FRONTEND=noninteractive apt-get install -y nginx
install -d -m 755 /var/www/tastytreat
cp "${PROJECT_DIR}"/*.html "${PROJECT_DIR}/style.css" "${PROJECT_DIR}/script.js" /var/www/tastytreat/
cp -r "${PROJECT_DIR}/assets" /var/www/tastytreat/
cp "${PROJECT_DIR}/cloud/nginx-tastytreat.conf" /etc/nginx/sites-available/tastytreat
ln -sfn /etc/nginx/sites-available/tastytreat /etc/nginx/sites-enabled/tastytreat
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl enable nginx
systemctl restart nginx
printf '\nDeployment configured. Verify: curl -I http://localhost/\n'
