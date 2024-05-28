function solution(cacheSize, cities) {
  let answer = 0;
  let cityArr = [];

  for (let i = 0; i < cities.length; i++) {
    let current = cities[i].toLowerCase();
    let findCity = cityArr.find((city) => city === current); 
    if (!findCity) {
      cityArr.push(current); 
      if (cityArr.length > cacheSize) {
        cityArr.shift();
      }
      answer += 5; 
    } else {
      cityArr = cityArr.filter((city) => city !== current);
      cityArr.push(current); 
      answer++; 
    }
  }

  return answer;
}