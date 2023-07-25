export default function initControllers(){
    const controladores = document.querySelectorAll('[data-input]')
    const cssResult = document.querySelector('[data-result=css]')
    const btnResult = document.querySelector('[data-result=btn]')

    controladores.forEach(controlador => controlador.addEventListener('change', handleChange))

    const handleStyle = {
        element: btnResult,

        text(value){
            this.element.innerText = value
        },

        height(value){
            this.element.style.height = value + "px"
        },

        bgcolor(value){
            this.element.style.backgroundColor = value
        },

        color(value){
            this.element.style.color = value
        },

        width(value){
            this.element.style.width = value + "px"
        },

        border(value){
            this.element.style.border = value
        },

        borderRadius(value){
            this.element.style.borderRadius = value + "px"
        },

        fontFamily(value){
            this.element.style.fontFamily = value
        },

        fontSize(value){
            this.element.style.fontSize = value + "px"
        }
    }

    function handleChange(event){
        let name = event.target.name
        let value = event.target.value
        handleStyle[name](value)
        saveValue(name, value)
        showCss()
    }

    function saveValue(name, value){
        localStorage[name] = value
    }

    function setValues(){
        const properties = Object.keys(localStorage)
        properties.forEach(key => {
            const controlador = document.querySelector(`[name="${key}"][data-input]`)
            if(controlador){
                controlador.value = localStorage[key]
                handleStyle[key](localStorage[key])
                showCss()
            }
        })
    }

    setValues()

    function showCss(){
        cssResult.innerHTML = '<span>' + btnResult.style.cssText.split('; ').join(';</span><br><span>')
    }
}