// 노드의 경우 순환참조가 일어나게되면 require에서 가져오는 객체를 empty 객체로 자동으로 변경해서 처리함 (StackOverflow, OOM 등 발생 방지)
require('./dep2');

