const fs = require('fs');
const path = require('path');
const unified = require('unified');
const vfile = require('to-vfile');
const remarkParse = require('remark-parse');
const remarkBreaks = require('remark-breaks');
const remarkToc = require('remark-toc');
const remarkRehype = require('remark-rehype');
const rehypeStringify = require('rehype-stringify');

// 🔍 Helper: Get all .md files recursively from the directory
function getMarkdownFiles(dir) {
  let results = [];
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat && stat.isDirectory()) {
      results = results.concat(getMarkdownFiles(fullPath));
    } else if (file.endsWith('.md')) {
      results.push(fullPath);
    }
  });
  return results;
}

// 🌀 Process each Markdown file
const markdownFiles = getMarkdownFiles('./');

markdownFiles.forEach(input => {
  unified()
    .use(remarkParse)
    .use(remarkBreaks)
    .use(remarkToc, {
      heading: 'Table of Contents',
      maxDepth: 3
    })
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(vfile.readSync(input), function (err, file) {
      if (err) {
        console.error(`❌ Error processing ${input}:`, err);
        return;
      }

      const newContent = String(file);
      fs.writeFile(input, newContent, function (err) {
        if (err) {
          console.error(`❌ Error writing ${input}:`, err);
        } else {
          console.log(`✅ Updated: ${input}`);
        }
      });
    });
});