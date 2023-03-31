import {createSlice} from "@reduxjs/toolkit";

export const resultSlice = createSlice({
    name:'result',
    initialState:{
        bmiResult:0,
        resultText:"",
        adviceText:"",
        storageData:[]
    },
    reducers:{
        changeBmi : (state,action) => {
            state.bmiResult = action.payload;
            const fatText = "Fazla kilolu olmak, obezite de dahil geniş bir değer aralığını içerir. Sağlıksız beslenme, hareketsiz yaşam tarzı gibi faktörler nedeniyle oluşan bu durum, kişide çeşitli sağlık sorunlarına zemin hazırlayabilir. Artan yağlanma ile kan kolesterol ve trigliserit değerleri yükselir, iyi kolesterol seviyesi azalır ve kalbin yükü artar. Bu gibi bulgular nedeniyle de kişide sağlık sorunları daha fazla oluşur. Fazla kilolu kişilerde gelişebilen sağlık sorunlarından bazıları şunlardır;Kalp-damar hastalıkları, Hipertansiyon, Diyabet, Ruh sağlığı bozuklukları, İç organlarda yağlanma, Kemiklerde kireçlenme, Sindirim sistemi rahatsızlıkları"
            if(action.payload<=18.5){
                state.resultText="Zayıf"
                state.adviceText="Genelde insanlar tarafından düşük vücut ağırlığı sağlıklı kabul edilse de kişinin boyuna göre ağırlığının zayıf olarak nitelendirilecek şekilde düşük olması da çeşitli sağlık risklerine neden olabilir. Bu sağlık riskleri şunlardır: Ciltte kuruma, Tüylenme, Vitamin ve diğer besin öğesi eksiklikleri, Kemik erimesi, Bağışıklık sisteminin düşmesi ve daha sık hastalanmak, Depresyon, Saçlarda dökülmeler, Halsizlik"
             }
             if(18.5<action.payload && action.payload<=24.9){
                 state.resultText="Normal"
                 state.adviceText="Vücut ağırlığının boya göre sağlıklı aralıkta olduğu kişilerin çoğunluğu için bazı hastalıklara yakalanma riski daha düşük olarak kabul edilir. Bu hastalıklar; özellikle diyabet, kalp-damar hastalıkları, tansiyon problemleri olarak ön plana çıkar. Normal vücut ağırlığı kişinin sağlıklı aralıkta olduğunu gösterse de vücuttaki yağ ve kas oranının bir göstergesi değildir. Bazı kişilerde ağırlık normal de olsa yağlanma olması gereken sınırların üzerinde olabilir. Bu gibi durumlarda sağlık riskleri oluşabilir. Normal aralıklarda olan kişilerin de mutlaka sağlıklı ve dengeli beslenmesi, düzenli fiziksel aktivite yapması gereklidir. Bu nedenle sağlıksız beslenen bir kişinin normal ağırlıkta olması onun sağlıklı olduğu anlamını taşımaz."
             }
             if(24.9<action.payload && action.payload<=30){
                 state.resultText="Kilolu"
                 state.adviceText=fatText
             }
             if(30<action.payload && action.payload<=35){
                state.resultText="1.Derece Obezite"
                state.adviceText=fatText
             }
             if(35<action.payload && action.payload<=40){
                 state.resultText="2.Derece Obezite"
                 state.adviceText=fatText
             }
             if(40<action.payload){
                 state.resultText="3.Derece Obezite"
                 state.adviceText=fatText
             }
             state.storageData.push({data:state.bmiResult,text:state.resultText})
             localStorage.setItem("history",JSON.stringify(state.storageData))
        },
        removeStorage: (state)=>{
            localStorage.removeItem("history")
            state.storageData= [];
        }

    }
})

export const {changeBmi,removeStorage} = resultSlice.actions;
export default resultSlice.reducer;