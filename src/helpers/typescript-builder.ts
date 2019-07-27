import { spawn } from 'child_process';

export const TranspileTypescript = (paths: string[]) => {
  return new Promise(resolve => {
    const child = spawn('npx', [
      'gapi',
      'build',
      '--glob',
      `${paths.toString()}`
    ]);
    // child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);
    child.on('close', code => {
      if (code !== 0) {
        throw new Error();
      }
      resolve();
    });
  });
};
