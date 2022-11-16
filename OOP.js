//cara 1
function mail() {
    this.from = "rizalzeri@gmail.com";
    this.sendMessage = function(msg,to){
        console.log(`you send ${msg} untuk ${to} oleh ${this.from}`);
    }
}

const mail1 = new mail();
mail1.sendMessage("I love you","Ibu");

//cara 2
class maill{
    constructor(){
        this.from = "rizalzeri@gmail.com";
    }
    sendMessage(msg , to){
        console.log(`you send ${msg} untuk ${to} oleh ${this.from}`);
    }

}
const mail2 = new maill();
mail2.sendMessage("Aku suka kamu","ayah");
class mailll{
    constructor(author){
        this.from = author;
        this._contacts = [];
    }
    sendMessage(msg,to){
        console.log(`you send ${msg} untuk ${to} dari ${author}`);
        this._contacts.push(to);
    }
    showAllContact(){
        return this._contacts;
    }
}

class whatsapp extends mailll {
    constructor(username,isBusinessAccount,phoneNumber){
        super(phoneNumber);
        this.username = username;
        this.isBusinessAccount = isBusinessAccount;
    }
    // myProfile(){
    //     return `my name ${this.username}, is ${this.isBusinessAccount ? 'Business' : 'Personal'}`;
    // }

}

const wa = new whatsapp("dicoding",true,"085290413373");
console.log(wa.from);

//object komposit
//1
const canSendMessage = self => ({
    sendMessage : () => console.log("send message :",self.message)
})
const isValidPhone = self => ({
    isValid : () => console.log("valid phone : ", self.from)
})
const personalEnterpriseBehavior = self => ({
    createCatalog : () => console.log("catalog has created : ",self.store)
});
//crate object composition
const personalEnterprise = (from,message,store) => {
    //atribute
    const self = {
        from,
        message,
        store
    };

    //methode
    
    // membuat objek compostioon
    return Object.assign(self,personalEnterpriseBehavior(self),canSendMessage(self),isValidPhone(self))
}
const pe1 = personalEnterprise('zeri@gmail.com','aku suka kamu','Tokopedia');
pe1.createCatalog();
pe1.sendMessage();  

// const myAge = birthday => {
//     const birtday = new Date(birthday);
//     const today = Date.now(); // today menghasilkan nilai miliseconds saat ini
    
//     const diff_ms = today - birtday.getTime(); // menghitung selisih nilai miliseconds hari ini dan tanggal lahir
//     const diffDate = new Date(diff_ms);
    
//     return diffDate.getFullYear() - 1970; // 1970 adalah representasi 0 dari miliseconds
//   };

const umurku = birthday => {
    const birtday = new Date(birthday);
    const today = Date.now();

    const diff_ms = today - birtday.getTime();
    const diffDate = new Date(diff_ms);

    return diffDate.getFullYear() - 1970;
}

console.log(umurku("2000-12-31"));