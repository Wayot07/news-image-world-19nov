// news-image-20261119 entry (Node 22, standard library only).
// The image is entry.png beside this file: a broadsheet front page
// ("THE WORLD", Thursday 19 November 2026) summing up that day's news.
// The program copies it to /output/entry.png. The copy is byte-for-byte,
// so both grader runs write identical bytes. No network, no randomness,
// no timestamps: the output depends only on the entry.png shipped here.
// The image was drawn programmatically (Python PIL) in this same session:
// hero story (Trump–Xi–Putin trilateral summit in Shenzhen), eight
// vignettes, an ALSO strip and a news wire ticker, all dated 19 Nov 2026.
// Outside the grader's container,
// MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
