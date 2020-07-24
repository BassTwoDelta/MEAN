class minheap{
    constructor(){
        this.heap = [null]
    }

    insert = (value)=>{
        this.heap.push(value)
        if(this.heap.length > 2){
            let lvi = this.heap.length-1
            let lv = this.heap[lvi]
            let lvpi = Math.floor(lvi/2)
            let lvp = this.heap[lvpi]
            while(lv < lvp){
                [this.heap[lvi],this.heap[lvpi]] = [this.heap[lvpi],this.heap[lvi]]
                lvi = lvpi
                lvpi = Math.floor(lvi/2)
                lvp = this.heap[lvpi]
            }
        }
    }

    remove = ()=>{
        let val = this.heap[1]
        let lci =  this.heap.length-1
        let ci = 1

        while(2*ci <= lci && 2*ci+1 <= lci){
            let sci = this.heap[2*ci] < this.heap[2*ci+1] ? 2*ci : 2*ci+1
            this.heap[ci] = this.heap[sci]
            ci = sci
        }
        if(2*ci == lci){
            this.heap[ci] = this.heap[2*ci]
        }

        this.heap.pop()

        return val
    }

}