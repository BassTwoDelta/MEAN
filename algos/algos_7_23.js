class minheap{
    constructor(){
        this.heap = [null];
    }

    insert = (value) =>{
        this.heap.push(value)
        lvi = this.heap.length -1
        lastvalue = this.heap[lvi]
        lvpi = Math.floor(lvi/2)
        lvp = this.heap[lvpi]
        while(lastvalue < lastvalue.parent){
            //swap lastvalue and lastvalue.parent
        }
    }
}