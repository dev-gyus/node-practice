// 노드에서 멀티쓰레드를 사용하는 경우는 거의 드뭄
// 암호화, 압축등의 CPU를 많이 사용하는 작업을 직접 구현할때나 사용 (멀티 쓰레드를 메인으로 사용하지 않는 것이 좋음)
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

// 해당 스레드가 메인 스레드일 경우 워커 쓰레드에 작업을 할당
if (isMainThread) {
    const threads = new Set();
    threads.add(new Worker(__filename, {
        workerData: { start: 1 },
    }));
    threads.add(new Worker(__filename, {
        workerData: { start: 2 },
    }));
    for (let worker of threads) {
        worker.on('message', (value) => console.log(`워커로부터 ${value}`));
        worker.on('exit', () => {
            threads.delete(worker);
            if (threads.size === 0) {
                console.log('워커 종료');
            }
        });
    }
}
// 워커 쓰레드일 경우
else {
    const data = workerData;
    parentPort.postMessage(data.start + 100);
}