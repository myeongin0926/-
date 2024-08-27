class MinHeap {
	constructor() {
		this.heap = [null];
	}
    
    push(value){
        this.heap.push(value);
        let currentIdx = this.heap.length - 1;
        let parentIdx = Math.floor(currentIdx / 2);
        
        while(parentIdx !== 0 && this.heap[parentIdx] > value){
            const temp = this.heap[parentIdx];
            this.heap[parentIdx] = value;
            this.heap[currentIdx] = temp;
            currentIdx = parentIdx;
            parentIdx = Math.floor(currentIdx/2);
        }
    }
    
    pop(){
      
      	// null과 원소 1개가 남았을 경우 나오지 않는 것을 대비
        if(this.heap.length === 2){
            return this.heap.pop();
        }
      
        const returnValue = this.heap[1];
        this.heap[1] = this.heap.pop();
        
        let currentIdx = 1;
        let leftIdx = 2;
        let rightIdx = 3;
        

        
        while(
            this.heap[currentIdx] > this.heap[leftIdx]  ||
            this.heap[currentIdx] > this.heap[rightIdx]
        ){
            if(this.heap[leftIdx] > this.heap[rightIdx]){
                const temp = this.heap[currentIdx];
                this.heap[currentIdx] = this.heap[rightIdx];
                this.heap[rightIdx] = temp;
                currentIdx = rightIdx;
            }else{
                const temp = this.heap[currentIdx];
                this.heap[currentIdx] = this.heap[leftIdx];
                this.heap[leftIdx] = temp;
                currentIdx = leftIdx;
            }
            
            leftIdx = currentIdx * 2;
            rightIdx = currentIdx * 2 + 1
        }
        
        return returnValue;
    }
    
  // 스코빌 지수가 value보다 커지면 false
    isScoville(value){
        return this.heap[1] >= value;
    }
}

function solution(scoville, K) {
    const heap = new MinHeap();
    let count = 0;
    
  // heap에 push
    scoville.forEach((el)=>{
        heap.push(el);
    });
    
  // heap class안에 size 함수를 만들었으면 더 좋았을 것 같다.
    const length = heap.heap.length;
    
  // 만약 heap안에 스코빌 지수가 요소가 존재하면 반복
    while(!heap.isScoville(K)){
      	// 배열의 길이보다 계산이 길어지는 것을 방지
        if(count >= length-1) break;
      
      	// 스코빌 지수 계산
        const firstLowSpicy = heap.pop();
        const secondLowSpicy = heap.pop();
        const mixScoville = firstLowSpicy + (secondLowSpicy * 2);
      // 넣어주기
        heap.push(mixScoville);
        count++;
    }
    
  // 스코빌 지수가 더 이상 커지지 않으면 -1을 return
    if(heap.pop()<K){
        return -1;
    }
    
    return count;
    
}