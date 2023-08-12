window.onload = function() {
  const mbtiResult = localStorage.getItem("mbti_result");
  if (mbtiResult) {
    document.getElementById("result").innerHTML = `당신의 MBTI는 ${mbtiResult}입니다!`;
  } else {
    document.getElementById("result").innerHTML = "아직 테스트를 진행하지 않았습니다!";
  }

  document.getElementById("restart-button").innerHTML = "테스트 하러 가기";
};
