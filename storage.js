import fs from "fs";
 
class storage {
    list = [];
    
    constructor() {
        let file = fs.readFileSync("storage.json", {encoding: "utf8"});
        this.list 
    }
    write(value) {
        this.list.push(value);
        fs.writeFileSync("storage.json",JSON.stringify(this.list));

    }
    read() {
        return this.list;

    }

    delete(index) {
        this.list = this.list.filter((e,i) => i != index)
        fs.writeFileSync("storage.json",JSON.stringify(this.list));

    }
}
export default storage;