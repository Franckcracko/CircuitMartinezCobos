const sections = [
    {
        id:'1',
        title:'Inicio',
        urlsection:'#'
    },
    {
        id:'2',
        title:'Celulares',
        urlsection:'#'
    },
    {
        id:'3',
        title:'Tablets',
        urlsection:'#'
    },
    {
        id:'4',
        title:'Computadoras',
        urlsection:'#'
    },
    {
        id:'5',
        title:'Laptops',
        urlsection:'#'
    },
    {
        id:'6',
        title:'Quienes Somos?',
        urlsection:'#'
    }

]
export const getSections = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(sections)
        }, 2000);
    })
}