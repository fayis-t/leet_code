class Calculator {
    
    /** 
     * @param {number} value
     */
    constructor(value) {
        this.value = value;
        this.error = null;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value){
        this.value += value
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value){
        this.value -= value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */  
    multiply(value) {
        this.value *= value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if(value == 0){
            this.error = 'Division by zero is not allowed';
        }else{
            this.value /= value;
        }
        return this;
        
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.value = Math.pow(this.value, value);
        return this;
    }
    
    /** 
     * @return {number}
     */
    getResult() {
        if(this.error){
            return this.error;
        }
        return this.value;
    }
}