export async function runQueue<T>(
  concurrency: number,
  jobs: (() => Promise<T>)[],
): Promise<T[]> {
  const results: T[] = [];
  let index = 0;

  async function worker() {
    while (index < jobs.length) {
      const current = index++;
      results[current] = await jobs[current]();
    }
  }
  const workers = Array.from({ length: concurrency }, () => worker());
  await Promise.all(workers);

  return results;
}
