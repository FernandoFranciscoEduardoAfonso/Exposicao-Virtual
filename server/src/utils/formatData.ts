// export const formatPreco = (preco: number)=>{
//     return preco?.toLocaleString('pt-BR', { style: 'currency', currency: 'aoa' })
// }

// export const formatDate = (date: Date | string)=>{
//     return date?.toString().split('T')[0].split('-').reverse().join('/')
// }

export const formatPreco = (preco: number) => {
    return preco?.toLocaleString('pt-BR', { style: 'currency', currency: 'aoa' })
}

export const formatDate = (date: any) => {
    //o Prisma, por padrão, salva datas no banco no formato UTC, e o horário local do pc tem o formato (WAT, UTC+1) resultando num “atraso” de uma hora. 
    const dataLocal = new Date(date).toLocaleString(); //converte em horário local do pc

    if (dataLocal.includes(" ")) {
        return dataLocal?.toString().split(',')[0].split('-').reverse().join('/')
    } else {
        return dataLocal?.toString().split('T')[0].split('-').reverse().join('/')
    }
}

export const formatTime = (date: any) => {
    //o Prisma, por padrão, salva datas no banco no formato UTC, e o horário local do pc tem o formato (WAT, UTC+1) resultando num “atraso” de uma hora. 
    const dataLocal = new Date(date).toLocaleString(); //converte em horário local do pc

    if (dataLocal.includes(" ")) {
        return dataLocal?.toString().split(' ')[1].slice(0, 5)
    } else {
        return dataLocal?.toString().split('T')[1].slice(0, 5)
    }
}