// node에서 멀티 스레드 환경으로 작업 할 수 있음
const { isMainThread, Worker, parentPort, workerData } = require('worker_threads');

// Main스레드인지 Worker 스레드인지 분기해서 처리해야함
// Main스레드에서 job을 여러개 설정하고 Worker스레드에 분배하고, Worker스레드에서 이를 처리한뒤 Main스레드에 처리값을 넘기고
// Main스레드에서 이를 취합해서 결과를 내는것까지 모두 일일이 개발자가 처리해야함
if(isMainThread){ // 메인스레드
    const threads = new Set();
    threads.add(new Worker(__filename, {
        workerData: { start: 1},
    }));
    threads.add(new Worker(__filename, {
        workerData: { start: 2},
    }));
    for(let worker of threads){
        worker.on('message', (value) => console.log('워커로부터', value));
        worker.on('exit', () => {
            threads.delete(worker);
            if(threads.size === 0){
                console.log('워커 끝~');
            }
        });
    }
    
} else { // 워커스레드
    const data = workerData;
    parentPort.postMessage(data.start + 100);
}