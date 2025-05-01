const odd = '홀수입니다';
const even = '짝수입니다';

// module.exports === exports === { odd, even }
// 일반적으로 하나만 exports 할거면 module.exports를 쓰고
// 두개 이상은 export.{파라미터명} 으로 쓰는 것이 권장

// node에서 지원하는 모듈기능. {} 안에 넣은 변수에 대한 데이터를 노드가 관리하는 js파일에서 사용가능함
// 변수지만 function도 줄수있고, 객체형태로도 줄수있음
module.exports = {
    odd, 
    even,
}