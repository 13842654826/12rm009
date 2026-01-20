// ES6模块示例 - 数学运算模块
export const PI = 3.14159;

// 导出函数
export function circleArea(radius) {
    return PI * radius * radius;
}

export function circleCircumference(radius) {
    return 2 * PI * radius;
}

// 导出类
export class Calculator {
    constructor(name) {
        this.name = name;
    }
    
    add(a, b) {
        return a + b;
    }
    
    subtract(a, b) {
        return a - b;
    }
    
    multiply(a, b) {
        return a * b;
    }
    
    divide(a, b) {
        if (b === 0) {
            throw new Error("除数不能为零");
        }
        return a / b;
    }
    
    greet() {
        return `这是 ${this.name} 计算器`;
    }
}

// 默认导出
export default function sayHello(name = "World") {
    return `Hello, ${name}!`;
}