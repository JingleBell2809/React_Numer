import { evaluate } from 'mathjs'

export const Calbisection = (xl, xr, new_Equation) => {
    const error = (xold, xnew) => Math.abs((xnew - xold) / xnew) * 100;

    const check_bisection = (xl, xr) => {
        let scope;
        scope = {
            x: xl,
        }
        var a = evaluate(new_Equation, scope);
        scope = {
            x: xr,
        }
        let b = evaluate(new_Equation, scope);
        return (a * b);
    }

    let data = [];
    var xm, fXm, fXr, ea, scope;
    var iter = 0; 
    var x_old = 0;
    var MAX = 50; 
    const e = 0.00001;
    var obj = {};

    if (check_bisection(xl, xr) < 0) {
        do {
            if (iter !== 0)
                x_old = xm + 0;
            xm = (xl + xr) / 2.0;
            scope = {
                x: xr,
            }
            fXr = evaluate(new_Equation, scope) 
            scope = {
                x: xm,
            }
            fXm = evaluate(new_Equation, scope)

            iter++;
            if (fXm * fXr < 0) {
                obj = {
                    iteration: iter,
                    Xl: xl,
                    Xm: xm,
                    Xr: xr
                }
                data.push(obj)
                xl = xm;
            } else {
                obj = {
                    iteration: iter,
                    Xl: xl,
                    Xm: xm,
                    Xr: xr
                }
                data.push(obj)
                xr = xm;
            }
            ea = error(x_old, xm);
        } while (ea > e && iter < MAX);
    }
    return{datanew:data, xnew:xm}
}