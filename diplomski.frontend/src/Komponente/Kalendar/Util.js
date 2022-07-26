import dayjs from 'dayjs'

export function getMesec(mesec=dayjs().month()){
 mesec=Math.floor(mesec)
 const godina=dayjs().year()
 const prviDanMeseca=dayjs(new Date(godina,mesec,0)).day()
 
 let trenutniMesecBrojac=0-prviDanMeseca
 const daniMatrica=new Array(5).fill([]).map(() =>{
  return new Array(7).fill(null).map(()=>{
   trenutniMesecBrojac++
   return dayjs(new Date(godina,mesec,trenutniMesecBrojac))
  })
 })
 return daniMatrica;
}


