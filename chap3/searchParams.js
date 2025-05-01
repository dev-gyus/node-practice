const url = new URL('https://www.naver.com/?query=1&query=2&query2=쿼리2');
console.log(url);
console.log(url.searchParams);
console.log(url.searchParams.keys());
console.log(url.searchParams.values());

for (let key of url.searchParams.keys()) {
    console.log(`key = ${key} / values = ${url.searchParams.get(key)}`);
}