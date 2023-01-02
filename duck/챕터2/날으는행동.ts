

export interface 날으는행동{
    날다:()=>void;

}

export class 날개로날기 implements 날으는행동{
    날다(): void {
        console.log("날고 있어요!")
    }

}
