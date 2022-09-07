function calcular() {
    let juros = document.getElementById("txtj")
    let capital = document.getElementById("txtc")
    let taxa = document.getElementById("txtt")
    let periodo = document.getElementById("txtp")
    let txtempo = document.getElementById("taxatempo")
    let tempo = document.getElementById("tempo")

    j = Number(juros.value)
    c = Number(capital.value)
    t = Number(taxa.value)
    p = Number(periodo.value)

    txtp = txtempo.value
    tp = tempo.value

    if (txtp == "----" || tp == "----"){
        alert("Você não selecionou o período de incidência da taxa ou a unidade de tempo do período da aplicação")
    } else {
            if(txtp == tp){
                p = p
            } else {
                
                if (txtp == "d"){
                    if (tp == "m") {
                        p = p*30
                    } else if (tp == "bim") {
                        p = p*60
                    } else if (tp == "trim"){
                        p = p*90
                    } else if (tp == "quadrim"){
                        p = p*120
                    } else if (tp == "sem") {
                        p = p*180
                    } else if (tp == "a"){
                        p = p*360
                    }
                } else if (txtp == "m"){
                    if (tp == "d") {
                        p = p/30
                    } else if (tp == "bim") {
                        p = p*2
                    } else if (tp == "trim"){
                        p = p*3
                    } else if (tp == "quadrim"){
                        p = p*4
                    } else if (tp == "sem") {
                        p = p*6
                    } else if (tp == "a"){
                        p = p*12
                    }
                } else if (txtp == "bim"){
                    if (tp == "d") {
                        p = p/60
                    } else if (tp == "m") {
                        p = p/2
                    } else if (tp == "trim"){
                        p = 3*p/2
                    } else if (tp == "quadrim"){
                        p = p*2
                    } else if (tp == "sem") {
                        p = p*3
                    } else if (tp == "a"){
                        p = p*6
                    }
                } else if (txtp == "trim"){
                    if (tp == "d") {
                        p = p/90
                    } else if (tp == "m") {
                        p = p/3
                    } else if (tp == "bim"){
                        p = 2*p/3
                    } else if (tp == "quadrim"){
                        p = 4*p*3
                    } else if (tp == "sem") {
                        p = p*2
                    } else if (tp == "a"){
                        p = p*4
                    }
                }else if (txtp == "quadrim"){
                    if (tp == "d") {
                        p = p/120
                    } else if (tp == "m") {
                        p = p/4
                    } else if (tp == "bim"){
                        p = p/2
                    } else if (tp == "trim"){
                        p = 3*p/4
                    } else if (tp == "sem") {
                        p = 3*p/2
                    } else if (tp == "a"){
                        p = p*3
                    }
                } else if (txtp == "sem"){
                    if (tp == "d") {
                        p = p/180
                    } else if (tp == "m") {
                        p = p/6
                    } else if (tp == "bim"){
                        p = p/6
                    } else if (tp == "trim"){
                        p = p/2
                    } else if (tp == "quadrim") {
                        p = 2*p/3
                    } else if (tp == "a"){
                        p = p*2
                    }
                } else if (txtp == "a"){
                    if (tp == "d") {
                        p = p/360
                    } else if (tp == "m") {
                        p = p/12
                    } else if (tp == "bim"){
                        p = p/6
                    } else if (tp == "trim"){
                        p = p/4
                    } else if (tp == "quadrim") {
                        p = p/3
                    } else if (tp == "sem"){
                        p = p/2
                    }
                } 
            }
        

        if (juros.value == 0 && capital.value !=0 && taxa.value !=0 && periodo.value !=0){
            juros.value = c*(t/100)*p  
            juros.style.color = "blue"
            capital.style.color = "black"
            taxa.style.color = "black"
            period.style.color = "black"
        }else if (capital.value == 0 && juros.value !=0 && taxa.value !=0 && periodo.value !=0){
            capital.value = j/((t/100)*p)
            juros.style.color = "black"
            capital.style.color = "blue"
            taxa.style.color = "black"
            period.style.color = "black"
        }else if (taxa.value == 0 && capital.value !=0 && juros.value !=0 && periodo.value !=0){
            taxa.value = (j/(c*p))*100
            juros.style.color = "black"
            capital.style.color = "black"
            taxa.style.color = "blue"
            period.style.color = "black"
        }else if (periodo.value == 0 && capital.value !=0 && taxa.value !=0 && juros.value !=0){
            periodo.value = j/(c*(t/100))
            juros.style.color = "black"
            capital.style.color = "black"
            taxa.style.color = "black"
            period.style.color = "blue"
        }else{
            alert("Ocorreu algum erro no preenchimento dos campos")
        }
    }
}