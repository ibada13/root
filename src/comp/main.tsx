let Main = () => { 
    let x = document.querySelectorAll('input') as NodeListOf<HTMLInputElement>
    let m = Number(x[0].value)
    if (m==0) { 
        x[2].value="0"
    }
    else if (m < 0) {
        x[2].placeholder = "seriously ?"
     }
    else if(m > 0) {
    let r = Number(x[1].value)
    let i: number = 0
    let k: number = -1
    let d: number = 1
    let f:number=1,l:number = 1
    let ts,tp: number 
    let p :number = 0 
    tp = Math.sqrt(m + (0.9 / r)) 
    for (i = 1; i <= 100;i++) { 
        k = -k
        d = 2 * d
        f = f * i
        while (2*i -1 - 2 *p !==1) { 
            l = (2*i -1 - 2 *p)*l
            p=p+1
        }
        ts = (k * l*((m+(0.9/r))**((-2*i+1)/2))) / d 
        tp = ts*(1/r)*(m)/f +tp
    }


        x[2].value = `${tp}`
            ;
    }

}
export {Main}