#!/usr/bin/env node
import minimist from 'minimist';
import github from 'octonode';

const argv = minimist(process.argv.slice(2));

if (argv._.length === 0) {
  console.error('Usage: github-label.js copy <src-repo> <dst-repo> [-t/--token=<github-token>]');
  process.exit();
}

if(argv._.length == 3){
  const token = argv.t || argv.token;
  const client = github.client(token);
  const repo_src = client.repo(argv._[1]);
  const repo_dst = client.repo(argv._[2]);
  repo_src.labels((err, data, headers) => {
    if (err) {
      console.error('Error can not access src repo.');
    } else if (data.length) {
      data.forEach((label) => {
        repo_dst.label(label,(err, data, headers) => {
        });
      });
    } else {
    }
  });

}
