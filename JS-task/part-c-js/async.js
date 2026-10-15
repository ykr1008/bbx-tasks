
const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/users/1",
  "https://jsonplaceholder.typicode.com/comments/1"
];

async function sequentialFetch() {
  console.time("Sequential");

  const results = [];

  for (const url of urls) {
    const response = await fetch(url);
    const data = await response.json();
    results.push(data);
  }

  console.timeEnd("Sequential");
  console.log("Sequential results:", results.length);
}
async function parallelFetch() {
  console.time("Parallel");

  const results = await Promise.all(
    urls.map(async (url) => {
      const response = await fetch(url);
      return response.json();
    })
  );

  console.timeEnd("Parallel");
  console.log("Parallel results:", results.length);
}

async function settledFetch() {
  console.time("AllSettled");

  const testUrls = [
    urls[0],
    urls[1],
    "https://httpbin.org/status/500"
  ];

  const results = await Promise.allSettled(
    testUrls.map(async (url) => {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      return response.json();
    })
  );

  console.timeEnd("AllSettled");

  results.forEach((result, index) => {
    console.log(`Request ${index + 1}:`, result.status);

    if (result.status === "rejected") {
      console.log("Reason:", result.reason.message);
    }
  });
}


async function fetchJson(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  return response.json();
}

async function test404() {
  try {
    await fetchJson(
      "https://jsonplaceholder.typicode.com/invalid-url"
    );
  } catch (error) {
    console.log("Caught error:", error.message);
  }
}

test404();


async function main() {
  await sequentialFetch();
  await parallelFetch();
  await settledFetch();
}

main();

