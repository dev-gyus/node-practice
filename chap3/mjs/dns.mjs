import dns from 'dns/promises';

const ip = await dns.lookup('naver.com');
console.log(`ip =`, ip);
const a = await dns.resolve('naver.com', 'A');
console.log(`a = `, a);
const mx = await dns.resolve('naver.com', 'MX');
console.log(`mx = `, mx);
const cName = await dns.resolve('www.naver.com', 'CNAME');
console.log(`cName = `, cName);
const any = await dns.resolve('gilbut.co.kr', 'ANY');
console.log(`any = `, any);