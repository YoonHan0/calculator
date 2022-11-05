function operatorFunc(pre, last, operator) {
    var result = 0;
    switch (operator) {
        case '+':
            result = Number(pre) + Number(last);
            break;
        case '-':
            result = Number(pre) - Number(last);
            break;
        // case '%':    // % 계산은 함수 호출 전에 수행
        //     result = Number(pre) / Number(last);
        //     break;
        case '*':
            result = Number(pre) * Number(last);
            break;
    }
    return result;
}

var result = document.getElementById('result');
result.value = '';  // input창 초기화
var operator = '';   // 연산 기호를 넣을 변수
var tmp = '',       // 중간 연산을 위한 변수
    preNumber = '', // 첫 숫자
    nextNumber = '',    // 다음 숫자
    printResult = 0;    // 최종 결과

var buttons = new Array(...document.getElementsByTagName('button'));
    buttons.map(button => {
        button.addEventListener('click', (e) => {
        var value = e.target.innerText; // 각 버튼의 value
        result.value += value;

        switch (value) {
            case 'AC':          // 초기화
                result.value = '';  
                tmp = '',
                preNumber = '',
                nextNumber = '';
                break;
            case '%':           // 퍼센테이지 계산
                operator = '%';
                result.value = Number(tmp)/100;
                tmp = '';
                break;
            case '*':           // 곱하기
                operator = '*';
                preNumber = tmp;
                tmp = '';
                break;
            case '-':           // 빼기
                operator = '-';
                preNumber = tmp;
                tmp = '';
                break;
            case '+':           // 더하기
                operator = '+';
                preNumber = tmp;
                tmp = '';
                break;
            case '=':           // 결과값 출력
                nextNumber = tmp;
                printResult = operatorFunc(preNumber, nextNumber, operator);
                result.value = printResult; // 최종결과 input창에 출력
                tmp = printResult;  // 다음 연산을 위한 초기화
                break;
            default:            // 연산자가 아닌 숫자, '.'을 클릭했을 때
                tmp += value;    //변수에 숫자를 계속 쌓음
        }
    })
});

