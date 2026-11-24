// Builds the gallery + every template into ./dist, ready for GitHub Pages.
//
//   dist/                 -> gallery (lists all templates)
//   dist/<template-name>/ -> each template
//
// ROOT_TEMPLATE=<name> publishes only that template at the site root (no gallery),
// for repositories that host a single demo.
//
// BASE_PATH is derived from GITHUB_REPOSITORY in CI ("owner/repo" -> "/repo/"),
// or can be set manually. Locally it defaults to "/".
import { execSync } from 'node:child_process';
import { cpSync, existsSync, readdirSync, rmSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const out = join(root, 'dist');

const repo = process.env.GITHUB_REPOSITORY?.split('/')[1];
const owner = process.env.GITHUB_REPOSITORY?.split('/')[0];
const isUserSite = repo && owner && repo.toLowerCase() === `${owner.toLowerCase()}.github.io`;
const base = process.env.BASE_PATH ?? (repo && !isUserSite ? `/${repo}/` : '/');
const site = process.env.SITE_URL ?? (owner ? `https://${owner.toLowerCase()}.github.io` : undefined);
const rootTemplate = process.env.ROOT_TEMPLATE;

const templatesDir = join(root, 'templates');
const templates = readdirSync(templatesDir).filter(
  (d) => !d.startsWith('_') && statSync(join(templatesDir, d)).isDirectory() && existsSync(join(templatesDir, d, 'package.json')),
);

rmSync(out, { recursive: true, force: true });

function build(workspace, basePath, target) {
  console.log(`\n▶ ${workspace}  (base: ${basePath})`);
  execSync(`npm run build -w ${workspace}`, {
    cwd: root,
    stdio: 'inherit',
    env: { ...process.env, BASE_PATH: basePath, ...(site && { SITE_URL: site }) },
  });
  cpSync(join(root, workspace, 'dist'), target, { recursive: true });
}

if (rootTemplate) {
  if (!templates.includes(rootTemplate)) throw new Error(`ROOT_TEMPLATE "${rootTemplate}" not found in templates/`);
  build(`templates/${rootTemplate}`, base, out);
  console.log(`\n✔ Built ${rootTemplate} at the site root into ./dist`);
} else {
  build('gallery', base, out);
  for (const t of templates) build(`templates/${t}`, `${base}${t}/`, join(out, t));
  console.log(`\n✔ Built gallery + ${templates.length} template(s) into ./dist`);
}
